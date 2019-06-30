import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const UserInput = props => {
  const handleTextChange = value => props.placeNameChangedHandler(value);
  const handlePlaceSubmit = () => props.placeSubmitHandler();
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.placeInput}
        placeholder="A newer place"
        value={props.placeName}
        onChangeText={value => handleTextChange(value)}
      />
      <Button
        title="Add"
        style={styles.placeButton}
        onPress={handlePlaceSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

export default UserInput;
