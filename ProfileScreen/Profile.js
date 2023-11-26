import React from "react";
import {View,Text,Image,StyleSheet} from 'react-native';

const Profile=()=>{
  return(
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/logo.png')} style={styles.image}/>
        <Text style={styles.idText}>Employee ID:010311</Text>
      </View>
    </View>
  );
};
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:16,
  },
  imageContainer:{
    alignItems:'center',
  },
  image:{
    width:100,
    height:100,
    borderRadius:50,
    marginBottom:10,
  },
  idText:{
    fontSize:16,
    fontWeight:'bold',
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
  },

  
});
export default Profile;