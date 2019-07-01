import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import List from "./src/components/List/List";
import UserInput from "./src/components/UserInput/UserInput";

export default class App extends Component {
  state = {
    placeName: "",
    places: []
  };
  placeNameChangedHandler = val => {
    this.setState({ placeName: val });
  };
  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    let newPlaces = this.state.places;
    newPlaces.push({
      key: Math.random().toString(),
      value: this.state.placeName
    });
    this.setState({
      places: newPlaces
    });
  };
  placeDeleteHandler = key => {
    let filteredPlaces = this.state.places;
    filteredPlaces.filter(place => {
      return place.key !== key;
    });
    this.setState({
      places: filteredPlaces
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <UserInput
          placeName={this.state.placeName}
          places={this.state.places}
          placeNameChangedHandler={this.placeNameChangedHandler}
          placeSubmitHandler={this.placeSubmitHandler}
        />
        <List
          places={this.state.places}
          onItemDeleted={this.placeDeleteHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
