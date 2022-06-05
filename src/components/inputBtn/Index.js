import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

const Index = ({btnTitle, handlePress}) => {
  return (
    <View style={styles.view}>
      <TextInput style= {styles.input} />
      <Button title={btnTitle} onPress={handlePress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%'
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    margin: 10,
    width: '70%'
  }
})

export default Index;
