import React, { PropTypes } from 'react';

import ls from 'local-storage';

export default class Experiment extends React.Component {

  componentDidMount() {
    console.log(this.props.name);
  }

  generateRandomIndex = max => Math.floor(Math.random() * max);

  pickVariant = () => {
    const self = this;
    const currentVariant = ls(`experiment_${self.props.name}`);
    if (currentVariant) return currentVariant;
    // no current variant for experient
    // selecting new variant
    const variantIndex = self.props.children ? self.generateRandomIndex(self.props.children.length) : self.generateRandomIndex(self.props.variants.length);
    const variant = self.props.children ? self.props.children[variantIndex] : self.props.variants[variantIndex];
    const variantName = variant.props.name;
    if (!variantName) {
      return {
        error: 'Error: Variant component requires `name` property.'
      };
    }
    ls.set(`experiment_${this.props.name}`, variantName);
    return variant;
  }

  renderVariant = () => {
    const self = this;
    if (!self.props.children && !self.props.variants) {
      console.error('Error: Experiment component requires minimum 1 child `variant`, or `variants` property passed an array of `variant` components.');
      return false;
    }

    const variant = self.pickVariant();

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
