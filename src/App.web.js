import { PageLoader, Typography } from '@ornikar/kitt-universal';

const LoaderPage = () => (
  <div>
    <div>
      <PageLoader />
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
    <div>
      <LoaderPage />
    </div>
  );
}
