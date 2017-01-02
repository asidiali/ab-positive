'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Variant = (_temp = _class = function (_React$Component) {
  _inherits(Variant, _React$Component);

  function Variant() {
    _classCallCheck(this, Variant);

    return _possibleConstructorReturn(this, (Variant.__proto__ || Object.getPrototypeOf(Variant)).apply(this, arguments));
  }

  _createClass(Variant, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.onVariantLoad) this.props.onVariantLoad(this.props.name);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.name || !this.props.component) throw new Error('Missing required properties for Variant component');
      return _react2.default.cloneElement(this.props.component, this.props);
    }
  }]);

  return Variant;
}(_react2.default.Component), _class.propTypes = {
  component: _react.PropTypes.node.isRequired,
  name: _react.PropTypes.string.isRequired,
  onVariantLoad: _react.PropTypes.func
}, _temp);
exports.default = Variant;