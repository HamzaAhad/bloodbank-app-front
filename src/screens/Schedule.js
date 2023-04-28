import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import axios from 'axios';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Schedule = ({navigation, route}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [hospital, setHospital] = useState('');
  const [notes, setNotes] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const donation = route?.params?.donation;

  console.log(route);
  const handleDateConfirm = date => {
    setSelectedDate(date.toISOString().split('T')[0]);
    setDatePickerVisibility(false);
  };

  const handleTimeConfirm = time => {
    setSelectedTime(
      time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
    );
    setTimePickerVisibility(false);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hidePicker = () => {
    setDatePickerVisibility(false);
    setTimePickerVisibility(false);
  };

  const bookAppointment = async () => {
    const url = 'http://10.0.2.2:8000/api/appointments';

    axios
      .post(url, {
        date: selectedDate,
        time: selectedTime,
        donationType: donation,
        hospital: hospital,
        note: notes,
        bloodGroup: bloodGroup,
        name: 'Sam Billings',
        location: 'Sharjah UAE',
        isDonated: false,
      })
      .then(response => {
        console.log(response.data);
        navigation.navigate('DonationPage', {id: response?.data?.id});
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.title}>Schedule</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Select Hospital"
          placeholderTextColor="#A0A0A0"
          onChangeText={newText => setHospital(newText)}
        />
        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={showDatePicker}>
            <TextInput
              style={styles.dateInput}
              placeholder="Date"
              placeholderTextColor="#A0A0A0"
              value={selectedDate}
              editable={false}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={showTimePicker}>
            <TextInput
              style={styles.timeInput}
              placeholder="Time"
              placeholderTextColor="#A0A0A0"
              value={selectedTime}
              editable={false}
            />
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.inputnote}
          placeholder="Note"
          placeholderTextColor="#A0A0A0"
          value={notes}
          onChangeText={newText => setNotes(newText)}
        />
        <TextInput
          style={styles.input}
          placeholder="Blood Group"
          placeholderTextColor="#A0A0A0"
          onChangeText={newText => setBloodGroup(newText)}
        />
        <TouchableOpacity style={styles.roundButton} onPress={bookAppointment}>
          <Text style={styles.roundButtonText}>Book appointment</Text>
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible || isTimePickerVisible}
        mode={isDatePickerVisible ? 'date' : 'time'}
        onConfirm={isDatePickerVisible ? handleDateConfirm : handleTimeConfirm}
        onCancel={hidePicker}
      />

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image
            source={require('../../assets/notifications.png')}
            style={{width: 24, height: 24}}
            resizeMode="cover"
          />
          <Text style={styles.tabText}>Bell</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  appBar: {
    backgroundColor: '#FF0000',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#A0A0A0',
    paddingBottom: 8,
    paddingLeft: 10,
    fontSize: 16,
    marginBottom: 16,
  },

  inputnote: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#A0A0A0',
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 16,
    height: 200,
    width: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#A0A0A0',
    paddingBottom: 8,
    fontSize: 16,
    marginBottom: 16,
    width: 150,
  },
  timeInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#A0A0A0',
    paddingBottom: 8,
    fontSize: 16,
    marginBottom: 16,
    width: 150,
  },
  roundButton: {
    backgroundColor: 'red',
    borderRadius: 50,
    height: 50,
    width: 230,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  roundButtonText: {
    color: 'white',
    fontSize: 16,
  },
  bottomBar: {
    backgroundColor: 'red',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    fontSize: 14,
  },
});

export default Schedule;
