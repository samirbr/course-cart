import * as React from 'react';

export interface IHeaderProps extends React.Props<{}> {
}

export class Header extends React.Component<IHeaderProps, {}> {
  render(): JSX.Element {
    return (
      <div className="table-header">
        <div className="table-row">
          <div className="table-cell rowspan">Seminar</div>
          <div className="table-cell">Price</div>
          <div className="table-cell">Enroll</div>
        </div>
      </div>
    );
  }
}