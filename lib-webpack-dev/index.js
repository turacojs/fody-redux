var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'index.jsx';
import React from 'react';
import { App as DefaultApp } from 'fody';
import { PropTypes } from 'react';
import { Provider } from 'react-redux';

ReduxAppWithProvider.propTypes = {
  context: PropTypes.shape({
    context: PropTypes.shape({
      store: PropTypes.object.isRequired
    })
  })
};

export default function ReduxAppWithProvider(props) {
  return React.createElement(
    Provider,
    { store: props.context.context.store, __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    },
    React.createElement(DefaultApp, _extends({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }))
  );
}
//# sourceMappingURL=index.js.map