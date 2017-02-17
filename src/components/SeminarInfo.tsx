import * as React from 'react';
import { dateFormat } from '../common/util';

export interface ISeminarInfo {
  name: string;
  starts_at: Date | string;
  ends_at: Date | string;
  contact_hours: number;
  location: string;
}

export interface ISeminarInfoProps extends ISeminarInfo, React.Props<{}> {
}

export class SeminarInfo extends React.Component<ISeminarInfoProps, {}> {
  render(): JSX.Element {
    return (
      <div>
        <span className="emphasis">{this.props.name}</span><br />
        <div>
          <small>Course date <span className="date">
          { dateFormat(this.props.starts_at) } and { dateFormat(this.props.ends_at) }
          </span></small>
        </div>
        <div>
          <small>Contact hours <span className="date">
          { this.props.contact_hours }
          </span> hrs</small>
        </div>
        <div>
          <small>Location <span className="date">
          { this.props.location }
          </span></small>
        </div>
      </div>
    );
  }
}