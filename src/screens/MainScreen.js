import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native'
import { connect } from 'react-redux'
import { removeItem } from '../actions'
import { Colors } from '../utils/Colors'
import { windowWidth } from '../utils/common'
import ItemMainScreen from '../components/ItemMainScreen'
import ButtonAddItem from '../components/ButtonAddItem'
import Header from '../components/Header'

class MainScreen extends React.Component {

  goToAddItem = () => { this.props.navigation.navigate('AddItem') }
  goToItem = ({ item }) => { this.props.navigation.navigate('Item', { name: item.id }) }
  renderListItem = ({ item }) => (
    <ItemMainScreen
      onPress={() => this.props.navigation.navigate('Item', { item })}
      title={item.title}
      numberItems={item.comments.length}
      removeItem={this.props.removeItem}
      id={item.id}
    />
  )
  renderFooterListButton = () => <ButtonAddItem onPress={this.goToAddItem} />
  renderListEmptyComponent = () => (
    <View style={styles.emptyList}>
      <Text>Your list is empty, add an item, please</Text>
    </View>
  )
  keyExtractor = item => item.id.toString()

  render() {

    const { items } = this.props
    console.log('props', this.props)

    return (
      <View style={styles.container}>
        <Header main />
        <FlatList
          data={items}
          renderItem={this.renderListItem}
          keyExtractor={this.keyExtractor}
          ListFooterComponent={this.renderFooterListButton}
          ListFooterComponentStyle={styles.listFooter}
          ListEmptyComponent={this.renderListEmptyComponent}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  listFooter: {
    alignItems: 'center',
    width: '100%',
    padding: windowWidth * .03,
  },
  emptyList: {
    paddingVertical: windowWidth * .05,
  }
})

export default connect(state => ({
  items: state.items
}), { removeItem })(MainScreen)

