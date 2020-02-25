import React, { PureComponent } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import Swipeout from 'react-native-swipeout'
import { Colors } from '../utils/Colors'
import { windowWidth } from '../utils/common'

export default class ItemMainScreen extends PureComponent {

  renderDeleteComponent = () => (
    <View style={styles.deleteContainer}>
      <Text style={styles.deleteButtonTitle}>Delete</Text>
    </View>
  )

  render() {

    const {
      title,
      numberItems,
      onPress,
      id,
      removeItem,
    } = this.props

    let swipeBtns = [
      {
        component: (
          <View style={styles.deleteContainer}>
            <Text style={styles.deleteButtonTitle}>Delete</Text>
          </View>
        ),
        underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
        onPress: () => removeItem(id)
      }
    ]

    return (
      <Swipeout
        right={swipeBtns}
        autoClose={true}
        backgroundColor='transparent'
        buttonWidth={windowWidth * .3}
      >
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <Text style={styles.itemTitle} numberOfLines={1}>{title}</Text>
          <View style={styles.numberItems}>

            <Text style={styles.textNumberItem}>{numberItems}</Text>
          </View>
        </TouchableOpacity>
      </Swipeout>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: windowWidth,
    paddingHorizontal: windowWidth * .05,
    paddingVertical: windowWidth * .075,
    borderBottomColor: Colors.greyE2,
    borderBottomWidth: windowWidth * .001,
    borderStyle: 'solid',
  },
  numberItems: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * .12,
    height: windowWidth * .12,
    borderRadius: windowWidth * .12,
    backgroundColor: Colors.blue64,
  },
  textNumberItem: {
    fontSize: windowWidth * .06,
    fontWeight: '700',
    color: Colors.white,
  },
  itemTitle: {
    fontSize: windowWidth * .055,
    width: windowWidth * .7,
    fontWeight: '600',
    color: Colors.grey3E,
  },
  deleteContainer: {
    height: '100%',
    backgroundColor: Colors.red59,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonTitle: {
    fontSize: windowWidth * .06,
    fontWeight: '500',
    color: Colors.white,
  },
})
