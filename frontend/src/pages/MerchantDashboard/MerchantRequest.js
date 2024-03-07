import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const PaymentForm = () => {
  return (
    <div className='m-12 w-10/12	'>
      <div>
        <h1 className='py-6 text-3xl font-bold'>Payment Request</h1>
      </div>
      <div className='border-2 rounded-md p-5'>
        <div className='my-3'>
          <h3 className='py-3 text-3xl font-bold'>Payment Request for Customer</h3>
        </div>
        <Form>
          <div className='flex'>
            <Form.Group className="flex-auto mb-4 me-4" controlId="customername">
              <Form.Label className='font-bold'>Customer Name *</Form.Label>
              <Form.Control required className='bg-gray-100 border-none' type="text" placeholder="Input text" />
            </Form.Group>
            <Form.Group className="flex-auto mb-4" controlId="customername">
              <Form.Label className='font-bold'>Customer Email Address (Optional)</Form.Label>
              <Form.Control className='bg-gray-100 border-none' type="text" placeholder="Input text" />
            </Form.Group>
          </div>
          <Form.Group className="mb-4" controlId="paymentAmount">
            <Form.Label className='font-bold'>Payment Amount*</Form.Label>
            <Form.Control required className='bg-gray-100 border-none' type="number" placeholder="9.99 PKR" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="m_accountNumber">
            <Form.Label className='font-bold'>Merchant Account Number*</Form.Label>
            <Form.Control required className='bg-gray-100 border-none' type="number" placeholder="input text" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="c_accountNumber">
            <Form.Label className='font-bold'>Customer Account Number*</Form.Label>
            <Form.Control required className='bg-gray-100 border-none' type="number" placeholder="input text" />
          </Form.Group>
          <Form.Group className='mb-4' controlId="bankName">
            <Form.Label className='font-bold'>Select Customer Bank Name*</Form.Label>
            <Form.Select aria-label="Default select example" className='bg-gray-100 border-none'>
              <option>Bank Al Habib</option>
              <option value="1">Meezan Bank</option>
              <option value="2">HBL</option>
              <option value="3">Jazz Bank</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-4" controlId="purpose">
            <Form.Label className='font-bold'>Payment Purpose *</Form.Label>
            <Form.Control className='bg-gray-100 border-none' required as="textarea" rows={4} placeholder='input text'/>
          </Form.Group>
          <div className='flex flex-row-reverse'>
          <Button className='px-4 text-lg bg-violet-500 sign-in-btn hover:bg-violet-500 border-none' type="submit">
            Request
          </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default PaymentForm