'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'index.jsx';
exports.default = ReduxAppWithProvider;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fody = require('fody');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ReduxAppWithProvider.propTypes = {
  context: _react.PropTypes.shape({
    context: _react.PropTypes.shape({
      store: _react.PropTypes.object.isRequired
    })
  })
};

function ReduxAppWithProvider(props) {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: props.context.context.store, __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    },
    _react2.default.createElement(_fody.App, _extends({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }))
  );
}
//# sourceMappingURL=index.js.map