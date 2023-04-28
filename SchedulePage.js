import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const SchedulePage = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleDateConfirm = (date) => {
    setSelectedDate(date.toISOString().split('T')[0]);
    setDatePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    setSelectedTime(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
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
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible || isTimePickerVisible}
        mode={isDatePickerVisible ? "date" : "time"}
        onConfirm={isDatePickerVisible ? handleDateConfirm : handleTimeConfirm}
        onCancel={hidePicker}
      />
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
    borderBottomWidth: 1,
    borderBottomColor: '#A0A0A0',
    paddingBottom: 8,
    fontSize: 16,
    marginBottom: 16,
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
    width: '50%',
  },
  timeInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#A0A0A0',
    paddingBottom: 8,
    fontSize: 16,
    marginBottom: 16,
    width: 300,
  },
});

export default SchedulePage;




















