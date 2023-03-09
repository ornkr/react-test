import { PageLoader } from '@ornikar/kitt-universal';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const LoadingPage = () => (
  <View style={styles.loader}>
    <PageLoader />
  </View>
);

export default function App() {
  return <LoadingPage />;
}
