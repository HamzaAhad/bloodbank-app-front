import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import axios from 'axios';
const DonationPage = ({route}) => {
  const id = route?.params?.id;
  const [data, setData] = useState({});
  useEffect(() => {
    const url = `http://10.0.2.2:8000/api/appointments/${id}`;

    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  });
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/map.jpg')} style={styles.map} />

      <View style={styles.avatarContainer}>
        <Avatar
          rounded
          size="medium"
          source={require('../../assets/female.jpg')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.username}>{data.name}</Text>
          <Text style={styles.location}>{data.location}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.details}>Donation Details:</Text>
        <Text style={styles.bodyText3}>Location - {data.hospital}</Text>
        <Text style={styles.bodyText3}>
          Schedule - {data.date}, {data.time}
        </Text>
      </View>
      <Text style={styles.timeLeft}>Time Left:</Text>
      <View style={styles.squareContainer}>
        <View style={styles.square}>
          <Text style={styles.squareText}>22 Hrs</Text>
        </View>
        <View style={styles.square}>
          <Text style={styles.squareText}>25 Min</Text>
        </View>
        <View style={styles.square}>
          <Text style={styles.squareText}>45 Sec</Text>
        </View>
      </View>
      <TextInput
        style={styles.input4}
        placeholder="Share Your Feedback"
        placeholderTextColor="#A0A0A0"
      />
      <TouchableOpacity style={styles.roundButton}>
        <Text style={styles.roundButtonText}>Donated</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{justifyContent: 'center', alignContent: 'center'}}>
        <Text
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center',
          }}>
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  input4: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#A0A0A0',
    fontSize: 16,
    marginBottom: 16,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  bodyText3: {
    color: 'grey',
    fontSize: 13,
    marginHorizontal: 0,
    paddingLeft: 11,
  },
  squareText: {
    color: 'white',
    fontSize: 16,
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  map: {
    width: '100%',
    height: 200,
  },
  avatarContainer: {
    position: 'relative',
    bottom: 20,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  textContainer: {
    marginLeft: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: '#999',
  },
  details: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginBottom: 0,
    paddingLeft: 10,
  },
  timeLeft: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
    marginVertical: 10,
  },
  squareContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  square: {
    width: 80,
    height: 70,
    backgroundColor: 'red',
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
});
export default DonationPage;
