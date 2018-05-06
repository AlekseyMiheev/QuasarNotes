# QuasarNotes Sample App

Android sample application to show possibilities of Quasar Framework.

Tools:
* Vue.js
* Quasar Framework
* Apache Cordova
* Firebase Database

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Node.js v8.9.0 or higher and NPM v5 or higher required.

```
$ npm install -g vue-cli
```

```
$ npm install -g quasar-cli
```

#### Cordova for Android

Android SDK and JDK should be installed. Android build-tools v26.0.2 or higher required.

1. Set the JAVA_HOME environment variable to the location of your JDK installation.
2. Set the ANDROID_HOME environment variable to the location of your Android SDK installation.
3. It is also recommended that you add the Android SDK's tools, tools/bin, and platform-tools directories to your PATH.

### Installing

Clone or download this repository and run the next command

```
# install dependencies
$ npm install
```

### Running

```
# serve with hot reload at localhost:8080
quasar dev

# Android app
$ quasar dev -m cordova -T android -t mat
```

### Building release version

```
# Web app
$ quasar build

# Android app
$ quasar build -m cordova -T android -t mat
```