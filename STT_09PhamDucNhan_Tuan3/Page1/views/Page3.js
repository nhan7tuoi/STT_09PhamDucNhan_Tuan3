
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Page3() {
  return (
    <View style={styles.container}>
        <Text style={{fontSize:60,fontWeight:'bold'}}>CODE</Text>
        <View style={styles.bodyText}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>VERIFICATION</Text>
        </View>
        <View style={styles.bodyTitle}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Enter ontime password sent on</Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>+849092605798</Text>
        </View>
        <View style={styles.bodyInput}>
        <TextInput style={{width:50,height:50,borderWidth:1,borderColor:'#000'}}></TextInput>
        <TextInput style={{width:50,height:50,borderWidth:1,borderColor:'#000'}}></TextInput>
        <TextInput style={{width:50,height:50,borderWidth:1,borderColor:'#000'}}></TextInput>
        <TextInput style={{width:50,height:50,borderWidth:1,borderColor:'#000'}}></TextInput>
        <TextInput style={{width:50,height:50,borderWidth:1,borderColor:'#000'}}></TextInput>
        <TextInput style={{width:50,height:50,borderWidth:1,borderColor:'#000'}}></TextInput>
        </View>
        <TouchableOpacity style={{width:310,height:45,backgroundColor:'#E3C000',marginTop:40,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:20,fontWeight:'bold',color:'#000'}}>VERIFY CODE</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'space-evenly',
    backgroundImage: "linear-gradient(to bottom , #fff, #00CCF9)",
    height: 700,
  },
  bodyText: {
    alignItems: 'center',
    justifyContent:'space-around'
  },
  bodyTitle: {
    alignItems: 'center',
  },
  bodyInput: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
