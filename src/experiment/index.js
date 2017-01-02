import React, { PropTypes } from 'react';

import ls from 'local-storage';

export default class Experiment extends React.Component {

  componentDidMount() {
    console.log(this.props.name);
  }

  generateRandomIndex = max => Math.floor(Math.random() * max);

  pickVariant = () => {
    const self = this;
    const variantArr = self.props.children ? self.props.children : self.props.variants;
    const currentVariant = ls(`experiment_${self.props.name}`);
    if (currentVariant) {
      const variant = variantArr.filter((child) => child.props.name === currentVariant);
      return variant[0];
    }
    // no current variant for experient
    // selecting new variant
    const variantIndex = self.generateRandomIndex(variantArr.length);
    const variant = variantArr[variantIndex];
    const variantName = variant.props.name;
    if (!variantName) {
      return {
        error: 'Error: Variant component requires `name` property.'
      };
    }
    ls.set(`experiment_${self.props.name}`, variantName);
    console.log(variant);
    return variant;
  }

  renderVariant = () => {
    const self = this;
    if (!self.props.children && !self.props.variants) {
      throw new Error('Experiment component requires minimum 1 child `variant`, or `variants` property passed an array of `variant` components.');
    }

    const variant = self.pickVariant();

    console.log('VARIANT');
    console.log(variant);

    if (variant.error) {
      console.error(variant.error);
      return false;
    }

    return React.cloneElement(
      variant,
      Object.assign(
        {},
        self.props.variantProps,
        {
          component: variant.props.component,
          onVariantLoad: self.props.onVariantLoad ? self.props.onVariantLoad : false,
        }
      ) || {}
    );
  }

  render() {
    return this.renderVariant();
  }
}
