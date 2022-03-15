import { LargeLoader } from '@ornikar/kitt';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loader: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Loader = () => (
  <View style={styles.loader}>
    <LargeLoader />
  </View>
);

export default function App() {
  return <Loader />;
}
