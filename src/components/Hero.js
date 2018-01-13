// Button can be either a plain link with a button class or a button element
import React from 'react';
import {PureComponent} from 'react';
import classNames from 'classnames';

export default class Hero extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    let {myClass, children} = this.props;
    let heroClass = classNames('hero', myClass ? myClass : 'is-primary');
    return (
      <section className={heroClass}>
        <div className="hero-body">
          <div className="container">
            {children}
          </div>
        </div>
      </section>
    )
  }
};
