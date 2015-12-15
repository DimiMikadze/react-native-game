var React = require('react-native');
var Game = require('./Game');
var Welcome = require('./Welcome');
var Choose = require('./Choose');

var {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} = React;

class Finish extends React.Component {

    _startAgain() {
        var routes = this.props.navigator.getCurrentRoutes();

        this.props.navigator.popToRoute(routes[1]);
    }

    _anotherPlayer() {
        this.props.navigator.popToTop();
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    {this.props.player}! Your score is {this.props.score} from {this.props.questionsCount}
                </Text>
                <TouchableHighlight style={styles.button} onPress={this._startAgain.bind(this)} underlayColor="#ccc">
                    <Text style={styles.buttonText}>Play Again</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={this._anotherPlayer.bind(this)} underlayColor="#ccc">
                    <Text style={styles.buttonText}>Another Player</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

Finish.propTypes = {
    score: React.PropTypes.number.isRequired,
    questionsCount: React.PropTypes.number.isRequired,
    player: React.PropTypes.string.isRequired
};

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5cb860',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 50,
        fontFamily: 'Helvetica',
    },
    button: {
        height: 60,
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: '#5cb860',
        fontSize: 16,
        fontFamily: 'Helvetica',
    }
});

module.exports = Finish;