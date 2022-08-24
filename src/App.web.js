import { LargeLoader, Typography } from '@ornikar/kitt';

const LoaderPage = () => (
  <div className="loader">
    <div>
      <LargeLoader />
    </div>

    <Typography.Text
      base="body-xsmall"
      color="black-light"
      className="loading-data-text"
    >
      Loading data
    </Typography.Text>
  </div>
);

export default function App() {
  return (
    <Typography.div base="body" className="App">
      <LoaderPage />
    </Typography.div>
  );
}