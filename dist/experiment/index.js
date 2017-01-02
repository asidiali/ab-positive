'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _localStorage = require('local-storage');

var _localStorage2 = _interopRequireDefault(_localStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Experiment = function (_React$Component) {
  _inherits(Experiment, _React$Component);

  function Experiment() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Experiment);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Experiment.__proto__ || Object.getPrototypeOf(Experiment)).call.apply(_ref, [this].concat(args))), _this), _this.generateRandomIndex = function (max) {
      return Math.floor(Math.random() * max);
    }, _this.pickVariant = function () {
      var self = _this;
      var variantArr = self.props.children ? self.props.children : self.props.variants;
      var currentVariant = (0, _localStorage2.default)('experiment_' + self.props.name);
      if (currentVariant) {
        var _variant = variantArr.filter(function (child) {
          return child.props.name === currentVariant;
        });
        return _variant[0];
      }
      // no current variant for experient
      // selecting new variant
      var variantIndex = self.generateRandomIndex(variantArr.length);
      var variant = variantArr[variantIndex];
      var variantName = variant.props.name;
      if (!variantName) {
        return {
          error: 'Error: Variant component requires `name` property.'
        };
      }
      _localStorage2.default.set('experiment_' + self.props.name, variantName);
      console.log(variant);
      return variant;
    }, _this.renderVariant = function () {
      var self = _this;
      if (!self.props.children && !self.props.variants) {
        throw new Error('Experiment component requires minimum 1 child `variant`, or `variants` property passed an array of `variant` components.');
      }

      var variant = self.pickVariant();

      console.log('VARIANT');
      console.log(variant);

      if (variant.error) {
        console.error(variant.error);
        return false;
      }

      return _react2.default.cloneElement(variant, Object.assign({}, self.props.variantProps, {
        component: variant.props.component,
        onVariantLoad: self.props.onVariantLoad ? self.props.onVariantLoad : false
      }) || {});
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Experiment, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log(this.props.name);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.renderVariant();
    }
  }]);

  return Experiment;
}(_react2.default.Component);

exports.default = Experiment;