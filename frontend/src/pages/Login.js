import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
    return (
        <div className='container'>
            <div className='col-6'>
                <div className='text-center'>
                    <div>
                        <h2>Login</h2>
                        <h2>PayHabib account</h2>
                    </div>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="passwordd" placeholder="Enter at least 8+ characters" />
                        </Form.Group>
                        <Button size="lg">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            <div className='col-6'></div>
        </div>
    )
}

export default Login