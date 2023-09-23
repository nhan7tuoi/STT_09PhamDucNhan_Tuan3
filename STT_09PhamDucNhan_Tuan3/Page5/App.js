import RadioForm, { } from 'react-native-simple-radio-button';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 50 }}>REGISTER</Text>
      <TextInput style={{ marginTop: 30, backgroundColor: '#CAE1d1', width: 330, height: 54, borderWidth: 1, borderColor: '#000', fontSize: 20, paddingLeft: 20, marginBottom: 50 }} placeholder='Name' />
      <TextInput style={{ backgroundColor: '#CAE1d1', width: 330, height: 54, borderWidth: 1, borderColor: '#000', fontSize: 20, paddingLeft: 20, marginBottom: 50 }} placeholder='Phone' />
      <TextInput style={{ backgroundColor: '#CAE1d1', width: 330, height: 54, borderWidth: 1, borderColor: '#000', fontSize: 20, paddingLeft: 20, marginBottom: 50 }} placeholder='Email' />
      <View>
        <TextInput style={{ backgroundColor: '#CAE1d1', width: 330, height: 54, borderWidth: 1, borderColor: '#000', fontSize: 20, paddingLeft: 20, marginBottom: 50 }} placeholder='Password' />
        <Image style={{ width: 38, height: 36, position: 'absolute', right: 10, top: 10 }} source={require('./assets/eye.png')} />
      </View>

      <TextInput style={{ backgroundColor: '#CAE1d1', width: 330, height: 54, borderWidth: 1, borderColor: '#000', fontSize: 20, paddingLeft: 20, marginBottom: 20 }} placeholder='BirthDay' />
      <View style={{ flexDirection: 'row', width: 300 }}>
        <RadioForm
          radio_props={radio_props1}
          initial={1}
          formHorizontal={true}
          buttonColor={'#000'}
          selectedButtonColor={'#000'}
        />
        <View style={{ width: 50 }}></View>
        <RadioForm
          radio_props={radio_props2}
          initial={0}
          formHorizontal={true}
          buttonColor={'#000'}
          selectedButtonColor={'#000'}
        />
      </View>
      <TouchableOpacity style={{ width: 310, height: 45, backgroundColor: '#E53935', marginTop: 20, marginBottom: 20, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>REGISTER</Text>
      </TouchableOpacity>
      <Text style={{fontSize:14, fontWeight: '500', marginBottom: 80 }}>When you agree to terms and conditions</Text>
    </View>
  );
}
var radio_props1 = [
  { label: 'Male', value: 0 },
];
var radio_props2 = [
  { label: 'Female', value: 0 },
];
// IP 11PRM
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8efdf',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
