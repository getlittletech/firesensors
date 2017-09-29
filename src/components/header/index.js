import React from 'react'

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const Header = ({text}) => (
    <View>
      <Text style={styles.header}>
          {text}
      </Text>
    </View>
)

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    
  }
})


export default Header
