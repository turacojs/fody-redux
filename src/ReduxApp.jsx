import DefaultApp from 'fody/lib/App';
import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';

export default class ReduxAppWithProvider extends Component {
    static propTypes = {
        context: PropTypes.shape({
            context: PropTypes.shape({
                store: PropTypes.object.isRequired,
            }),
        }),
    }

    render() {
        return <Provider store={this.props.context.context.store}>
            <DefaultApp {...this.props}/>
        </Provider>;
    }
};
