import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button,TextInput,ScrollView ,Text, View,TouchableOpacity } from 'react-native';
import React, { useState } from "react";



export default function App() {
  
  const [user,setUser]=useState("Employee Name");
  const [start,setStart]=useState("Start");
  const [end,setEnd]=useState("End");

  // Submit function
  const Submit=()=>{

    console.log("Test")
    
  };

  return (
    <>

{/* User info */}
  <View style={styles.Employee}>
    <Text>Enter Employee Name</Text>
    <TextInput  style={styles.input}
    onChangeText={(val)=>setUser(val)}
   
  />
<Text>Start</Text>
    <TextInput  style={styles.input}
    keyboardType='numeric'
    onChangeText={(val)=>setStart(val)}
  />
  <Text>End</Text>
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
      <Text style={styles.Name}>{user}</Text>
      <Text style={styles.Name}>{start}</Text>
      <Text style={styles.Name}>{end}</Text>
      </ScrollView>
      
    </View>
     <View style={styles.container}>
     <StatusBar style="auto" />
     <ScrollView horizontal={true} >
     <Text style={styles.Name}>Monday</Text>
     <Text style={styles.Name}>Tuesday</Text>
     <Text style={styles.Name}>Wednesday</Text>
     <Text style={styles.Name}>Thursday</Text>
     <Text style={styles.Name}>Friday</Text>
     <Text style={styles.Name}>Saturday</Text>
     <Text style={styles.Name}>Sunday</Text>
     <Text >Sunday</Text>
     </ScrollView>
     
   </View>
   <View style={styles.container}>
     <StatusBar style="auto" />
     <ScrollView horizontal={true} >
     <Text style={styles.Name}>Monday</Text>
     <Text style={styles.Name}>Tuesday</Text>
     <Text style={styles.Name}>Wednesday</Text>
     <Text style={styles.Name}>Thursday</Text>
     <Text style={styles.Name}>Friday</Text>
     <Text style={styles.Name}>Saturday</Text>
     <Text style={styles.Name}>Sunday</Text>
     <Text >Sunday</Text>
     </ScrollView>
     
   </View>
   <View style={styles.container}>
     <StatusBar style="auto" />
     <ScrollView horizontal={true} >
     <Text style={styles.Name}>Monday</Text>
     <Text style={styles.Name}>Tuesday</Text>
     <Text style={styles.Name}>Wednesday</Text>
     <Text style={styles.Name}>Thursday</Text>
     <Text style={styles.Name}>Friday</Text>
     <Text style={styles.Name}>Saturday</Text>
     <Text style={styles.Name}>Sunday</Text>
     <Text >Sunday</Text>
     </ScrollView>
     
   </View>
   <View style={styles.container}>
     <StatusBar style="auto" />
     <ScrollView horizontal={true} >
     <Text style={styles.Name}>Monday</Text>
     <Text style={styles.Name}>Tuesday</Text>
     <Text style={styles.Name}>Wednesday</Text>
     <Text style={styles.Name}>Thursday</Text>
     <Text style={styles.Name}>Friday</Text>
     <Text style={styles.Name}>Saturday</Text>
     <Text style={styles.Name}>Sunday</Text>
     <Text >Sunday</Text>
     </ScrollView>
     
   </View>
   <View style={styles.container}>
     <StatusBar style="auto" />
     <ScrollView horizontal={true} >
     <Text style={styles.Name}>Monday</Text>
     <Text style={styles.Name}>Tuesday</Text>
     <Text style={styles.Name}>Wednesday</Text>
     <Text style={styles.Name}>Thursday</Text>
     <Text style={styles.Name}>Friday</Text>
     <Text style={styles.Name}>Saturday</Text>
     <Text style={styles.Name}>Sunday</Text>
     <Text >Sunday</Text>
     </ScrollView>
     
   </View>
   <View style={styles.container}>
     <StatusBar style="auto" />
     <ScrollView horizontal={true} >
     <Text style={styles.Name}>Monday</Text>
     <Text style={styles.Name}>Tuesday</Text>
     <Text style={styles.Name}>Wednesday</Text>
     <Text style={styles.Name}>Thursday</Text>
     <Text style={styles.Name}>Friday</Text>
     <Text style={styles.Name}>Saturday</Text>
     <Text style={styles.Name}>Sunday</Text>
     <Text >Sunday</Text>
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
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection:'row',
    marginTop: 60,
    height: 100,
    
  },
  Name:{
    color:'blue',
  },
  Employee:{
    marginTop:60,
  },
  input:{
    borderWidth:1,
    borderColor:'blue',
    padding:1,
    margin:10,
    width:200,
  },

});
