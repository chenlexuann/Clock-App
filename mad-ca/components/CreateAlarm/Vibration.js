import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Switch,
} from 'react-native';
export default function Vibration() {
  const [isEnabled, setIsEnabled] = React.useState(true);
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
    <View style={{ marginBottom: 15 }}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={styles.createAlarmStyles}>Vibration</Text>
        <MySwitch />
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
}

const styles = StyleSheet.create({
  createAlarmStyles: {
    marginHorizontal: 10,
    fontWeight: '600',
  },
});
