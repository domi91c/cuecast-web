import * as React from 'react'
// @ts-ignore
import Layout from '../../components/Layout'
import {NextPage} from 'next'
// @ts-ignore
import {Button, Card, Form} from 'react-bootstrap';

const SignInPage: NextPage = () => {
    return (
        <Layout title="Sign In">
            <Card style={{width: '18rem'}}>
                <Card.Header as="h5">
                    Cuecast - Sign In
                </Card.Header>
                <Card.Body>
                    <Form.Group controlId="signInEmail">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group controlId="signInPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary">Sign In</Button>
                </Card.Body>
            </Card>
        </Layout>
    )
}

export default SignInPage
