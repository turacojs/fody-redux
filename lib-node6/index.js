'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
    { store: props.context.context.store },
    _react2.default.createElement(_fody.App, props)
  );
}
//# sourceMappingURL=index.js.map