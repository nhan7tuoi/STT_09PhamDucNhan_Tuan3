import RadioForm, { } from 'react-native-simple-radio-button';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function Page5() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 50 }}>REGISTER</Text>
      <TextInput style={{ marginTop: 30, backgroundColor: '#CAE1d1', width: 330, height: 54, borderWidth: 1, borderColor: '#000', fontSize: 20, paddingLeft: 20, marginBottom: 50 }} placeholder='Name' />
      <TextInput style={{ backgroundColor: '#CAE1d1', width: 330, height: 54, borderWidth: 1, borderColor: '#000', fontSize: 20, paddingLeft: 20, marginBottom: 50 }} placeholder='Phone' />
      <TextInput style={{ backgroundColor: '#CAE1d1', width: 330, height: 54, borderWidth: 1, borderColor: '#000', fontSize: 20, paddingLeft: 20, marginBottom: 50 }} placeholder='Email' />
      <View>
        <TextInput style={{ backgroundColor: '#CAE1d1', width: 330, height: 40, borderWidth: 1, borderColor: '#000', fontSize: 20, paddingLeft: 20, marginBottom: 50 }} placeholder='Password' />
        <TouchableOpacity style={{position: 'absolute', right: 10, top: 0 }}>
        <Image style={{ width: 38, height: 36}} source={require('../assets/eye.png')} />
        </TouchableOpacity>
      </View>

      <TextInput style={{ backgroundColor: '#CAE1d1', width: 330, height: 54, borderWidth: 1, borderColor: '#000', fontSize: 20, paddingLeft: 20, marginBottom: 20 }} placeholder='BirthDay' />
      <View style={{ flexDirection: 'row', width: 300 }}>
        <RadioForm
          radio_props={radio_props1}
          formHorizontal={true}
          buttonColor={'#000'}
          selectedButtonColor={'#000'}
          labelStyle={{ fontSize: 20, marginRight: 20 }}
          onPress={(value) => {this.setState({value:value})}}
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
  {label: 'Male', value: 0 },
  {label: 'Female', value: 1 }
];



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8efdf',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
