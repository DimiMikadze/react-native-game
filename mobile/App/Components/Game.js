var React = require('react-native');
var Finish = require('./Finish');

var {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image
} = React;

class Game extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            start: 0,
            score: 0
        }
    }

    _reset() {
        this.setState({
            start: 0,
            score: 0
        });
    }

    _btnStyle(btn) {
        var style = {
            justifyContent: 'center',
            flex: 1,
        };

        if(btn === 0) {
            style.backgroundColor = '#4daf51';
        } else if(btn === 1) {
            style.backgroundColor = '#f9845b';
        } else if(btn === 2) {
            style.backgroundColor = '#9e4d83';
        } else {
            style.backgroundColor = '#3079ab';
        }

        return style;
    }

    _handleAnswer(answer) {

        if(this.props.questionsCount === this.state.start + 1) {
            if(this.props.data[this.state.start].correct == answer) {
                this.setState({
                    score: this.state.score + 1
                });
            }

            this.props.navigator.push({
                component: Finish,
                name: 'Finish',
                passProps: {
                    score: this.state.score,
                    questionsCount: this.props.questionsCount,
                    player: this.props.player
                }
            });

            this._reset();
        }

        if(this.props.data[this.state.start].correct == answer) {
            this.setState({
                score: this.state.score + 1
            });
        }
        this.setState({
            start: this.state.start + 1
        });
    }

    render() {

        var answers = this.props.data[this.state.start].answers.map((answer, index) => {
            return (
                <TouchableHighlight
                    key={index}
                    style={this._btnStyle(index)}
                    onPress={this._handleAnswer.bind(this, answer.id)}
                    underlayColor="#333"
                >
                    <Text style={styles.buttonText}>{answer.answer}</Text>
                </TouchableHighlight>
            )
        });

        return (
            <View style={styles.container}>
                <Image source={{ uri: this.props.images_uri + this.props.data[this.state.start].image }} style={styles.image} />
                { answers }
            </View>
        );
    }
}

Game.propTypes = {
    player: React.PropTypes.string.isRequired,
    data: React.PropTypes.array.isRequired,
    questionsCount: React.PropTypes.number.isRequired,
    images_uri: React.PropTypes.string.isRequired
};

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: 300
    },
    buttonText: {
        color: '#fff',
        alignSelf: 'center',
        fontFamily: 'Helvetica',
        fontSize: 16
    }
});

module.exports = Game;