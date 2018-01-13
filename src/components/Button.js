// Button can be either a plain link with a button class or a button element
import React from 'react';
import {PureComponent} from 'react';
import classNames from 'classnames';

export default class Button extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    let {myType, myClass, children} = this.props;
    let btnClass = classNames(myClass ? myClass : 'button');
    if(myType === "buttonSubmit") {
      return (
        <input type="submit" className={btnClass}>
          {children}
        </input>
      )
    }
    else if(myType === "buttonLink") {
      return (
        <a className={btnClass}>
          {children}
        </a>
      )
    }
    return (
      <button className={btnClass}>
        {children}
      </button>
    )
  }
}
