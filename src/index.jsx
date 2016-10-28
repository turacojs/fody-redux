import { App as DefaultApp } from 'fody';
import { PropTypes } from 'react';
import { Provider } from 'react-redux';

ReduxAppWithProvider.propTypes = {
  context: PropTypes.shape({
    context: PropTypes.shape({
      store: PropTypes.object.isRequired,
    }),
  }),
};

export default function ReduxAppWithProvider(props) {
  return (
    <Provider store={props.context.context.store}>
      <DefaultApp {...props} />
    </Provider>
  );
}
