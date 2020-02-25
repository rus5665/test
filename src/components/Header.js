import React, { PureComponent } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { Colors } from '../utils/Colors'
import { windowWidth } from '../utils/common'
import ButtonCommon from './ButtonCommon'


export default class Comment extends PureComponent {

  render() {

    const { title, main, onPress } = this.props

    return (
      <View style={styles.container}>
        {
          main
            ?
            <>
              <Text style={styles.headerMainTitle}>Sayer</Text>
              <Text style={styles.headerDescription}>World's most used time waster</Text>
            </>
            :
            <View style={styles.headerWithButton}>
              <ButtonCommon onPress={onPress} icon={'arrow'} />
              <Text style={styles.headerTitle} numberOfLines={3}>{title}</Text>
            </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowWidth * .35,
    justifyContent: 'center',
    backgroundColor: Colors.darkBlue3C,
    paddingLeft: windowWidth * .045,
  },
  headerMainTitle: {
    fontSize: windowWidth * .1,
    fontWeight: '700',
    color: Colors.white,
  },
  headerTitle: {
    width: windowWidth * .77,
    fontSize: windowWidth * .06,
    fontWeight: '500',
    color: Colors.white,
    paddingLeft: windowWidth * .05,
  },
  headerDescription: {
    fontSize: windowWidth * .04,
    fontWeight: '300',
    color: Colors.white,
  },
  headerWithButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
