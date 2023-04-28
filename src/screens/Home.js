import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Top App Bar */}
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Manage Appointments</Text>
      </View>

      {/* Raised Text Button */}
      <View style={styles.raisedButton}>
        <Text style={styles.raisedButtonText}>No appointment booked</Text>
      </View>
      <Text style={styles.bodyText}>
        Each donation can help save more than one life.
      </Text>
      <Text style={styles.bodyText2}>Every 2 seconds someone needs blood.</Text>
      <Image style={styles.image} source={require('../../assets/heart.jpg')} />
      {/* Schedule an Appointment Button */}
      <TouchableOpacity style={styles.roundButton}>
        <Text
          style={styles.roundButtonText}
          onPress={() => {
            navigation.navigate('DonationType');
          }}>
          Schedule new appointment
        </Text>
      </TouchableOpacity>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Icon name="globe" size={30} color="#900" />
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
    backgroundColor: 'white',
  },
  appBar: {
    backgroundColor: 'red',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appBarTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  raisedButton: {
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
    elevation: 2,
    height: 40,
    width: '100%',
    marginHorizontal: 0,
    marginTop: 0,
    justifyContent: 'center',
  },
  raisedButtonText: {
    color: 'black',
    fontSize: 16,
    marginHorizontal: 10,
  },
  bodyText: {
    color: 'black',
    fontSize: 19,
    marginHorizontal: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bodyText2: {
    color: 'grey',
    fontSize: 16,
    marginHorizontal: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  image: {
    marginTop: 30,
    marginBottom: 50,
    width: '100%',
    height: 250,
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

export default Home;
