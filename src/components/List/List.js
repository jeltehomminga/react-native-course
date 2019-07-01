import React from "react";
import { StyleSheet, FlatList } from "react-native";
import ListItem from "../Listitem/ListItem";

const List = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      keyExtractor={item => item.key}
      renderItem={info => (
        <ListItem
          placeName={info.item.value}
          onItemPressed={() => props.onItemDeleted(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default List;
