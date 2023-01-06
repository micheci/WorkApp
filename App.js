import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Keyboard,Button,TextInput,ScrollView ,Text, View,TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Schedule from './components/Schedule';


export default function App() {
 
  const [user,setUser]=useState("Employee Name");
  const [userData,setUserData]=useState([]);

  const [start,setStart]=useState("Start");
  const [startData,setStartData]=useState([]);

  const [end,setEnd]=useState("End");
  const [endData,setEndData]=useState([]);

  // Store data function
  const StoreData=()=>{

    setUserData([...userData,user])
    setStartData([...startData,start])
    setEndData([...endData,end])
    setUser(null)
    setStart(null)
    setEnd(null)
  }
  
return (
    <>

  {/* User info */}
  <View style={styles.centerLogin}>

    <Text style={styles.Employee}>Employee Name</Text>
    <TextInput  onBlur={Keyboard.dismiss} style={styles.input}
    onChangeText={(val)=>setUser(val)}
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
    <Button title='submit' onPress={StoreData}></Button>

  </View>



{/* updated schedule using components */}
<View style={styles.row}>
  <View>
  {userData.map((item,index)=>{
    return <Schedule key={index} text={item}/>
  })}</View>
  <View>
  {startData.map((item,index)=>{
    return <Schedule key={index} text={item}/>
  })}</View>
  <View>
  {endData.map((item,index)=>{
    return <Schedule key={index} text={item}/>
  })}</View>
  
 {/* <Schedule text={"hello"}></Schedule>
 <Schedule text={"another ezmple"}></Schedule>
 <Schedule text={"3rd ezmke"}></Schedule> */}
</View>

{/* OLD Employee schedule */}
  {/* <ScrollView>

    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView horizontal={true} >
      <Text style={styles.Name}>{user}</Text>
      <Text style={styles.Name}>{start}</Text>
      <Text style={styles.Name}>{end}</Text>
      </ScrollView>  
    </View>

   </ScrollView>   */}


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
  row: {
    flexDirection: "column",
    flexWrap: "wrap",
    backgroundColor:'blue',
    
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
