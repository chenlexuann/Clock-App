//Chen lexuan
//DIT/FT/1B/05
//p2212562

import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { Timer } from 'react-native-stopwatch-timer';

export default function TimerScreen() {
  const [shouldShowInput, setShouldShowInput] = useState(true);

  const [shouldShowTimer, setShouldShowTimer] = useState(false);

  const [isTimerStatus, setIsTimerStatus] = React.useState('start');
  const [isTimerStart, setIsTimerStart] = React.useState(false);
  const [hour, onChangeHour] = React.useState(null);
  const [minute, onChangeMinute] = React.useState(null);
  const [seconds, onChangeSeconds] = React.useState(null);
  const [timerDuration, setTimerDuration] = React.useState(0);
  const [resetTimer, setResetTimer] = React.useState(false);
  let buttonStyle = styles.buttonStyle;
  let buttonText = styles.buttonText;
  if (isTimerStatus === 'running') {
    buttonStyle = styles.buttonStyleActive;
    buttonText = styles.buttonTextActive;
  }
  return (
    <View style={styles.sectionStyle2}>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={styles.timerTitle}>Hours</Text>
        <Text style={styles.timerTitleMin}>Minutes</Text>
        <Text style={styles.timerTitle}>Seconds</Text>
      </View>
      {shouldShowInput ? (
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            placeholder="00"
            onChangeText={onChangeHour}
            placeholderTextColor="gray"
            style={styles.input}
            value={hour}
            keyboardType="number-pad"
            maxLength={2}
          />
          <Text style={styles.inputText}>:</Text>
          <TextInput
            placeholder="00"
            onChangeText={onChangeMinute}
            placeholderTextColor="gray"
            style={styles.input}
            value={minute}
            keyboardType="number-pad"
            maxLength={2}
          />
          <Text style={styles.inputText}>:</Text>
          <TextInput
            placeholder="00"
            onChangeText={onChangeSeconds}
            placeholderTextColor="gray"
            style={styles.input}
            value={seconds}
            keyboardType="number-pad"
            maxLength={2}
          />
        </View>
      ) : null}

      {shouldShowTimer ? (
        <View>
          <Timer
            totalDuration={timerDuration}
            start={isTimerStart}
            reset={resetTimer}
            options={options}
            handleFinish={() => {
              setIsTimerStatus('start');
              setIsTimerStart(false);
              setResetTimer(true);
              setShouldShowInput(true);
              setShouldShowTimer(false);
              alert('Custom Completion Function');
            }}
          />
        </View>
      ) : null}

      <View style={styles.sectionStyle}>
        <View>
          {isTimerStatus === 'start' && (
            <TouchableHighlight
              style={buttonStyle}
              onPress={function () {
                setTimerDuration(
                  hour * 3600000 + minute * 60000 + seconds * 1000
                );
                setShouldShowInput(false);
                setShouldShowTimer(true);
                setResetTimer(true);
                setIsTimerStatus('idle');
              }}>
              <Text style={buttonText}>Confirm</Text>
            </TouchableHighlight>
          )}
          {isTimerStatus === 'idle' && (
            <TouchableHighlight
              style={buttonStyle}
              onPress={function () {
                setIsTimerStatus('running');
                setIsTimerStart(true);
                setResetTimer(false);
              }}>
              <Text style={buttonText}>Start</Text>
            </TouchableHighlight>
          )}
          {isTimerStatus === 'running' && (
            <TouchableHighlight
              style={buttonStyle}
              onPress={function () {
                setIsTimerStatus('pause');
                setIsTimerStart(false);
                setResetTimer(false);
              }}>
              <Text style={buttonText}>Pause</Text>
            </TouchableHighlight>
          )}
          {isTimerStatus === 'pause' && (
            <View style={styles.stopResumeButton}>
              <TouchableHighlight
                style={styles.buttonStyleStop}
                onPress={() => {
                  setIsTimerStatus('start');
                  setIsTimerStart(false);
                  setResetTimer(true);
                  setShouldShowInput(true);
                  setShouldShowTimer(false);
                }}>
                <Text style={styles.buttonTextStop}> Stop </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.buttonStylePause}
                onPress={() => {
                  setIsTimerStatus('running');
                  setIsTimerStart(true);
                  setResetTimer(false);
                  setShouldShowInput(false);
                  setShouldShowTimer(true);
                }}>
                <Text style={buttonText}>Resume</Text>
              </TouchableHighlight>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
const options = {
  text: {
    fontSize: 60,
    fontWeight: '500',
    color: 'black',
  },
};
const styles = StyleSheet.create({
  sectionStyle2: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
  input: {
    justifyContent: 'center',
    fontWeight: '600',
    fontSize: 60,
  },
  inputText: {
    fontSize: 60,
  },
  timerTitle: {
    fontSize: 13,
  },
  timerTitleMin: {
    fontSize: 13,
    marginHorizontal: 40,
  },
});
