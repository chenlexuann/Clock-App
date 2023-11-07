//Chen lexuan
//DIT/FT/1B/05
//p2212562
import * as React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';

export default function StopwatchScreen() {
  const [isStopwatchStart, setIsStopwatchStart] = React.useState('idle');
  const [stopwatchStart, setStopwatchStart] = React.useState(false);
  const [resetStopwatch, setResetStopwatch] = React.useState(false);
  let buttonStyle = styles.buttonStyle;
  let buttonText = styles.buttonText;
  if (isStopwatchStart === 'running') {
    buttonStyle = styles.buttonStyleActive;
  }
  if (isStopwatchStart === 'running') {
    buttonText = styles.buttonTextActive;
  }
  return (
    <SafeAreaView style={styles.containerStopwatch}>
      <View style={styles.containerStopwatch}>
        <View>
          <Stopwatch
            msecs
            start={stopwatchStart}
            reset={resetStopwatch}
            options={options}
          />
        </View>
        <View style={styles.sectionStyle}>
          <View>
            {isStopwatchStart === 'idle' && (
              <TouchableHighlight
                style={buttonStyle}
                onPress={function () {
                  setStopwatchStart(!stopwatchStart);
                  setResetStopwatch(false);
                  setIsStopwatchStart('running');
                }}>
                <Text style={buttonText}>Start</Text>
              </TouchableHighlight>
            )}
            {isStopwatchStart === 'running' && (
              <TouchableHighlight
                style={buttonStyle}
                onPress={function () {
                  setResetStopwatch(false);
                  setStopwatchStart(!stopwatchStart);
                  setIsStopwatchStart('pause');
                }}>
                <Text style={buttonText}>Pause</Text>
              </TouchableHighlight>
            )}

            {isStopwatchStart === 'pause' && (
              <View style={styles.stopResumeButton}>
                <TouchableHighlight
                  style={styles.buttonStyleStop}
                  onPress={() => {
                    setStopwatchStart(false);
                    setIsStopwatchStart('idle');
                    setResetStopwatch(true);
                  }}>
                  <Text style={styles.buttonTextStop}> Stop </Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.buttonStylePause}
                  onPress={() => {
                    setStopwatchStart(!stopwatchStart);
                    setIsStopwatchStart('running');
                    setResetStopwatch(false);
                  }}>
                  <Text style={buttonText}>Resume</Text>
                </TouchableHighlight>
              </View>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const options = {
  text: {
    fontSize: 50,
    fontWeight: '500',
    color: 'black',
  },
};

const styles = StyleSheet.create({
  containerStopwatch: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionStyle: {
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonStyle: {
    marginTop: 90,
    borderColor: 'black',
    borderWidth: 2,
    paddingVertical: 30,
    paddingHorizontal: 60,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  buttonStyleActive: {
    marginTop: 90,
    borderColor: 'black',
    borderWidth: 2,
    paddingVertical: 30,
    paddingHorizontal: 60,
    backgroundColor: 'gray',
    borderRadius: 15,
  },
  stopResumeButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 250,
  },
  buttonStyleStop: {
    marginTop: 90,
    borderColor: 'crimson',
    borderWidth: 2,
    padding: 30,
    backgroundColor: 'crimson',
    borderRadius: 15,
  },
  buttonStylePause: {
    marginTop: 90,
    borderColor: 'black',
    borderWidth: 2,
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  buttonText: {
    fontWeight: '450',
  },
  buttonTextStop: {
    fontWeight: '450',
    color: 'white',
  },
  buttonTextActive: {
    color: 'white',
    fontWeight: '450',
  },
});

// <Stopwatch
//   // laps
//   msecs
//   start={isStopwatchStart}
//   reset={resetStopwatch}
//   options={options}
//   getTime={(time) => {
//     console.log(time);
//   }}
// />
// <TouchableHighlight
//             style={styles.buttonStyle}
//             onPress={() => {
//               setIsStopwatchStart(false);
//               setResetStopwatch(true);
//             }}>
//             <Text style={styles.buttonText}>RESET</Text>
//           </TouchableHighlight>
