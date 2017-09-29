import React from 'react'

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const Header = ({text}) => (
    <View style={styles.header}>
      <Text style={styles.text}>
          {text}
      </Text>
    </View>
)

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 15,
    paddingTop: 35,
    height: 70
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  }
})


export default Header
