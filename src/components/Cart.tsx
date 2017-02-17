import * as React from 'react';
import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './Footer';
import { ISeminar, Seminar } from './Seminar';
import CheckoutEvent from '../events/CheckoutEvent';
import { IConfig } from '../config';

export interface ICartState {
  seminars: ISeminar[];
}

export interface ICartProps extends React.Props<{}> {
  submit?: (e) => void;
  config: IConfig;
}

export class Cart extends React.Component<ICartProps, ICartState> {
  componentWillMount() {
    if (this.props.config.useMockup) {
      setTimeout(() => {
        this.setState({
          seminars: this.props.config.mockups
        })
      }, 1000);
    } else {
      fetch(this.props.config.endpoint)
        .then((response) => {
          return response.json();
        })
        .then((data: any) => {
          this.setState({
            seminars: data
          })
        })
        .catch((error: Error) => {
          console.error(error);
        });
    }
  }

  submit(e) {
    if (this.props.submit) {
      const data = this.state.seminars.filter((seminar: ISeminar): boolean => {
        return seminar.enrolled;
      });
      const event = new CheckoutEvent(data);
      this.props.submit(event);
    }
  }

  update(enrolled: boolean, i: number): void {
    let seminar: ISeminar = this.state.seminars[i];
    seminar.enrolled = enrolled;

    this.setState({
      seminars: [
        ...this.state.seminars.slice(0, i),
        { ...seminar },
        ...this.state.seminars.slice(i + 1),
      ]}
    );
  }

  render(): JSX.Element {
    return (
      <div id="cart">
        <div className="table">
          <Header />
          <Body seminars={this.state.seminars} update={this.update}/>
          <Footer seminars={this.state.seminars} />
        </div>
      </div>
    );
  }
}