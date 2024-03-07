from pydantic import BaseModel
from datetime import datetime

# class UserBase(BaseModel):
#     email: str
#     password: str
#     name: str


class UserCreate(BaseModel):
    username: str
    accountNumber: int
    email: str
    phoneNumber: int
    password: str


class User(UserCreate):
    id: int

    class Config:
        orm_mode = True


class paymentRequest(BaseModel):
    accountNumber: int
    status: str
    description: str
    bank: str
    date: datetime
    custName: str
    amount: int