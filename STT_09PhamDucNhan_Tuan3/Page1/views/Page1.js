
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
export default function Page1() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.imgHearder} source={require('../assets/circle.png')} />
        <View style={styles.textCenter}>
          <Text style={styles.text1}>GROW</Text>
          <Text style={styles.text1}>YOUR BUSINESS</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.textBody}>
          <Text style={styles.text2}>We will help you to grow your business using</Text>
          <Text style={styles.text2}>online server</Text>
        </View>
        <View style={styles.btnBody}>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textBtn}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textBtn}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
          <Text style={styles.text3}>HOW WE WORK?</Text>
          </TouchableOpacity>
        </View>
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
    backgroundImage: "linear-gradient(to bottom , #00CCF9, #00CCF9)",
  },
  header: {
    height: '60%',
    alignItems: 'center',
    justifyContent: 'space-around'

  },
  body: {
    height: '40%',
    flex: 1,
    justifyContent: 'space-around',
  },
  imgHearder: {
    width: 140,
    height: 140,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#000',
  },
  textCenter: {
    alignItems: 'center',
  },
  textBody: {
    alignItems: 'center',
  },
  text1: {
    display: 'block',
    fontSize: 25,
    fontWeight: 'bold',
  },
  text2: {
    display: 'block',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  text3: {
    display: 'block',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    paddingTop: 10,
  },
  btnBody:{
    justifyContent: 'space-around',
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: 120,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#E3C000',
  },
  textBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    paddingTop: 10,
  },
});
