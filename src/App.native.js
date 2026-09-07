import { Loader } from '@ornikar/bumper';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const LoadingPage = () => (
  <View style={styles.loader}>
    <Loader />
  </View>
);

export default function App() {
  return <LoadingPage />;
}
