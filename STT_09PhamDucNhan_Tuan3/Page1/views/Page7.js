
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native';

export default function Page7() {
  return (
    <View style={styles.container}>
        <Image style={{ width: 140, height: 140, }} source={require('../assets/eyePro.png')} />
        <View>
        <TextInput  style={{color:'#C4C4C4', backgroundColor: '#fff', width: 330, height: 54, borderBottomWidth:1, fontSize: 20, paddingLeft: 60, marginBottom: 50 }} placeholder='Please input user name' />
        <Image style={{ width: 38, height: 36, position: 'absolute', top: 8, left: 5 }} source={require('../assets/us.png')} />
        </View>
        <View>
        <TextInput style={{color:'#C4C4C4', backgroundColor: '#fff', width: 330, height: 54, borderBottomWidth:1, fontSize: 20, paddingLeft: 60, marginBottom: 50 }} placeholder='Please input user password' />
        <Image style={{ width: 38, height: 36, position: 'absolute', top: 8, left: 5 }} source={require('../assets/ps.png')} />
        </View>
        <TouchableOpacity style={{borderRadius:10, width: 330, height: 48, backgroundColor: '#386FFC', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>LOGIN</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30,width:'300px'}}>
          <TouchableOpacity>
          <Text style={{ fontSize: 18, color: '#000' ,fontWeight:'bold'}}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={{ fontSize: 18, color: '#000',fontWeight:'bold' }}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',marginTop:50}}>
          <View style={{width:80,height:1,borderBottomColor:'#000',borderWidth:1}}></View>
          <Text style={{fontSize:18,color:'#000',marginTop:10,fontWeight:'bold',marginTop:-13,paddingLeft:5,paddingRight:5}}>Or Login Methods</Text>
          <View style={{width:80,height:1,borderColor:'#000',borderWidth:1}}></View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around', width:'100%',marginTop:50}}>
          <TouchableOpacity>
          <Image style={{width:74,height:74}} source={require('../assets/add.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image style={{width:74,height:74}} source={require('../assets/wifi.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image style={{width:74,height:74}} source={require('../assets/facebook.png')}/>
          <Text style={{fontSize:70,fontWeight:'bold',color:'#fff',position:'absolute',right:23,top:-7}}>f</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:900,
  },
});
