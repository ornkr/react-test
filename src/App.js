import { Loader, Typography } from '@ornikar/bumper';
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

    <View marginTop="$space.24">
      <Typography.Text variant="body-xs" color="$content.base.mid">
        Loading data...
      </Typography.Text>
    </View>
  </View>
);

export default function App() {
  return <LoadingPage />;
}
