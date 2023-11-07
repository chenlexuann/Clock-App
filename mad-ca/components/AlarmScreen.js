//Chen lexuan
//DIT/FT/1B/05
//p2212562
import * as React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Slider from '@react-native-community/slider';
import RadioButton from './RadioButton';
import AlarmsList from './AlarmsList';
import Vibration from './CreateAlarm/Vibration';
import Snooze from './CreateAlarm/Snooze';

function AlarmScreen(props) {
  const [onOffAlarm, setOnOffAlarm] = React.useState(true);

  return (
    <View>
      <View>
        <View style={styles.containerAlarm}>
          <Text style={styles.TextStyle}>Alarm in 5 hours 20 minutes</Text>
        </View>
        <View style={styles.containerImg}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => props.navigation.navigate('Create Alarm')}>
            <Image
              style={styles.ImgStyle1}
              source={require('../Img/plus.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <Image
              style={styles.ImgStyle2}
              source={require('../Img/pencil-simple.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <AlarmsList
          alarmTitle="10am school at t22512"
          alarmTime="7:00"
          AMPM="AM"
        />
        <AlarmsList
          alarmTitle="School"
          alarmTime="10:00"
          AMPM="AM"
        />
        <AlarmsList
          alarmTitle="Training at ITE East"
          alarmTime="12:30"
          AMPM="PM"
        />
      </ScrollView>
    </View>
  );
}
function CreateAlarmScreen(props) {
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
    <ScrollView
      style={{
        display: 'flex',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginTop: 100,
          marginBottom: 60,
        }}>
        <Text
          style={{
            fontSize: 55,
            fontWeight: '500',
          }}>
          6 : 00
        </Text>
        <View style={{ marginTop: 35 }}>
          <Text
            style={{
              fontSize: 26,
              fontWeight: '500',
            }}>
            AM
          </Text>
          <Text
            style={{
              fontSize: 26,
              fontWeight: '500',
              color: 'grey',
            }}>
            PM
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 20,
          paddingTop: 30,
          paddingBottom: 50,
          borderRadius: 20,
        }}>
        <View style={{ marginBottom: 20 }}>
          <TextInput
            placeholder="Alarm name"
            placeholderTextColor="gray"
            style={{
              marginHorizontal: 10,
              fontWeight: '600',
            }}
          />
          <View
            style={{
              margin: 10,
              height: 2,
              backgroundColor: 'black',
              borderRadius: 20,
            }}
          />
        </View>

        <View style={{ marginBottom: 15 }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.createAlarmStyles}>Alarm sound</Text>

              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => props.navigation.navigate('Alarm Sound')}>
                <Text
                  style={{
                    marginHorizontal: 10,
                    color: '#0864AA',
                  }}>
                  Default Theme
                </Text>
              </TouchableOpacity>
            </View>
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
        <Vibration />
        <Snooze />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.saveButton}
          onPress={() => props.navigation.navigate('Alarm')}>
          <Text style={{ display: 'flex', justifyContent: 'center' }}>
            Save
          </Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
}
function AlarmSoundPage() {
  const PROP = [
    {
      key: '1',
      text: 'Default Sound',
    },
    {
      key: '2',
      text: 'Ring Ring',
    },
    {
      key: '3',
      text: 'Angel Voice',
    },
    {
      key: '4',
      text: 'Arcane',
    },
    {
      key: '5',
      text: 'Beep Bop',
    },
    {
      key: '6',
      text: 'Beep Beep',
    },
    {
      key: '7',
      text: "Ben's Dream",
    },
    {
      key: '8',
      text: 'Candy Crush',
    },
    {
      key: '9',
      text: 'Candice Nut',
    },
    {
      key: '10',
      text: 'Bruh',
    },
  ];

  return (
    <View style={{ backgroundColor: 'white' }}>
      <View>
        <ScrollView style={{ height: '80%' }}>
          <RadioButton PROP={PROP} />
        </ScrollView>
      </View>
      <View
        style={{
          backgroundColor: '#ECECEC',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}>
        <Text
          style={{
            fontSize: 15,
            paddingHorizontal: 35,
            paddingTop: 30,
          }}>
          Alarm Volume
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 20,
            paddingBottom: 40,
          }}>
          <Image
            style={styles.ImgStyleVolume}
            source={require('../Img/medium-volume.png')}
          />
          <Slider
            style={{ width: 250, height: 40, marginRight: 30 }}
            minimumValue={1}
            maximumValue={10}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#000000"
          />
        </View>
      </View>
    </View>
  );
}

const AlarmStack = createNativeStackNavigator();
export default function AlarmStackScreen() {
  return (
    <AlarmStack.Navigator>
      <AlarmStack.Screen
        options={{ headerShown: false }}
        name="Alarm"
        component={AlarmScreen}
      />
      <AlarmStack.Screen name="Create Alarm" component={CreateAlarmScreen} />
      <AlarmStack.Screen name="Alarm Sound" component={AlarmSoundPage} />
    </AlarmStack.Navigator>
  );
}

const styles = StyleSheet.create({
  containerAlarm: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 73,
    marginVertical: 80,
  },
  TextStyle: {
    marginTop: 50,
    marginHorizontal: 15,
    fontSize: 30,
    textAlign: 'center',
  },
  containerImg: {
    flexDirection: 'row-reverse',
  },
  ImgStyle1: {
    height: 27,
    width: 27,
    margin: 10,
  },
  ImgStyle2: {
    height: 30,
    width: 30,
    margin: 10,
  },
  ImgStyleVolume: {
    height: 40,
    width: 40,
    marginHorizontal: 10,
  },
  createAlarmStyles: {
    marginHorizontal: 10,
    fontWeight: '600',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  saveButton: {
    marginTop: 10,
    borderColor: 'black',
    borderWidth: 2,
    paddingVertical: 20,
    paddingHorizontal: 50,
    backgroundColor: 'white',
    borderRadius: 15,
  },
});
