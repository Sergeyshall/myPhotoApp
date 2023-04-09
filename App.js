import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import useCachedResources from './hooks/useCachedResources';

import { useState } from 'react';
import Context from './context';
import Router from './components/Router';

const App = () => {
  console.log('Maria');
  const isLoadingComplete = useCachedResources();
  const [isAuth, setIsAuth] = useState(false);
  const [context, setContext] = useState({});

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <Context.Provider value={{ setIsAuth, context, setContext }}>
      <View style={{ height: '100%' }}>
        <NavigationContainer>
          <Router isAuth={isAuth} />
        </NavigationContainer>
      </View>
    </Context.Provider>
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
