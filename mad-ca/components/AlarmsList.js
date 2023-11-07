import * as React from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';

export default AlarmsList = (props) => {
  const [isEnabled, setIsEnabled] = React.useState(true);
  let textStyleOnOff;
  let alarmStylesOnOff;
  let AMPMstylesOnOff;
  let titlestylesOnOff;
  if (isEnabled) {
    textStyleOnOff = styles.textStyleOn;
    alarmStylesOnOff = styles.alarmStylesOn;
    AMPMstylesOnOff = styles.AMPMstylesOn;
    titlestylesOnOff = styles.titlestylesOn;
  } else {
    textStyleOnOff = styles.textStyleOff;
    alarmStylesOnOff = styles.alarmStylesOff;
    AMPMstylesOnOff = styles.AMPMstylesOff;
    titlestylesOnOff = styles.titlestylesOff;
  }
  const MySwitch = () => {
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    // setOnOffAlarm(!onOffAlarm);

    return (
      <View>
        <Switch
          trackColor={{ false: '#767577', true: '#0864AA' }}
          thumbColor={isEnabled ? '#0090FF' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    );
  };

  return (
    <View style={alarmStylesOnOff}>
      <Text style={titlestylesOnOff}>{props.alarmTitle}</Text>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={textStyleOnOff}>{props.alarmTime}</Text>
          <Text style={AMPMstylesOnOff}>{props.AMPM}</Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <MySwitch />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titlestylesOn: {
    color: 'black',
  },
  titlestylesOff: {
    color: 'gray',
  },
  alarmStylesOn: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  alarmStylesOff: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: 'black',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  AMPMstylesOn: {
    marginTop: 20,
    fontSize: 16,
    marginLeft: 7,
    marginBottom: 5,
    color: 'black',
  },
  AMPMstylesOff: {
    marginTop: 20,
    fontSize: 16,
    marginLeft: 7,
    marginBottom: 5,
    color: 'gray',
  },
  textStyleOn: {
    fontSize: 35,
    color: 'black',
  },
  textStyleOff: {
    fontSize: 35,
    color: 'gray',
  },
});
