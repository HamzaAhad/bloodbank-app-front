import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {Card} from 'react-native-shadow-cards';

const DonationType = ({navigation}) => {
  const list = [
    {title: 'Blood'},
    {title: 'Power Red'},
    {title: 'Peatelets'},
    {title: 'All Plasma'},
  ];

  const card = list.map((item, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => {
        navigation.navigate('Schedule', {donation: item?.title});
      }}>
      <View style={styles.cardView} key={index}>
        <Card style={styles.cardComponent}>
          <View style={styles.cardComponentConatiner}>
            <View style={styles.circle} />
            <View style={{flex: 2, marginLeft: 10}}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                {item?.title}
              </Text>
              <Text style={{fontSize: 10, fontWeight: 'bold'}}>
                Most common type
              </Text>
            </View>
          </View>

          <View style={styles.cardBottom}>
            <Text style={styles.cardBottomText}>You Can Donate Now</Text>
          </View>
        </Card>
      </View>
    </TouchableOpacity>
  ));
  return (
    <View style={styles.container}>
      {/* Top App Bar */}
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Donation Type</Text>
      </View>
      <View>{card}</View>
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
  cardView: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardComponent: {
    marginTop: 10,
    paddingTop: 10,

    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 10,
  },
  cardComponentConatiner: {
    flexDirection: 'row',
  },
  circle: {
    // flex: 1,
    marginLeft: 10,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: 'red',
  },
  cardBottom: {
    height: 25,
    backgroundColor: 'red',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  cardBottomText: {
    color: 'white',
    fontSize: 15,
  },
});

export default DonationType;
