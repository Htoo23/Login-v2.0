import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, Animated, Easing } from 'react-native';
import { Surface } from "react-native-paper";

const Home = () => {

  const data = [
    {
      appImage: require("../assets/smile.png"),
      app_name: "SMILE Merchant Onboarding"
    },
    {
      appImage: require("../assets/branch-cob.png"),
      app_name: "Branch Customer Onboarding"
    },
    {
      appImage: require("../assets/assisted-cob.png"),
      app_name: "Assisted Customer Onboarding"
    },
    {
      appImage: require("../assets/hp-cob.png"),
      app_name: "HP Customer Onboarding"
    },
    {
      appImage: require("../assets/yoma.png"),
      app_name: "Next App Self Onboarding"
    },
    {
      appImage: require("../assets/rsu-cob.png"),
      app_name: "RSU Self Onboarding"
    },
    {
      appImage: require("../assets/wave-yellow.png"),
      app_name: "Wave Agent Onboarding"
    },
    {
      appImage: require("../assets/wave-blue.png"),
      app_name: "Wave Subscriber Onboarding"
    }

  ]
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
          {data.slice(0, 3).map((item, index) => (
            <Surface key={index} style={styles.surface}>
              <Image source={item.appImage} style={styles.surfaceImage} />

            </Surface>

          ))}
        </View>
        <View style={styles.surfaceRow}>
          {data.slice(3, 6).map((item, index) => (
            <Surface key={index} style={styles.surface}>
              <Image source={item.appImage} style={styles.surfaceImage} />

            </Surface>
          ))}

        </View>
        <View style={styles.surfaceRow}>
          {data.slice(6, 8).map((item, index) => (
            <Surface key={index} style={styles.surface}>
              <Image source={item.appImage} style={styles.surfaceImage} />
              <Text style={styles.surfaceText}>{item.app_name}</Text>
            </Surface>
          ))}
          <Surface style={[styles.surface, { opacity: 0 }]}></Surface>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FBFBFB",
  },
  image: {
    height: 170,
    width: 500,
  },
  apptext: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    position: "absolute",
    marginTop: 50,
    left: 10,
    width: 184,
    flexWrap: "wrap",
    paddingBottom: 30,
  },
  joblocation: {
    color: '#FFE513',
    fontWeight: "bold",
    fontSize: 13,
    position: "absolute",
    marginTop: 110,
    left: 10,
  },
  jobposition: {
    position: "absolute",
    marginTop: 135,
    left: 10,
    color: '#fff',
    fontWeight: "bold",
    fontSize: 14,
  },
  services: {
    position: "absolute",
    marginTop: 35,
    left: 10,
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  animationtext: {
    fontSize: 15,
    color: "#000",
    fontWeight: "bold",
    
  },
  surfaceContainer: {
    marginTop: 20,
    paddingHorizontal: 25,
  },
  surfaceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingTop: 35,
  },
  surface: {
    padding: 40,
    top: 60,
    width: 50,
    height: 40,
    elevation: 4,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  surfaceImage: {
    width: 50, 
    height: 40, 
    resizeMode: 'contain', 
    left: -25,
    bottom: 20,

  },
  surfaceText: {
    marginTop: 0,
    textAlign: 'center',
    fontSize: 10, 
    fontWeight: 'bold',

  },



});
export default Home;