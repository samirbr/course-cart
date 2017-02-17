import * as React from 'react';
import { SeminarInfo, ISeminarInfo } from './SeminarInfo';

export interface ISeminar extends ISeminarInfo {
  price: number;
  enrolled: boolean;
}

export interface ISeminarState {
  enrolled: boolean;
}

export interface ISeminarProps extends React.Props<{}> {
  update: (enrolled: boolean, i: number) => void;
  seminar: ISeminar;
  i: number;
}

export class Seminar extends React.Component<ISeminarProps, ISeminarState> {
  componentWillMount() {
    this.setState({
      enrolled: false,
    });
  }

  handleEnroll(e) {
    this.setState({
      enrolled: e.target.checked,
    });

    this.props.update(e.target.checked, this.props.i);
  }

  render(): JSX.Element {
    return (
      <div className="table-body">
        <div className="table-group">
          <div className="table-row">
            <div className="table-cell rowspan">
              <SeminarInfo {...this.props.seminar} />
            </div>
            <div className="table-cell text-left">
              ${this.props.seminar.price.toFixed(2)}<br />
            </div>
            <div className="table-cell">
              <div>
                <input type="checkbox"
                  className="inline"
                  onChange={this.handleEnroll}
                  checked={this.state.enrolled}
                /> <span>Enroll</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
