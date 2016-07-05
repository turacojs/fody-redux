import { App as DefaultApp } from 'fody';
import React, { PropTypes } from 'react';
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
        { store: props.context.context.store },
        React.createElement(DefaultApp, props)
    );
}
//# sourceMappingURL=ReduxApp.js.map