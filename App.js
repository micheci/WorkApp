import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView ,Text, View,TouchableOpacity } from 'react-native';
import React, { useState } from "react";

export default function App() {
  return (
    <>
    <ScrollView>
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
});
