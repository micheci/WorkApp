import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button,TextInput,ScrollView ,Text, View,TouchableOpacity } from 'react-native';
import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function App() {
  
  const [Data,setData]=useState({
    userName:'',
    start:'',
    end:'',
  })
  // const [user,setUser]=useState("Employee Name");
  const [start,setStart]=useState("Start");
  const [end,setEnd]=useState("End");

  // Submit function
  const Submit=()=>{
    AsyncStorage.setItem('KEY','user');
    AsyncStorage.setItem('KEY','start');
    AsyncStorage.setItem('KEY','end');
    console.log("Test")
    
  };

return (
    <>

{/* User info */}
  <View style={styles.centerLogin}>
    <Text style={styles.Employee}>Employee Name</Text>
    <TextInput  style={styles.input}
    onChangeText={(val)=>setData.userName(val)}
   
  />
<Text style={styles.cntr} >Start</Text>
    <TextInput  style={styles.input}
    keyboardType='numeric'
    onChangeText={(val)=>setStart(val)}
  />
  <Text style={styles.cntr} >End</Text>
    <TextInput  style={styles.input}
    keyboardType='numeric'
    onChangeText={(val)=>setEnd(val)}
  />
  <Button title='submit' onPress={Submit()}></Button>
  </View>


{/* Employee schedule */}
  <ScrollView>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView horizontal={true} >
      <Text style={styles.Name}>{Data.userName}</Text>
      <Text style={styles.Name}>{start}</Text>
      <Text style={styles.Name}>{end}</Text>
      </ScrollView>
      
    </View>
   </ScrollView>  
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    marginTop: 60,
    height: 100,
    
  },
  centerLogin:{
    alignItems: 'center',
    justifyContent: 'center',
    
    
   
    
  },
  Name:{
    color:'blue',
    textAlign:'center',
    justifyContent: 'center',
  },
  Employee:{
    marginTop:60,
    textAlign:'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth:1,
    borderColor:'green',
    padding:1,
   
    width:200,
    
    
    marginLeft: 50,
    marginRight: 50

  },
  cntr:{
    textAlign:'center',
    justifyContent:'center',
  }

});
