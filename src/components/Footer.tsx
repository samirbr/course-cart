import * as React from 'react';
import { ISeminar } from './Seminar';
import { plural } from '../common/util';

export interface IFooterProps extends React.Props<{}> {
  seminars: ISeminar[];
  submit?: (e) => void;
}

export class Footer extends React.Component<IFooterProps, {}> {
  /**
   * get total cost of products
   */
  sum(): number {
    return this.props.seminars.reduce((total: number, seminar: ISeminar): number => {
      return total + (seminar.enrolled ? seminar.price : 0);
    }, 0);
  }

  /**
   * count number of products
   */
  count(): number {
    return this.props.seminars.reduce((count: number, seminar: ISeminar): number => {
      return count + (seminar.enrolled ? 1 : 0);
    }, 0);
  }

  render(): JSX.Element {
    let count: number = this.count();

    return (
      <div className="table-footer">
        <div className="table-row">
          <div className="table-cell">
            <span>TOTAL:</span> <strong>
            ${this.sum().toFixed(2)}
            </strong> <strong>
              {plural(count, '', 'seminar', 'seminars')}
            </strong>
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell">
            {(() => {
              return (count == 0) ? (
                <p className="error2">Pick at least one seminar to proceed.</p>
              ) : '';
            })()}
            <p>
              <button onClick={this.props.submit} disabled={count === 0}>Proceed to Pay</button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}