import React, { PropTypes } from 'react';

import ls from 'local-storage';

export default class Experiment extends React.Component {

  componentDidMount() {
    console.log(this.props.name);
  }

  pickVariant = max => Math.floor(Math.random() * max);

  loadVariant = () => {
    const self = this;
    if (!self.props.children && !self.props.variants) return false;
    const currentVariant = ls(`experiment_${this.props.name}`);
    if (currentVariant) {
      console.log('current variant exists');
      console.log(currentVariant);
      const variant = self.props.children ? (
        self.props.children.filter((child) => child.props.name === currentVariant)
      ) : (
        self.props.variants.filter((child) => child.props.name === currentVariant)
      );
      console.log(variant);
      return React.cloneElement(
        variant[0],
        Object.assign(
          {},
          self.props.variantProps,
          {
            component: variant[0].props.component,
            onVariantLoad: self.props.onVariantLoad ? self.props.onVariantLoad : false,
          }
        ) || {}
      );
    }
    console.log('selecting new variant');
    const variantIndex = self.props.children ? self.pickVariant(self.props.children.length) : self.pickVariant(self.props.variants.length);
    const variant = self.props.children ? self.props.children[variantIndex] : self.props.variants[variantIndex];
    const variantName = variant.props.name;
    if (!variantName) return false;
    ls.set(`experiment_${this.props.name}`, variantName);
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
    return this.loadVariant();
  }
}
