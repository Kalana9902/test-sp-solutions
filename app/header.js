import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HeaderWithLeftIcon = ({ title, leftIconSource }) => {
  return (
    <View style={styles.header}>
      <View style={styles.leftIconContainer}>
        <Image source={leftIconSource} style={styles.leftIcon} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    height: 60, 
  },
  leftIconContainer: {
    flex: 1, 
    paddingLeft: 10, 
    alignItems: 'flex-start',
  },
  leftIcon: {
    width: 24, 
    height: 24,
  },
  titleContainer: {
    flex: 2, 
  },
  title: {
    fontSize: 20, 
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HeaderWithLeftIcon;
