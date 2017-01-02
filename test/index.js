import 'jsdom-global/register';

import { assert, expect } from 'chai';
import { mount, shallow } from 'enzyme';

import Experiment from '../src/experiment';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Variant from '../src/variant';

/**
 * EXPERIMENT TESTS
 */

describe('<Experiment />', () => {
  it('requires name property', () => {
    expect(() => {
      shallow(<Experiment />);
    }).to.throw(Error);
  });

  it('requires minimum 1 variant via child or property', () => {
    expect(() => {
      shallow(<Experiment />);
    }).to.throw(Error);
  });

  it('returns a variant instance from given variants', () => {
    const component = shallow(
      <Experiment
        name="test"
        onVariantLoad={variant => console.log(variant)}
        variants={[
          <Variant name="plain" component={<div>Plain</div>} />,
          <Variant name="bold" component={<div>Bold</div>} />
        ]}
      />
    );
    expect(component.props().name && component.props().component).to.be.defined;
  });
});

/**
 * VARIANT TESTS
 */

describe('<Variant />', () => {
  it('requires name property', () => {
    expect(() => {
      shallow(<Variant />);
    }).to.throw(Error);
  });
  it('requires component property', () => {
    expect(() => {
      shallow(<Variant name="test-variant" />);
    }).to.throw(Error);
  });
});
