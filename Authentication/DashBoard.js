import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import Header from '../DashBoard/header'
import Section from '../DashBoard/section'
import Footer from '../DashBoard/footer'

function DashBoard({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* header */}
        <Header navigation={navigation} />

        {/* section */}
        <Section navigation={navigation} />

        {/* footer */}
        <Footer navigation={navigation} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default DashBoard

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   marginHorizontal: 20,
  // },
})
