import React from 'react';
import {View,
  StyleSheet, 
  Text,
  StatusBar
} from 'react-native';
import { 
  InputBtn,
  AppBar
} from '../../components/index';

const Index = () => {
  return (
    <View style = {styles.view}>
      <AppBar title="Tareas" />
      <InputBtn btnTitle='agregar' />
    </View>
  );
}

const styles = StyleSheet.create({
  view:{
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    width: '100%',
    height: '88px'
  }
  ,
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000'
  }
})

export default Index;
