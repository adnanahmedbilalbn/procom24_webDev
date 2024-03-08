from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
import crud, models, schemas
from database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ['*']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/api/auth/signup", response_model=schemas.UserCreate)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_username(db, username=user.username)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db=db, user=user)

@app.post("/api/auth/login")
def login_user(username: str, password: str, db: Session = Depends(get_db)):
    return crud.login_customer(db=db, username=username, password=password)

@app.get("/users/{username}", response_model=schemas.User)
def read_user_by_username(username: str, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_username(db, username=username)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

@app.post("/verify_login", response_model=bool)
def check_if_pass_is_correct(username: str, password: str, db: Session = Depends(get_db)):
    return crud.get_hashed_pass(db=db, username=username, password=password)

@app.post("/api/payments", response_model=schemas.paymentRequest)
def submit_request(request: schemas.paymentRequest, db: Session = Depends(get_db)):
    return crud.create_payment_request(db=db, request=request)

@app.get("/api/getPayments/{accountNumber}", response_model=[])
def get_payments(accountNumber: int, db: Session = Depends(get_db)):
    return crud.get_all_payments_of_customer(db=db, accountNumber=accountNumber)

@app.post("/api/setStatus/")
def set_status(data:object, db: Session = Depends(get_db)):
    return crud.setStatus(db=db, id=data.id, status=data.status)

# @app.get("/api/getAllPayments", response_model=[])
# def get_payments(db: Session = Depends(get_db)):
#     return crud.get_all_payments_of_all_customers(db=db)

# @app.get("/api/getPaymentsCount/{accountNumber}", response_model=[])
# def get_payments_count(accountNumber: int, db: Session = Depends(get_db)):
#     return crud.get_all_payments_of_customer_count(db=db, accountNumber=accountNumber)