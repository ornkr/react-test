import { Loader, Typography, Center, View } from '@ornikar/bumper';

const LoadingPage = () => (
  <Center height="100%">
    <Loader />

    <View marginTop="$space.24">
      <Typography.Text variant="body-xs" color="$content.base.mid">
        Loading data...
      </Typography.Text>
    </View>
  </Center>
);

export default function App() {
  return <LoadingPage />;
}
