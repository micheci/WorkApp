import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Keyboard,Button,TextInput,ScrollView ,Text, View,TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Schedule from './components/Schedule';


export default function App() {
 
  const [user,setUser]=useState("Employee Name");
  const [userData,setUserData]=useState([]);

  



  const [startMon,setStartMon]=useState("Start");
  const [startDataMon,setStartDataMon]=useState([]);
  const [endMon,setEndMon]=useState("End");
  const [endDataMon,setEndDataMon]=useState([]);

  const [startTues,setStartTues]=useState("Start");
  const [startDataTues,setStartDataTues]=useState([]);
  const [endTues,setEndTues]=useState("End");
  const [endDataTues,setEndDataTues]=useState([]);

  const [startWed,setStartWed]=useState("Start");
  const [startDataWed,setStartDataWed]=useState([]);
  const [endWed,setEndWed]=useState("End");
  const [endDataWed,setEndDataWed]=useState([]);

  
  const [startThur,setStartThur]=useState("Start");
  const [startDataThur,setStartDataThur]=useState([]);
  const [endThur,setEndThur]=useState("End");
  const [endDataThur,setEndDataThur]=useState([]);

  const [startFriday,setStartFriday]=useState("Start");
  const [startDataFriday,setStartDataFriday]=useState([]);
  const [endFriday,setEndFriday]=useState("End");
  const [endDataFriday,setEndDataFriday]=useState([]);

  const [startSat,setStartSat]=useState("Start");
  const [startDataSat,setStartDataSat]=useState([]);
  const [endSat,setEndSat]=useState("End");
  const [endDataSat,setEndDataSat]=useState([]);

  const [startSun,setStartSun]=useState("Start");
  const [startDataSun,setStartDataSun]=useState([]);
  const [endSun,setEndSun]=useState("End");
  const [endDataSun,setEndDataSun]=useState([]);


 

  // Store data function
  const StoreData=()=>{

    setUserData([...userData,user])
   
    setStartDataMon([...startDataMon,startMon])
    setEndDataMon([...endDataMon,endMon])
    setStartDataTues([...startDataTues,startTues])
    setEndDataTues([...endDataTues,endTues])
    setStartDataWed([...startDataWed,startWed])
    setEndDataWed([...endDataWed,endWed])
    setStartDataThur([...startDataThur,startThur])
    setEndDataThur([...endDataThur,endThur])
    setStartDataFriday([...startDataFriday,startFriday])
    setEndDataFriday([...endDataFriday,endFriday])
    setStartDataSat([...startDataSat,startSat])
    setEndDataSat([...endDataSat,endSat])
    setStartDataSun([...startDataSun,startSun])
    setEndDataSun([...endDataSun,endSun])
    setUser(null)
    setStartMon(null)
    setEndMon(null)
    setStartTues(null)
    setEndTues(null)
    setStartWed(null)
    setEndWed(null)
    setStartThur(null)
    setEndThur(null)
    setStartFriday(null)
    setEndFriday(null)
    setStartSat(null)
    setEndSat(null)
    setStartSun(null)
    setEndSun(null)
  }
  
return (
    <>

  {/* User info */}
  <View style={styles.centerLogin}><Text style={styles.Employee}>Employee Name</Text>
    <TextInput  onBlur={Keyboard.dismiss} style={styles.input}
    onChangeText={(val)=>setUser(val)}
    />
    <ScrollView horizontal={true} >
    
    
    <View style={styles.days} >
    <Text >Monday</Text>
    <Text  >Start</Text>
    <TextInput  style={styles.input}
    keyboardType='numeric'
    onChangeText={(val)=>setStartMon(val)}
    />
    <Text >End</Text>
    <TextInput  style={styles.input}
    keyboardType='numeric'
    onChangeText={(val)=>setEndMon(val)}
    />
    </View >

    <View style={styles.days}>
    <Text style={styles.cntr}>Tuesday</Text>
    <Text  >Start</Text>
    <TextInput  style={styles.input}
    keyboardType='numeric'
    onChangeText={(val)=>setStartTues(val)}
    />
    <Text >End</Text>
    <TextInput  style={styles.input}
    keyboardType='numeric'
    onChangeText={(val)=>setEndTues(val)}
    />
    </View>

    <View style={styles.days}>
    <Text style={styles.cntr}>Wednesday</Text>
    <Text >Start</Text>
    <TextInput  style={styles.input}
    keyboardType='numeric'
    onChangeText={(val)=>setStartWed(val)}
    />
    <Text  >End</Text>
    <TextInput  style={styles.input}
    keyboardType='numeric'
    onChangeText={(val)=>setEndWed(val)}
    />
    </View>


    <View style={styles.days}>
    <Text style={styles.cntr}>Thursday</Text>
    <Text  >Start</Text>
    <TextInput  style={styles.input}
    keyboardType='numeric'
    onChangeText={(val)=>setStartThur(val)}
    />
    <Text  >End</Text>
    <TextInput  style={styles.input}
    keyboardType='numeric'
    onChangeText={(val)=>setEndThur(val)}
    />
    </View>
    <View style={styles.days}>
    <Text style={styles.cntr}>Friday</Text>
    <Text  >Start</Text>
    <TextInput  style={styles.input}
    keyboardType='numeric'
    onChangeText={(val)=>setStartFriday(val)}
    />
    <Text  >End</Text>
    <TextInput  style={styles.input}
    keyboardType='numeric'
    onChangeText={(val)=>setEndFriday(val)}
    />
    </View>
    <View style={styles.days}>
    <Text style={styles.cntr}>Saturday</Text>
    <Text  >Start</Text>
    <TextInput  style={styles.input}
    keyboardType='numeric'
    onChangeText={(val)=>setStartSat(val)}
    />
    <Text  >End</Text>
    <TextInput  style={styles.input}
    keyboardType='numeric'
    onChangeText={(val)=>setEndSat(val)}
    />
    </View>
    <View style={styles.days}>
    <Text style={styles.cntr}>Sunday</Text>
    <Text  >Start</Text>
    <TextInput  style={styles.input}
    keyboardType='numeric'
    onChangeText={(val)=>setStartSun(val)}
    />
    <Text  >End</Text>
    <TextInput  style={styles.input}
    keyboardType='numeric'
    onChangeText={(val)=>setEndSun(val)}
    />
    </View>
    

    </ScrollView>
    <Button title='submit' onPress={StoreData}></Button>

  </View>



{/* updated schedule using components */}

{/* USERNAMe */}
<View style={styles.row}>
  <View>
  {userData.map((item,index)=>{
    return <Schedule key={index} text={item}/>
  })}</View>

{/* MONDAY */}
<View>
  <Text>Monday</Text>
  {startDataMon.map((item,index)=>{
    return <Schedule key={index} text={item}/>
  })}</View>
  <View>
  {endDataMon.map((item,index)=>{
    return <Schedule key={index} text={item}/>
  })}</View>

<View>
  <Text>Tuesday</Text>
  {startDataTues.map((item,index)=>{
    return <Schedule key={index} text={item}/>
  })}</View>
  <View>
  {endDataTues.map((item,index)=>{
    return <Schedule key={index} text={item}/>
  })}</View>

<View>
  <Text>Wednesday</Text>
  {startDataWed.map((item,index)=>{
    return <Schedule key={index} text={item}/>
  })}</View>
  <View>
  {endDataWed.map((item,index)=>{
    return <Schedule key={index} text={item}/>
  })}</View>

<View>
  <Text>Thursday</Text>
  {startDataThur.map((item,index)=>{
    return <Schedule key={index} text={item}/>
  })}</View>
  <View>
  {endDataThur.map((item,index)=>{
    return <Schedule key={index} text={item}/>
  })}</View>
  
  <View>
  <Text>Friday</Text>
  {startDataFriday.map((item,index)=>{
    return <Schedule key={index} text={item}/>
  })}</View>
  <View>
  {endDataFriday.map((item,index)=>{
    return <Schedule key={index} text={item}/>
  })}</View>

<View>
  <Text>Saturday</Text>
  {startDataSat.map((item,index)=>{
    return <Schedule key={index} text={item}/>
  })}</View>
  <View>
  {endDataSat.map((item,index)=>{
    return <Schedule key={index} text={item}/>
  })}</View>

<View>
  <Text>Sunday</Text>
  {startDataSun.map((item,index)=>{
    return <Schedule key={index} text={item}/>
  })}</View>
  <View>
  {endDataSun.map((item,index)=>{
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
   
   
    width:40,
    
    
  

  },
  cntr:{
    textAlign:'center',
    justifyContent:'center',
  },
  days:{
    marginTop: 60,
    marginLeft:20,
    
  }

});
