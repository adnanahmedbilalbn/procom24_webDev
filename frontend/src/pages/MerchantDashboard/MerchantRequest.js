import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const MerchantPayments = () => {
  return (
    <div className='m-3'>
      <div>
        <h1 className='pt-2 pb-10 text-3xl font-bold'>Instant Payment</h1>
      </div>
      <div className='border-2 rounded-md p-5 lg:w-4/5 md:w-full'>
        {/* <div className='my-3'>
          <h3 className='py-3 text-3xl font-bold'></h3>
        </div> */}
        <Form>
          <div className='flex'>
            <Form.Group className="flex-auto mb-4 me-4" controlId="username">
              <Form.Label    className='font-bold'>User Name *</Form.Label>
              <Form.Control required className='bg-gray-100 border-none' type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="flex-auto mb-4" controlId="customername">
              <Form.Label className='font-bold'>Email Address (Optional)</Form.Label>
              <Form.Control className='bg-gray-100 border-none' type="text" placeholder="Enter Mail" />
            </Form.Group>
          </div>
          <Form.Group className="mb-4" controlId="paymentAmount">
            <Form.Label className='font-bold'>Payment Amount*</Form.Label>
            <Form.Control required className='bg-gray-100 border-none' type="number" placeholder="9.99 PKR" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="c_accountNumber">
            <Form.Label className='font-bold'>Customer Account Number*</Form.Label>
            <Form.Control required className='bg-gray-100 border-none' type="number" placeholder="2319848915911" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="m_accountNumber">
            <Form.Label className='font-bold'>Merchant Account Number*</Form.Label>
            <Form.Control required className='bg-gray-100 border-none' type="number" placeholder="PK57HB215456484NMNB" />
          </Form.Group>

          <Form.Group className='mb-4' controlId="bankName">
            <Form.Label className='font-bold'>Select Customer Bank Name*</Form.Label>
            {/* <Form.Select aria-label="Bank Dropdown" required className='bg-gray-100 border-none' defaultValue="Bank Al Habib">
              <options>Bank Al Habib</options>
              <options value="1">Meezan Bank</options>
            </Form.Select> */}
            <Form.Select aria-label="Default select example" className='bg-gray-100 border-none'>
              <option>Bank Al Habib</option>
              <option value="1">Meezan Bank</option>
              <option value="2">HBL</option>
              <option value="3">Jazz Bank</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-4" controlId="purpose">
            <Form.Label className='font-bold'>Payment Purpose *</Form.Label>
            <Form.Control className='bg-gray-100 border-none' required as="textarea" rows={4} placeholder='Payment Purpose'/>
          </Form.Group>
          <div className='flex flex-row-reverse'>
          <Button className='px-4 text-lg bg-cyan-400 sign-in-btn hover:bg-cyan-500 border-none' type="submit">
            Pay
          </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default MerchantPayments