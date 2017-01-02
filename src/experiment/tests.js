'use strict';

import 'jsdom-global/register';

import { assert, expect } from 'chai';
import { mount, shallow } from 'enzyme';

import Experiment from './index';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

export default {
  'requires minimum 1 variant via child or property': () => {
    expect(() => {
      shallow(<Experiment />);
    }).to.throw(Error);
  },
}
