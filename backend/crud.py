from sqlalchemy.orm import Session
import models, schemas
import json

# from utils import (
#     get_hashed_password,
#     create_access_token,
#     create_refresh_token,
#     verify_password
# )

from fastapi import FastAPI, status, HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.responses import RedirectResponse

# def login_customer(db: Session, username: str, password: str):
#     user = db.query(models.User).filter(models.User.username == username).first()
#     hashed_pass = user.password
#     if not verify_password(password, hashed_pass):
#         raise HTTPException(
#             status_code=status.HTTP_400_BAD_REQUEST,
#             detail="Incorrect email or password"
#         )

    # return {
    #     "access_token": create_access_token(user.username),
    #     "refresh_token": create_refresh_token(user.username),
    # }

def get_user_by_username(db: Session, username: str):
    return db.query(models.User).filter(models.User.username == username).first()

# def get_hashed_pass(db: Session, username: str, password: str):
#     userData = db.query(models.User).filter(models.User.username == username).first()
#     return verify_password(password, userData.password)

def create_user(db: Session, user: schemas.UserCreate):
    hashed_password = get_hashed_password(user.password)
    db_user = models.User(username=user.username, accountNumber=user.accountNumber, email=user.email, phoneNumber=user.phoneNumber, password=user.password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def create_payment_request(db: Session, request: schemas.paymentRequest):
    request = models.PaymentRequest(accountNumber = request.accountNumber, 
                                    status="Pending", 
                                    description=request.description, 
                                    bank=request.bank,
                                    custName=request.custName,
                                    amount=request.amount)
    db.add(request)
    db.commit()
    db.refresh(request)
    return request

def get_all_payments_of_customer(db: Session, accountNumber: int):

    if accountNumber == -99:
        payments = db.query(models.PaymentRequest).all()
    else:
        payments = db.query(models.PaymentRequest).filter(models.PaymentRequest.accountNumber == accountNumber).all()

    pending = 0
    rejected = 0
    accepted = 0
    for payment in payments:
        if payment.status == "Pending":
            pending += 1
        if payment.status == "Accepted":
            accepted += 1
        if payment.status == "Rejected":
            rejected += 1

    # fig = go.Figure(data=[go.Pie(labels=['Accepted', 'Rejected', 'Pending'], values=data)])

    return [payments, accepted, rejected, pending]

    # return payments
    # return db.query(models.PaymentRequest).filter(models.PaymentRequest.accountNumber == accountNumber).all()

def get_all_payments_of_all_customers(db: Session):
    return db.query(models.PaymentRequest).all()

def setStatus(db: Session, id: int, status: str):
    payment_request = db.query(models.PaymentRequest).filter(models.PaymentRequest.id == id).first()

    if payment_request:
        # Update the status to "Accepted"
        payment_request.status = status
        db.commit()
        return payment_request
    else:
        return None  # Return None if the payment request with the given ID is not found


