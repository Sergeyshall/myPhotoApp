import { StyleSheet, View } from 'react-native';

import { Provider } from 'react-redux';
import { useState } from 'react';

import useCachedResources from './hooks/useCachedResources';
import Context from './context';
import { store } from './redux/store';
import Main from './components/Main';

const App = () => {
  const isLoadingComplete = useCachedResources();
  const [context, setContext] = useState({});

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <Provider store={store}>
      <Context.Provider value={{ context, setContext }}>
        <View style={{ height: '100%' }}>
          <Main />
        </View>
      </Context.Provider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mariaText: {
    color: 'pink',
  },
});
