import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import { Platform } from "@unimodules/core";

const PlacesListScreen = props => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

PlacesListScreen.navigationOptions = navData => {
  return {
    headerTitle: "All Places",
    headerRight: (
      <HeaderButtons HeaderComponent={HeaderButton}>
        <Item
          title="Add Place"
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          onPress={() => {
            navData.navigation.navigate("New Place");
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({});

export default PlacesListScreen;
