var React = require('react-native');
var Game = require('./Game');
var api = require('../utils/api');

var {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} = React;

class Choose extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }

    _startGame(level) {
        api.getQuestions(level)
            .then((res) => {
                this.props.navigator.push({
                    component: Game,
                    name: 'Game',
                    passProps: {
                        player: this.props.player,
                        data: res,
                        questionsCount: res.length,
                        images_uri: api.getImagesUri(level)
                    }
                });
            });
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Choose Level</Text>
                <TouchableHighlight
                    underlayColor="#ccc"
                    style={styles.button}
                    onPress={this._startGame.bind(this, 'easy')}
                >
                    <Text style={styles.buttonText}>Easy</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor="#ccc"
                    style={styles.button}
                    onPress={this._startGame.bind(this, 'normal')}
                >
                    <Text style={styles.buttonText}>Normal</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor="#ccc"
                    style={styles.button}
                    onPress={this._startGame.bind(this, 'hard')}
                >
                    <Text style={styles.buttonText}>Hard</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

Choose.propTypes = {
    player: React.PropTypes.string.isRequired
};

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e59a13',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 50,
        fontFamily: 'Helvetica'
    },
    button: {
        height: 60,
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10
    },
    buttonText: {
        color: '#e59a13',
        fontSize: 16,
        fontFamily: 'Helvetica'
    }
});

module.exports = Choose;