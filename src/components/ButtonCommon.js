import React, { PureComponent } from 'react'
import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { Colors } from '../utils/Colors'
import { windowWidth } from '../utils/common'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default class ButtonCommon extends PureComponent {

  render() {

    const { icon, onPress } = this.props
    const greater = <FontAwesomeIcon style={styles.icon} icon={faGreaterThan} size={windowWidth * .05} />
    const arrow = <FontAwesomeIcon style={styles.icon} icon={faArrowLeft} size={windowWidth * .05} />

    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        {
          icon === 'arrow'
            ? arrow
            : greater
        }
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * .12,
    height: windowWidth * .12,
    borderRadius: windowWidth * .12,
    backgroundColor: Colors.blue64,
  },
  icon: {
    color: Colors.white,
  },
})
