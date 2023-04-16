import 'react-native-gesture-handler';
import React from 'react';
import {NavContainer} from './src/navigation';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
