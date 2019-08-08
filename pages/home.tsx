import * as React from 'react'
import { Button } from "react-bootstrap";
import Layout from '../components/Layout'
import { NextPage } from 'next'

const HomePage: NextPage = () => {
    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <h1>Welcome</h1>
            <Button href="/users/sign-in">Sign In</Button>
        </Layout>
    )
}
export default HomePage
