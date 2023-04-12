import { StyleSheet, View } from 'react-native';
import {
  NavigationContainer,
  useRoute,
} from '@react-navigation/native';
import { Provider } from 'react-redux';

import { useState } from 'react';
import useCachedResources from './hooks/useCachedResources';
import Context from './context';
import Router from './components/Router';
import { store } from './redux/store';

const App = () => {
  console.log('Maria');
  const isLoadingComplete = useCachedResources();
  const [isAuth, setIsAuth] = useState(false);
  const [context, setContext] = useState({});
  const routing = Router(false);
  if (!isLoadingComplete) {
    return null;
  }

  return (
    <Provider store={store}>
      <Context.Provider value={{ setIsAuth, context, setContext }}>
        <View style={{ height: '100%' }}>
          <NavigationContainer>
            <Router isAuth={isAuth} />
          </NavigationContainer>
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
