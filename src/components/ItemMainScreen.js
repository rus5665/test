// import React, { PureComponent } from 'react'
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native'
// import { Colors } from '../utils/Colors'
// import { windowWidth } from '../utils/common'
// import { withNavigation } from 'react-navigation'

// class ItemMainScreen extends PureComponent {

//   goToAddNewItem = () => {
//     this.props.navigation.navigate('AddNewDevice')
//   }

//   render() {
//     return (
//       <TouchableOpacity style={styles.container} onPress={this.goToAddNewItem}>
//         <Text>Text</Text>
//         <View style={styles.numberItems}>

//         </View>
//       </TouchableOpacity>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingTop: windowWidth * .05,
//   },
//   numberItems: {
//     width: windowWidth * .03,
//     height: windowWidth * .03,
//     borderRadius: windowWidth * .03,
//     backgroundColor: Colors.da
//   },
// })

// export default withNavigation(AddDevice)
