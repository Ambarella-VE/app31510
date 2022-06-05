import React from 'react';
import {
  StyleSheet, 
  TextInput, 
  Button,
  Dimensions,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback 
} from 'react-native';
import { theme } from '../../constants/theme/Theme';

const Index = ({
  inputLabel,
  btnTitle, 
  handleOnFocus, 
  handleOnPress}) => {
  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback>
        <SafeAreaView style={styles.view}>
          <TextInput
            style= {styles.input} 
            placeholder={inputLabel}
            placeholderTextColor={theme.colors.dark.primary}
            onFocus={handleOnFocus}
          />
          <Button 
            title={btnTitle} 
            onPress={handleOnPress} 
            style={styles.button}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 92,
  },
  input: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.dark.primary,
    margin: 8,
    height: 56,
    width: Dimensions.get('window').width - 128,
    paddingHorizontal: 16,
    color: theme.colors.dark.onSurface,
  },
  button: {
    height: 56,
    backgroundColor: theme.colors.dark.primary,
    margin: 0,
    padding: 0
  }
})

export default Index;
