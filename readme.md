# Guess Famous People game built on React Native

Simple quiz mobile app for IOS and Android.
This project shows how the code can be architectured to run on IOS and Android with 100% of code in common.

## Screenshots

<img src="https://github.com/DimitriMikadze/react-native-game/blob/master/screenshots/Start.jpg" width="200">
<img src="https://github.com/DimitriMikadze/react-native-game/blob/master/screenshots/Choose.jpg" width="200">
<img src="https://github.com/DimitriMikadze/react-native-game/blob/master/screenshots/Game.jpg" width="200">
<img src="https://github.com/DimitriMikadze/react-native-game/blob/master/screenshots/Finish.jpg" width="200">

## Getting Started

Clone Repo

````
git clone https://github.com/DimitriMikadze/react-native-game.git
````

Install dependencies for server

````
cd guessfamouspeople/server
npm install
````

Install dependecies for react native

````
cd guessfamouspeople/mobile
npm install
````

## Node Rest Api

````
cd guessfamouspeople/server
node server.js
````

## React Native Requirements and Getting Started

<a href="https://facebook.github.io/react-native/docs/getting-started.html" target="_blank">Requirements and Getting Started</a>

<a href="https://facebook.github.io/react-native/docs/android-setup.html" target="_blank">Android Setup</a>

## IOS

````
Open guessfamouspeople.xcodeproj in XCode
````

## Android

````
navigate to guessfamouspeople/mobile
react-native run-android

When debugging on android use 10.0.3.2 instead of localhost in utils/api.js

````

## Contributing

contributions are more than welcome!

## License

See license.txt
