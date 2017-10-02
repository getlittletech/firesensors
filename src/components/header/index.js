import React from 'react'

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { PropTypes } from 'prop-types';

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

Header.propTypes = {
  text: PropTypes.string.isRequired
}


export default Header
