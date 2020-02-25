import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native'
import { connect } from 'react-redux'
import { addComment } from '../actions'
import { Colors } from '../utils/Colors'
import { windowWidth } from '../utils/common'
import Comment from '../components/Comment'
import WriteComment from '../components/WriteComment'
import Header from '../components/Header'

class Item extends React.Component {

  renderComment = ({ item }) => (
    <Comment
      comment={item}
    />
  )
  renderListEmptyComponent = () => (
    <View style={styles.emptyList}>
      <Text>Your item is empty</Text>
    </View>
  )
  keyExtractor = ({ item, index }) => index

  render() {

    const { items, addComment } = this.props
    const { id, title } = this.props.navigation.state.params.item
    const comments = items.find(items => items.id === id).comments

    return (
      <View style={styles.container}>
        <Header title={title} onPress={() => this.props.navigation.goBack()} />
        <FlatList
          data={comments}
          renderItem={this.renderComment}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.renderListEmptyComponent}
        />
        <View style={styles.emptySpace} />
        <WriteComment addComment={addComment} id={id} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blueFF,
  },
  emptySpace: {
    height: windowWidth * .18,
    bottom: 0
  },
  emptyList: {
    padding: windowWidth * .05,
  }
})

export default connect(state => ({
  items: state.items
}), { addComment })(Item)
