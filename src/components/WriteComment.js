import React, { PureComponent } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native'
import { Colors } from '../utils/Colors'
import { windowWidth } from '../utils/common'
import ButtonCommon from './ButtonCommon'

export default class WriteComment extends PureComponent {

  state = {
    comment: ''
  }

  onChangeText = (text) => {
    this.setState({
      comment: text
    })
  }

  addComments = () => {
    if (true) {
      const { comment } = this.state
      const { id, addComment } = this.props
      if (comment.length > 0) {
        addComment(id, comment)
        this.setState({
          comment: ''
        })
      }
    }
  }

  render() {

    const { comment } = this.state

    console.log('props555555Item', this.props)
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.onChangeText(text)}
          placeholder={'New commet...'}
          value={comment}
        />
        <ButtonCommon onPress={this.addComments} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: windowWidth,
    position: 'absolute',
    bottom: 0,
    paddingVertical: windowWidth * .028,
    paddingHorizontal: windowWidth * .05,
    backgroundColor: Colors.greyE2,
  },
  input: {
    width: windowWidth * .7,
    height: windowWidth * .12,
    borderColor: 'gray',
    color: Colors.grey33,
    fontSize: windowWidth * .04,
    backgroundColor: Colors.white,
    borderColor: Colors.greyD8,
    borderRadius: windowWidth * .01,
    borderWidth: windowWidth * .004,
    paddingHorizontal: windowWidth * .02,
  },
})
