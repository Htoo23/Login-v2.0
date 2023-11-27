import React, { useState } from "react";
import { View, Image, StyleSheet } from 'react-native';
import { Text, TextInput, Button, Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';


const Profile = () => {
  const [editable, setEditable] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "",
    phone: "",
    dob: "",
    bloodType: "",
    address: "",
    fatherName: "",
    businessName: "",
    businessLocation: "",
  });

  const handleEditPress = () => {
    setEditable(true);
  };

  const handleSavePress = () => {

    if (isFormValid()) {
      setEditable(false);

      console.log("Saving profile data:", profileData);
    } else {

      console.log("Form validation failed. Please fill in all required fields.");
    }
  };
  const isFormValid = () => {

    return Object.values(profileData).every(value => value !== "");
  };
  const handlePhoneChange = (text) => {

    if (/^\d+$/.test(text) && text.length <= 11 || text === "") {
      setProfileData({ ...profileData, phone: text });
    }
  };


  const isSaveDisabled = () => {

    return Object.values(profileData).some(value => value === "");
  };
  const handleNameChange = (text) => {

    if (/^[a-zA-Z]+$/.test(text) || text === "") {
      setProfileData({ ...profileData, name: text });
    }
  };
  const handlebloodTypeChange = (text) => {
    if (/^[a-zA-Z]+$/.test(text) || text === "") {
      setProfileData({ ...profileData, bloodType: text });
    }
  };
  const handlefatherNameChange=(text)=>{
    if (/^[a-zA-Z]+$/.test(text) || text === ""){
      setProfileData({...profileData,fatherName:text})
    }

  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/logo.png')} style={styles.image} />
          <Text style={styles.idText}>Employee ID: 010311</Text>


          <TextInput
            label="Name"
            value={profileData.name}
            onChangeText={(text) => handleNameChange(text)}
            editable={editable}
            mode="outlined"
            style={styles.input}
            left={<TextInput.Icon icon={() => <Icon name="user" size={20} />} />}
          />
          <TextInput
            label="Phone"
            value={profileData.phone}
            onChangeText={(text) => handlePhoneChange(text)}
            editable={editable}
            mode="outlined"
            style={styles.input}
            left={<TextInput.Icon icon={() => <Icon name="phone" size={20} />} />}
          />

          <TextInput
            label="Date Of Birth"
            value={profileData.dob}
            onChangeText={(text) => setProfileData({ ...profileData, dob: text })}
            editable={editable}
            mode="outlined"
            style={styles.input}
            left={<TextInput.Icon icon={() => <Icon name="calendar" size={20} />} />}
          />
          <TextInput
            label="Blood Type"
            value={profileData.bloodType}
            onChangeText={(text) => handlebloodTypeChange(text)}
            editable={editable}
            mode="outlined"
            style={styles.input}
            left={<TextInput.Icon icon={() => <Icon name="tint" size={20} />} />}
          />
          <TextInput
            label="Address"
            value={profileData.address}
            onChangeText={(text) => setProfileData({ ...profileData, address: text })}
            editable={editable}
            mode="outlined"
            style={styles.input}
            left={<TextInput.Icon icon={() => <Icon name="map-marker" size={20} />} />}
          />
          <TextInput
            label="Father Name"
            value={profileData.fatherName}
            onChangeText={(text) => handlefatherNameChange(text)}
            editable={editable}
            mode="outlined"
            style={styles.input}
            left={<TextInput.Icon icon={() => <Icon name="user" size={20} />} />}
          />
          <TextInput
            label="Business Name"
            value={profileData.businessName}
            onChangeText={(text) => setProfileData({ ...profileData, businessName: text })}
            editable={editable}
            mode="outlined"
            style={styles.input}
            left={<TextInput.Icon icon={() => <Icon name="briefcase" size={20} />} />}
          />
          <TextInput
            label="Business Location"
            value={profileData.businessLocation}
            onChangeText={(text) => setProfileData({ ...profileData, businessLocation: text })}
            editable={editable}
            mode="outlined"
            style={styles.input}
            left={<TextInput.Icon icon={() => <Icon name="map-marker" size={20} />} />}
          />

          {!editable && (
            <Button
              mode="contained"
              onPress={handleEditPress}
              style={[styles.button, { backgroundColor: 'orange' }]}
            >
              Edit
            </Button>
          )}
          {editable && (
            <View style={styles.buttonContainer}>
              <Button
                mode="contained"
                onPress={handleSavePress}
                style={[styles.saveButton, styles.saveCancelButton]}
                disabled={isSaveDisabled()}
                disabledTitleStyle={{ color: 'white' }}
              >
                Save
              </Button>

              <Button
                mode="contained"
                onPress={() => setEditable(false)}
                style={[styles.button, styles.saveCancelButton, { backgroundColor: 'black' }]}
              >
                Cancel
              </Button>
            </View>
          )}
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  idText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: 250,
    marginBottom: 10,

  },
  button: {
    marginTop: 10,
  },

  saveButton: {
    marginTop: 10,
    backgroundColor: 'green',

    // Adjust the color as needed
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  saveCancelButton: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,

  },
});

export default Profile;