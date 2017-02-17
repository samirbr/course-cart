import * as React from 'react';
import { Cart } from './Cart';
import { IConfig } from '../config';

export interface IAppProps extends React.Props<{}> {
  config: IConfig;
}

export default class App extends React.Component<IAppProps, {}> {
  submit(data: any) {
    fetch(this.props.config.checkout, {
      method: 'POST'
    }).then((response) => {
      return response.json();
    }).then((data: any) => {
      alert(data.message);
    })
    .catch((error: Error) => {
      console.error(error);
    });
  }

  render(): JSX.Element {
    return (
      <div>
        <Cart config={this.props.config} submit={this.submit} />
      </div>
    );
  }
}