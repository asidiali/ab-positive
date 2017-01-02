import React, { PropTypes } from 'react';

export default class Variant extends React.Component {

  static propTypes = {
    component: PropTypes.element.isRequired,
    name: PropTypes.string.isRequired,
    onVariantLoad: PropTypes.func,
  }

  componentDidMount() {
    if (this.props.onVariantLoad) this.props.onVariantLoad(this.props.name);
  }

  render() {
    if (!this.props.name || !this.props.component) throw new Error('Missing required properties for Variant component');
    return React.cloneElement(this.props.component, this.props);
  }
}
