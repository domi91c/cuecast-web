import * as React from 'react'
import Link from 'next/link'
import Layout from '@components/Layout'
import {NextPage} from 'next'

import {Button} from 'react-bootstrap';


const IndexPage: NextPage = () => {
    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <h1>Cuecast</h1>
            <p>
                <Button>
                    flat button
                </Button>
                <div className="center-block text-center">
                </div>

                <Link href="/about">
                    <a>About</a>
                </Link>
            </p>
        </Layout>
    )
}

export default IndexPage
