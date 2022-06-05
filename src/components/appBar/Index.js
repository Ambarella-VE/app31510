import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Text
} from 'react-native';
import { theme } from '../../constants/theme/Theme'

const Index = ({title}) => {
  return (
    <View style = {styles.view}>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: theme.colors.dark.backgroundColor,
  }
})

export default Index;
