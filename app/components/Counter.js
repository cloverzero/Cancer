// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Counter.css';

import PageEditor from './PageEditor';

type Props = {
  increment: () => void,
  incrementIfOdd: () => void,
  incrementAsync: () => void,
  decrement: () => void,
  counter: number
};

export default class Counter extends Component<Props> {
  props: Props;

  render() {
    const {
      increment, incrementIfOdd, incrementAsync, decrement, counter
    } = this.props;
    return (
      <div>
        <div className="grid-row">
          <PageEditor/>
        </div>
      </div>
    );
  }
}
