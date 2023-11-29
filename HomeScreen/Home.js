import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, Animated, Easing } from 'react-native';
import { Surface } from "react-native-paper";

const Home = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const textWidth = 500;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: -textWidth,
        duration: 10000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
  }, [animatedValue]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/tadingyut.png')} style={styles.image} />
      <Text style={styles.apptext}>Centralized Onboarding</Text>
      <Text style={styles.joblocation}>Head Office, Yoma</Text>
      <Text style={styles.jobposition}>Software Engineer</Text>
      <View style={styles.textContainer}>
        <View>
          <Animated.Text
            style={[
              styles.animationtext,
              {
                transform: [
                  {
                    translateX: animatedValue,
                  },
                ],
              },
            ]}
          >
           Hello, Welcome Htoo Aung Lin! Have a Great Day!
          </Animated.Text>
        </View>
        <Text style={styles.services}>Services</Text>
      </View>
      <View style={styles.surfaceContainer}>
        <View style={styles.surfaceRow}>
          <Surface style={styles.surface}></Surface>
          <Surface style={styles.surface}></Surface>
          <Surface style={styles.surface}></Surface>
        </View>
        <View style={styles.surfaceRow}>
        <Surface style={styles.surface}></Surface>
        <Surface style={styles.surface}></Surface>
        <Surface style={styles.surface}></Surface>
        </View>
        <View style={styles.surfaceRow}>
        <Surface style={styles.surface}></Surface>
        <Surface style={styles.surface}></Surface>
        <Surface style={[styles.surface,{ opacity: 0 }]}></Surface>
        </View>
      </View>
    </View>
  );
};
const styles=StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FBFBFB",
  },
  image: {
    height: 170,
    width:500,
  },
  apptext:{
    fontSize:20,
    color:'#fff',
    fontWeight:'bold',
    position:"absolute",
    marginTop:50,
    left:10,
    width:184,
    flexWrap:"wrap",
    paddingBottom:30,
  },
  joblocation:{
    color:'#FFE513',
    fontWeight:"bold",
    fontSize:13,
    position:"absolute",
    marginTop:110,
    left:10,
  },
  jobposition:{
    position:"absolute",
    marginTop:135,
    left:10,
    color:'#fff',
    fontWeight:"bold",
    fontSize:14,
  },
  services:{
    position:"absolute",
    marginTop:35,
    left:10,
    color:'red',
    fontWeight:'bold',
    fontSize:20,
  },
  textContainer: {
    marginTop: 10, 
    alignItems: "center",
  },
  animationtext: {
    fontSize: 15,
    color: "#000", 
    fontWeight: "bold",
    // borderWidth:1,
    // borderColor:"red",
  },
  surfaceContainer:{
    marginTop:20,
    paddingHorizontal:25,
  },
  surfaceRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:10,
  },
  surface:{
    padding:40,
    top:60,
    elevation:4,
    borderRadius:10,
    backgroundColor:'#fff',
  }


  
});
export default Home;