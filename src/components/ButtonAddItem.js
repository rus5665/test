import React, { PureComponent } from 'react'
import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { Colors } from '../utils/Colors'
import { windowWidth } from '../utils/common'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default class ButtonAddItem extends PureComponent {

  render() {

    const { onPress } = this.props

    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <FontAwesomeIcon
          style={styles.icon}
          icon={faPlus}
          size={windowWidth * .1}
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * .2,
    height: windowWidth * .2,
    borderRadius: windowWidth * .1,
    backgroundColor: Colors.red59,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  icon: {
    color: Colors.pinkF0,
  },
})
