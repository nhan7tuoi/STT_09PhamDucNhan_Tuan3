
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: '700',marginRight:200 }}>LOGIN</Text>
      <View>
        <View>
          <TextInput style={{ backgroundColor: '#debe3c', width: 330, height: 54, borderWidth: 1, borderColor: '#000', fontSize: 20, paddingLeft: 50, marginBottom: 50 }} placeholder='Name' />
          <Image style={{ width: 38, height: 36, position: 'absolute', top: 8, left: 5 }} source={require('./assets/user.png')} />
        </View>
        <View>
          <TextInput style={{ backgroundColor: '#debe3c', width: 330, height: 54, borderWidth: 1, borderColor: '#000', fontSize: 20, paddingLeft: 50}} placeholder='Password' />
          <Image style={{ width: 38, height: 36, position: 'absolute', top: 8, left: 5 }} source={require('./assets/pass.png')} />
          <Image style={{ width: 38, height: 36, position: 'absolute', right: 10, top: 10 }} source={require('./assets/eye1.png')} />
        </View>
      </View>
      <TouchableOpacity style={{ width: 330, height: 45, backgroundColor: '#000', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 80 }}>CREATE ACCOUNT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4c500',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
