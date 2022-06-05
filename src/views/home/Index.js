import React from 'react';
import {View,
  StyleSheet, 
  StatusBar
} from 'react-native';
import { 
  InputBtn,
  AppBar
} from '../../components/index';
import { theme } from '../../constants/theme/Theme';

const Index = () => {

  const handleOnFocus = () => {

  }

  return (
    <View style = {styles.view}>
      <StatusBar
        animated
        translucent
        backgroundColor = {theme.colors.dark.primary}
      />
      <AppBar title="Tareas" />
      <InputBtn 
      inputLabel='Ingrese una tarea' 
      btnTitle='agregar'
      handleOnFocus={handleOnFocus}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view:{
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    width: '100%'
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
