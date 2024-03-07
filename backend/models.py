from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from database import Base
from sqlalchemy.orm import relationship
from datetime import datetime


class User(Base):
    __tablename__ = "customers"

    id = Column(Integer, primary_key=True)
    username = Column(String)
    accountNumber = Column(Integer, unique=True)
    email = Column(String, unique=True, index=True)
    phoneNumber = Column(Integer, unique=True)
    password = Column(String)
    date_created = Column(DateTime, default=datetime.utcnow)

class PaymentRequest(Base):
    __tablename__ = "payment_requests"

    id = Column(Integer, primary_key=True)
    accountNumber = Column(Integer, ForeignKey('customers.accountNumber'))
    user = relationship("User")
    status = Column(String)
    description = Column(String)
    bank = Column(String)
    date = Column(DateTime, default=datetime.utcnow)
    custName = Column(String)
    amount = Column(Integer)