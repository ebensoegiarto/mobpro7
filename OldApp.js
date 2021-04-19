
import React, { Component } from 'react';
import { View, Text, Button, Image, TextInput, ScrollView } from 'react-native';
import Title from './Title';
 
 class OldApp extends Component {

  // state = {
  //   isShow: true,
  // }

   render()
   {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title text="NEWS"/>
        <Button title="toggle Title"onPress={()=> console.log("Button press")}/>
        {/* <Image source={require('./assets/app.png')}/> */}
        {/* <Image style={{width: 50, height: 50}} source={{url:'https://reactnative.dev/img/tiny_logo.png'}}/> */}
        <TextInput editable={true} placeholder="User name" style={{borderWidth: 1, marginVertical: 10, marginHorizontal: 20, paddingLeft: 20, paddingVertical: 12, borderRadius: 10,}} />
      </ScrollView>
     );
   }
 }

 export default OldApp;


