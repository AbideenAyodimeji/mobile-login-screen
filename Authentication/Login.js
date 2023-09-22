import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import Header from '../LoginComponents/header'
import LoginDetails from '../LoginComponents/LoginDetails'
import Footer from '../LoginComponents/footer'

function LoginScreen({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* header */}
        <Header navigation={navigation} />

        {/* login details */}
        <LoginDetails navigation={navigation} />

        {/* footer */}
        <Footer />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
})
