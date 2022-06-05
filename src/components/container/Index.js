import React from 'react';
import {View} from 'react-native';

const Index = ({children,styles}) => {
  return (
    <View style={styles}>
      {children}
    </View>
  );
}

export default Index;
