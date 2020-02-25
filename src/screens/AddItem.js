import React from 'react'
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { addItem } from '../actions'
import { Colors } from '../utils/Colors'
import { windowWidth } from '../utils/common'
import ButtonCommon from '../components/ButtonCommon'
import Header from '../components/Header'

class AddItem extends React.Component {

  state = {
    text: ''
  }

  onChangeText = (text) => {
    this.setState({
      text: text
    })
  }

  addItems = () => {
    const { text } = this.state
    if (text.length > 2) {
      const { addItem } = this.props
      addItem((new Date()).getTime(), text)
      this.setState({
        text: ''
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title={'Create new item'} onPress={() => this.props.navigation.goBack()} />
        <View style={styles.contentContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              multiline
              numberOfLines={4}
              onChangeText={text => this.onChangeText(text)}
              placeholder={'New Item'}
              value={this.state.text}
            />
            <ButtonCommon onPress={this.addItems} />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blueFF,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  contentContainer: {
    paddingVertical: windowWidth * .05,
  },
  input: {
    fontSize: windowWidth * .06,
    fontWeight: '300',
    color: Colors.black,
    width: windowWidth * .7,
    height: windowWidth * .15,
    borderColor: 'gray',
    color: Colors.black,
    backgroundColor: Colors.white,
    borderColor: Colors.blue64,
    borderBottomWidth: windowWidth * .004,
    paddingHorizontal: windowWidth * .03,
  },
})

export default connect(state => ({
  items: state.items
}), { addItem })(AddItem)
