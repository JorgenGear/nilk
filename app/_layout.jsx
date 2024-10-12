import { Slot } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from '../store';
import Header from '../components/Header';
import { View, StyleSheet } from 'react-native';
import { AuthProvider } from '../components/AuthContext';

export default function Layout() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <View style={styles.container}>
          <Header />
          <Slot />
        </View>
      </Provider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});