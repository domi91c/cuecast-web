import Layout from '@components/Layout'
import TodoList from "@components/todos/TodoList";

import TodoStore from "@stores/TodoStore";
import { inject, observer, Provider } from 'mobx-react';


import * as React from "react";

interface IProps {
  todos: TodoStore
}

@inject('views') @observer
class IndexPage extends React.Component<IProps> {

  render () {
    return (
      <Layout title="Home | CueCast">
        <TodoList />
      </Layout>
    )
  }
}

export default IndexPage
