// import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import Header from '../RegisterComponents/header'
import Details from '../RegisterComponents/details'
import Footer from '../RegisterComponents/footer'

function RegisterScreen({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* header */}
        <Header navigation={navigation} />

        {/* Register details */}
        <Details navigation={navigation} />

        {/* footer */}
        <Footer />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
})
