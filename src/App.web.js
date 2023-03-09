import { PageLoader, Typography, View } from '@ornikar/kitt-universal';

const LoadingPage = () => (
  <div className="loader">
    <div>
      <PageLoader />
    </div>

    <View marginTop="kitt.6">
      <Typography.Text base="body-xsmall" color="black-light">
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
