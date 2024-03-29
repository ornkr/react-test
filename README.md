# Clone react-native branch

```
git clone git@github.com:ornkr/react-test.git
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Installation, before the meeting

## Prepare vscode

Open this project with [VS Code](https://code.visualstudio.com/). You should have a popup to install recommended extensions, please do. Once the extensions are installed, make sure LiveShare is configured correctly and ready to use: https://code.visualstudio.com/learn/collaboration/live-share.

## Requirements

- Node >= 16.10.0

## Install dependencies

We use yarn berry on this project. The dependencies are already in .yarn/cache, you just need to run yarn to unzip and create `node_modules`

## Using yarn 1

If you already have yarn installed, you just need to run:

```
yarn
```

## Using corepack

If you don't already have yarn installed, corepack is a new feature from node which supports most package managers. We can use it with yarn:

```
corepack enable
yarn
```

## Choose Web or Native

Comment in src/index.js one of AppNative or AppWeb

## Start the app

Start the app, you should see a loader:

```
yarn start
```
