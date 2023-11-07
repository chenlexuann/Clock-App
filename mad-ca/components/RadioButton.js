//Chen lexuan
//DIT/FT/1B/05
//p2212562
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
export default class RadioButton extends Component {
  state = {
    value: '1',
  };
  render() {
    const { PROP } = this.props;
    const { value } = this.state;
    return (
      // <Text> Selected: {this.state.value} </Text>
      <View>
        {PROP.map((res) => {
          return (
            <View>
              <View key={res.key} style={styles.container}>
                <TouchableOpacity
                  style={styles.radioCircle}
                  onPress={() => {
                    this.setState({
                      value: res.key,
                    });
                  }}>
                  {value === res.key && <View style={styles.selectedRb} />}
                </TouchableOpacity>
                <Text style={styles.radioText}>{res.text}</Text>
              </View>
              <View
                style={{
                  margin: 10,
                  height: 2,
                  backgroundColor: 'black',
                  borderRadius: 20,
                }}
              />
            </View>
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  radioText: {
    marginLeft: 35,
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
  },
  radioCircle: {
    height: 30,
    width: 30,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#0864AA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: '#0864AA',
  },
});
