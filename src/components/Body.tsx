import * as React from 'react';
import { ISeminar, ISeminarProps, Seminar } from './Seminar';

export interface IBodyProps extends React.Props<{}> {
  seminars: ISeminar[];
  update: (enrolled: boolean, i: number) => void;
}

export class Body extends React.Component<IBodyProps, Body> {
  render(): JSX.Element {
    return (
      <div>
        {(this.props.seminars || []).map((seminar: ISeminar, i: number): JSX.Element => {
          return <Seminar key={i} i={i}
            update={this.props.update}
            seminar={seminar}
          />
        })}
      </div>
    );
  }
}