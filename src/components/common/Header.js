import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle} >
      <Text style={textStyle} >{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    // shadowColor: '#1f8ded', for iOS only
    // shadowOffset: { width: 0, height: 10 },
    // shadowOpacity: 0.2,
    elevation: 2, // for android
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
});

export { Header };
