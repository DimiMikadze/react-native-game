var React = require('react-native');
var Welcome = require('./App/Components/Welcome');

var {
  AppRegistry,
  StyleSheet,
  Navigator,
} = React;

class guessfamouspeople extends React.Component {

  render() {

      return (
        <Navigator
            initialRoute={{ name: 'Welcome', component: Welcome }}
            configureScene={() => {
                return Navigator.SceneConfigs.HorizontalSwipeJump;
            }}
            renderScene={(route, navigator) => {
                if (route.component) {
                    return <route.component navigator={navigator} {...route.passProps} />;
                }
            }}
        />
    )
  }
}

var styles = StyleSheet.create({
    container: {
      flex: 1
    }
});

AppRegistry.registerComponent('guessfamouspeople', () => guessfamouspeople);
