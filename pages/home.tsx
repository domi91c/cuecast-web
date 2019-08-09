import { tasks } from "@utils/sample-api";
import * as React from 'react'
import Layout from '@components/Layout'
import { NextPage } from 'next'
import TodoList from "@components/todos/TodoList";

const HomePage: NextPage = () => {
  return (
    <Layout title="Todo List Example">
      <TodoList tasks={tasks} />
    </Layout>
  )
  const mapDispatchToProps = {}

}
export default HomePage
