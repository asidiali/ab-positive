import React from 'react';

export default class Variant extends React.Component {
  componentDidMount() {
    if (this.props.onVariantLoad) this.props.onVariantLoad(this.props.name);
  }

  render() {
    return React.createElement(this.props.component, this.props);
  }
}
