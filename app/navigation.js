import React from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from 'react-native-ico-material-design';

function Navigation () {
  return (
    <View style={styles.container}>
    <Icon name="back-arrow" height= "70"  />
    <Icon name="user-shape" height= "70"  />
    <Icon name="front-store" height= "70"  />
    
    </View>
  )
}

export default Navigation; 

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
        backgroundColor: '#E6F0F9',
        height: 70,
        marginTop: 30,

    }
})