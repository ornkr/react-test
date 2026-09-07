import { Loader, Typography, View } from '@ornikar/bumper';

const LoadingPage = () => (
  <div className="loader">
    <div>
      <Loader />
    </div>

    <View marginTop="$space.24">
      <Typography.Text variant="body-xs" color="$content.base.mid">
        Loading data...
      </Typography.Text>
    </View>
  </div>
);

export default function App() {
  return (
    <div>
      <LoadingPage />
    </div>
  );
}
