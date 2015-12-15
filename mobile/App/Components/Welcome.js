var React = require('react-native');
var Choose = require('./Choose');

var {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TextInput,
    ActivityIndicatorIOS
} = React;

class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            player: '',
            error: '',
            isLoading: false
        };
    }

    _handleChange(event) {
        this.setState({
            error: '',
            player: event.nativeEvent.text
        });
    }

    _handleSubmit() {

        this.setState({ isLoading: true });
        var player = this.state.player;
        this.setState({
            player: ''
        });

        if(! player) {
            this.setState({
                error: 'Player name is required',
                isLoading: false
            });
        } else {
            this.props.navigator.push({
                component: Choose,
                name: 'Choose',
                passProps: {
                    player: player
                }
            });
            this.setState({ error: '', isLoading: false });
        }

    }

    render() {

        var showError = (
            this.state.error ? <View style={styles.errorContainer}><Text style={styles.error}>{this.state.error}</Text></View> : <View></View>
        );

        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Guess Famous People</Text>
                <TextInput
                    style={styles.playerInput}
                    value={this.state.player}
                    onChange={this._handleChange.bind(this)}
                    placeholder="Type Your Name"
                    placeholderTextColor="#fff"
                    maxLength={20}
                />
                <TouchableHighlight
                    underlayColor="#ccc"
                    style={styles.button}
                    onPress={this._handleSubmit.bind(this)}>
                        <Text style={styles.buttonText}>Start Game</Text>
                </TouchableHighlight>
                { showError }
                <ActivityIndicatorIOS
                    animating={this.state.isLoading}
                    color="#fff"
                    size="large"
                />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7d669e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 50,
        fontFamily: 'Helvetica',
    },
    playerInput: {
        height: 60,
        padding: 10,
        fontSize: 18,
        color: '#fff',
        borderWidth: 2,
        borderColor: '#fff',
        margin: 10,
        borderRadius: 10
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
        color: '#7d669e',
        fontSize: 16,
        fontFamily: 'Helvetica',
    },
    errorContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        margin: 10,
        borderRadius: 10,
        height: 60,
        backgroundColor: '#e15258',
    },
    error: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'Helvetica',
    }
});

module.exports = Welcome;