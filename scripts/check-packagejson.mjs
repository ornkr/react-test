import { createCheckPackage } from 'check-package-dependencies';

await createCheckPackage()
  .checkRecommended({
    onlyWarnsForInDependencies: {
      'react-scripts': {
        invalidPeerDependencyVersion: ['typescript'],
      },
    },
  })
  .run();
