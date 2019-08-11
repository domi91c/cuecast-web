import { stores } from '@store'
import { Stores } from "@types";
import { Provider } from 'mobx-react'
import App, { Container } from 'next/app'
import React from 'react'

class CuecastApp extends App {
  stores: Stores;

  constructor (props) {
    super(props);
    const isServer = typeof window === 'undefined';
    this.stores = isServer ? props.initialMobxState : stores;
  }

  static async getInitialProps (appContext) {
    const mobxStore = stores;
    appContext.ctx.mobxStore = mobxStore;
    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
      initialMobxState: mobxStore,
    };
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Provider views={this.stores.views} todos={this.stores.todos}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default CuecastApp
