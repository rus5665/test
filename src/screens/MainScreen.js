import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { Colors } from '../utils/Colors'
import { windowWidth } from '../utils/common'
import { Header } from 'react-native/Libraries/NewAppScreen'


export default class MainScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Sayer</Text>
          <Text style={styles.headerDescription}>World's most used time waster</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blueFF,
    paddingTop: windowWidth * .10,
  },
  header: {
    width: windowWidth,
    height: windowWidth * .35,
    justifyContent: 'center',
    backgroundColor: Colors.darkBlue3C,
    paddingLeft: windowWidth * .045,
  },
  headerTitle: {
    fontSize: windowWidth * .1,
    fontWeight: '700',
    color: Colors.white,
  },
  headerDescription: {
    fontSize: windowWidth * .04,
    fontWeight: '300',
    color: Colors.white,
  },
})
