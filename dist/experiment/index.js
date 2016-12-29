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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Experiment.__proto__ || Object.getPrototypeOf(Experiment)).call.apply(_ref, [this].concat(args))), _this), _this.pickVariant = function (max) {
      return Math.floor(Math.random() * max);
    }, _this.loadVariant = function () {
      var self = _this;
      if (!self.props.children && !self.props.variants) return false;
      var currentVariant = (0, _localStorage2.default)('experiment_' + _this.props.name);
      if (currentVariant) {
        console.log('current variant exists');
        console.log(currentVariant);
        var _variant = self.props.children ? self.props.children.filter(function (child) {
          return child.props.variantName === currentVariant;
        }) : self.props.variants.filter(function (child) {
          return child.props.variantName === currentVariant;
        });
        console.log(_variant);
        return _react2.default.cloneElement(_variant[0], Object.assign({}, self.props.variantProps, {
          component: _variant[0].props.component,
          onVariantLoad: self.props.onVariantLoad ? self.props.onVariantLoad : false
        }) || {});
      }
      console.log('selecting new variant');
      var variantIndex = self.props.children ? self.pickVariant(self.props.children.length) : self.pickVariant(self.props.variants.length);
      var variant = self.props.children ? self.props.children[variantIndex] : self.props.variants[variantIndex];
      var variantName = variant.props.variantName;
      if (!variantName) return false;
      _localStorage2.default.set('experiment_' + _this.props.name, variantName);
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
      return this.loadVariant();
    }
  }]);

  return Experiment;
}(_react2.default.Component);

exports.default = Experiment;