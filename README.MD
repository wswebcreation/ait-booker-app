# Automation In Testing Booker App
This app will help people practice mobile testing and automation with a native app for the Automation In Testing trainings.
It is based on the Restfull-booker-platform demo app which can be found [here](https://automationintesting.online/#/).

This project is a work in progress.

> **NOTE<br>**
> Make sure to use yarn instead of NPM. From what I've seen with different projects and migrations NPM can give some issues with React Native. How to setup yarn can be found [here](https://yarnpkg.com/lang/en/docs/install/#mac-stable)

## Getting started
I'll not explain all steps to use React Native on your machine, more information about it can be found [here](https://facebook.github.io/react-native/docs/getting-started).
Please click on the **React Native CLI Quickstart** tab and follow the steps for iOS (if you have a Max) and or Android on your operating system.
Make sure you only install the dependencies, **DON'T** follow the steps for *Creating a new application* because this project already is ready to use.

## Run the app on your local machine
When you've installed all the dependencies you can run the following commands (from the root of this project):

```
// For Android
yarn android

// For iOS
yarn ios
```

This will start an Emulator/Simulator, open a terminal to load the Metro bundler (which translates the JavaScript into native components) and install the app.

## Building an app for distribution
Building an app for *distribution* is building an app without having the Metro bundler so it can operate standalone.

### Android
I've created a dummy certificate for Android and uploaded it in the project (same as [here](https://facebook.github.io/react-native/docs/signed-apk-android)).
Normally that is not a good practice, but because this is an app that will not be distributed through the Play Store this doesn't matter.
You can build an Android app (same file can be used for an Emulator as for a Real device) with the following command.

```
android.release
```

The app can be found in the [android/app/build/outputs/apk/release/](android/app/build/outputs/apk/release/) folder

### iOS
You currently can only build an app for a simulator because I didn't include a certificate (which is a paid certificate).
You can run a build for a Simulator by running the following command.

```
yarn ios.sim.build
```

The app can be found in the [ios/build/AITBookerApp/Build/Products/Release-iphonesimulator/](ios/build/AITBookerApp/Build/Products/Release-iphonesimulator/) folder

## Code
Code will be linted before pushed. To check your code please run `yarn lint`.
