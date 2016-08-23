import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

class actionsListeners extends Component {
  constructor(props) {
    super(props);
    this.state = {result: '' };
    this.guessNumber = this.guessNumber.bind(this);
  }

  guessNumber(){
    let number = parseInt(this.refs.number._lastNativeText)
    let result = Math.abs(number % 2) == 1 ? "ODD" : "EVEN";
    this.setState({result})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.guess}>
          Guess the number!
        </Text>

        <TextInput
          ref="number"
          style={styles.inputNumber}
        />

        <TouchableHighlight
          onPress={this.guessNumber}>
          <Text style={styles.button}>
            GUESS
          </Text>
        </TouchableHighlight>

      <Text style={styles.resultArea}>
        {this.state.result}
      </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputNumber:{
    height: 40,
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1
  },
  button: {
    padding: 20,
    margin: 5,
    fontSize: 20,
    borderRadius: 4,
    backgroundColor: '#1155DD'
  },
  guess: {
    fontSize: 30,
    textAlign: 'center',
  },
  resultArea: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 20,
    marginTop: 30,
  },
});

AppRegistry.registerComponent('actionsListeners', () => actionsListeners);
