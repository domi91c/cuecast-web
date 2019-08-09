import * as React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from "./Footer";
import {Container} from "react-bootstrap";

import "@styles/main.scss"

type Props = {
    title?: string
}

const Layout: React.FunctionComponent<Props> = ({
                                                    children,
                                                    title = 'cuecast.io',
                                                }) => (
    <div className="cc">
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossOrigin="anonymous"
            />
        </Head>
        <Header />
        <div className="cc-content">
            <Container fluid>
                {children}
            </Container>
        </div>
        <Footer />
    </div>
);

export default Layout
