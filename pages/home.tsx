import * as React from 'react'
import Layout from '@components/Layout'
import { NextPage } from 'next'
import TodoList from "@components/todos/TodoList";

const HomePage: NextPage = () => {
    return (
        <Layout title="Home | Next.js + TypeScript Example">
            <TodoList />
        </Layout>
    )
}
export default HomePage
