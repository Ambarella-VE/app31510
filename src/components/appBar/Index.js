import React from 'react';
import {
  View, 
  StyleSheet, 
  Text
} from 'react-native';
import { theme } from '../../constants/theme/Theme'


const Index = ({title}) => {
  return (
    <View style = {styles.view}>
      <Text style = {styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: theme.colors.dark.primary,
    height: 80
  },
  title: {
    fontSize: theme.text.title.large.fontSize,
    color: theme.colors.dark.onSurface,
    alignSelf: 'center',
    paddingTop: 20,
  },
  icon: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    width: 24,
    height: 24,
    color: '#FFF'
  }
})
export default Index;
