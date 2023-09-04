import React, {useState} from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ImageBackground, Image} from 'react-native'
import CheckBox from 'expo-checkbox'
import { RadioButtonItem } from "expo-radio-button";

function InspectionPage() {

  const [task , setTask] = useState([
    {id: 1, task: 'Air Bags', completed: false},
    {id: 2, task: 'Center Locking', completed: false},
    {id: 3, task: 'Remote Key', completed: false},
    {id: 4, task: 'Rear Wiper Heater', completed: false},
    {id: 5, task: 'Radio', completed: false},
    {id: 6, task: 'Sterio Cassette', completed: false},
  ])

  return (
    <View>
  <View style={styles.titleContainer}>
        <Text style={styles.boldText}>01.Vehicle Identification details-</Text>
        <Text style={styles.text}>As per vehicle</Text>
    </View>
   
    <View style={styles.optionContainer}>
    <Text>1.29 Extra Options</Text>
    {task.map((item) => (
      <View key={item.id} style={styles.taskContainer}>
      <View style={styles.columnH}>
      <Text>{item.task}</Text>
      </View>
      <View style={styles.column}><CheckBox></CheckBox></View>
      <View style={styles.columnH}>
      <Text>{item.task}</Text>
      </View>
      <View style={styles.column}><CheckBox></CheckBox></View>
    </View>
    ))}
    <ImageBackground style={styles.imageBackground} source={require('../assets/aston_martin_PNG47.png')}>
    <TextInput style={styles.textInput}
    multiline={true}S
    >
    </TextInput>
    <View style={styles.complains}>
    <Text>1.30 Complaice of</Text>
    <View style={styles.radioContainer}>
    <RadioButtonItem
          value="first"
          label="Yes"
        />
        <RadioButtonItem
          value="second"
          label="No"
        />
    </View>
    </View>
    <Text style={{marginLeft: 15}}>
      if No. Comments
    </Text>
    <TextInput style={styles.textInput}
    multiline={true}S
    />
      </ImageBackground>
  
    </View>
    <TouchableOpacity style={styles.nextBtn}>
      <Text style={{color: '#fff', fontWeight: 'bold'}}>
        Next
      </Text>
    </TouchableOpacity>
    </View>
    
  )
}

export default InspectionPage;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    alignItems: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  text: {
    fontSize: 14,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  optionContainer: {
    height: 550,
    backgroundColor: '#EFF4F8',
    margin: 20,
    borderRadius: 10,
    padding: 10,
  },
  taskContainer: {
    flexDirection: 'row', 
    paddingTop: 10,
    marginLeft: 20,
    justifyContent: 'space-between',
  },
  columnH: {
    flex: 1,
    },
  column: {
    marginRight: 15, 
  },
  textInput: {
    height: 100,
    marginLeft: 15,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: 10,
  },
  complains: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioContainer: {
    flexDirection: 'row',
    marginRight: 10,
    
  },
  nextBtn: {
    backgroundColor: 'red',
    width: 200,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  imageBackground: {
    opacity: 0.8,
  }
})