'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _class, _temp;

var _fodyApp = require('fody-app');

var _fodyApp2 = _interopRequireDefault(_fodyApp);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

/**
 * @function
 * @param obj
*/
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ReduxAppWithProvider = (_temp = _class = class ReduxAppWithProvider extends _react.Component {

    render() {
        return _react2.default.createElement(
            _reactRedux.Provider,
            { store: this.props.context.context.store },
            _react2.default.createElement(_fodyApp2.default, this.props)
        );
    }
}, _class.propTypes = {
    context: _react.PropTypes.shape({
        context: _react.PropTypes.shape({
            store: _react.PropTypes.object.isRequired
        })
    })
}, _temp);
exports.default = ReduxAppWithProvider;
;
//# sourceMappingURL=ReduxApp.js.map