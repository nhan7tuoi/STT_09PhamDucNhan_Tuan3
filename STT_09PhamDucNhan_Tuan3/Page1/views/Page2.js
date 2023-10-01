
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Page2() {
  return (
    <View style={styles.container}>
        <Image style={{ width: 105, height: 120}} source={require('../assets/lock.png')} />
        <View style={styles.bodyText}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>FORGET</Text>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>PASSWORD</Text>
        </View>
        <View style={styles.bodyTitle}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Provide your account’s email for which you</Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>want to reset your password</Text>
        </View>
        <View style={styles.bodyInput}>
          <Image style={{width:48,height:45}} source={require('../assets/email.png')}/>
          <TextInput style={{width:260,height:45,backgroundColor:'#C4C4C4'}} placeholder="Email" />
        </View>
        <TouchableOpacity style={{width:310,height:45,backgroundColor:'#E3C000',marginTop:40,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:20,fontWeight:'bold',color:'#000'}}>NEXT</Text>
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
