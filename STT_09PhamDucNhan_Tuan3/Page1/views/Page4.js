
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

export default function Page4() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>LOGIN</Text>
        </View>
        <View style={styles.headerInput}>
          <TextInput style={{ width: 330, height: 54, borderWidth: 1, borderColor: '#000', fontSize: 20, paddingLeft: 20 ,marginBottom:50}} placeholder='Email' />
          <View>
            <TextInput style={{ width: 330, height: 54, borderWidth: 1, borderColor: '#000', fontSize: 20, paddingLeft: 20 }} placeholder='Password' />
            <Image style={{ width: 38, height: 36, position: 'absolute', right: 10, top: 10 }} source={require('../assets/eye.png')} />
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={{ width: 330, height: 45, backgroundColor: '#E53935', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 15, textAlign: 'center' }}>When you agree to terms and aonditions</Text>
        <Text style={{ fontSize: 15, textAlign: 'center', color: '#5D25FA' }}>For got your password?</Text>
        <Text style={{ fontSize: 15, textAlign: 'center' }}>Or login with</Text>
      </View>
      <View style={styles.footer}>
        <Image style={{ width: 325, height: 48, borderRightWidth: 1, borderColor: '#0680F1' }} source={require('../assets/footer.png')} />
        <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#fff', position: 'absolute', top: 50, left: 40 }}>f</Text>
        <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#fff', position: 'absolute', top: 50, left: 150 }}>Z</Text>
        <Image style={{ width: 32, height: 32, position: 'absolute', top: 60, left: 260 }} source={require('../assets/icongg.png')} />
      </View>
    </View>
  );
}
//Iphone 11pro max
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8efdf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height:'50%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  headerInput: {
    alignItems: 'space-around',

  },
  body : {
    height:'30%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  footer : {
    height:'20%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
