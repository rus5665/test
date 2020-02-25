import React, { PureComponent } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { Colors } from '../utils/Colors'
import { windowWidth } from '../utils/common'


export default class Comment extends PureComponent {

  render() {

    const { comment } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.avatar} />
        <View style={styles.commentContainer}>
          <Text style={styles.commentText}>{comment}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: windowWidth * .075,
    paddingHorizontal: windowWidth * .05,
    borderBottomColor: Colors.greyE2,
    borderBottomWidth: windowWidth * .001,
    borderStyle: 'solid',
  },
  avatar: {
    width: windowWidth * .15,
    height: windowWidth * .15,
    justifyContent: 'flex-start',
    backgroundColor: Colors.red59,
  },
  commentContainer: {
    width: windowWidth * .8,
    paddingHorizontal: windowWidth * .05,
  },
  commentText: {
    fontSize: windowWidth * .04,
    fontWeight: '500',
    color: Colors.black,
  },
})
