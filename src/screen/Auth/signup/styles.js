import {StyleSheet,Dimensions} from 'react-native';
import {scale, moderateScale} from 'react-native-size-matters';
import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary},
  font: {PrimaryF},
} = Config;
const width = Dimensions.get('window').width
export const styles = StyleSheet.create({
  upperButton: {
    flexDirection: 'row',
    width: moderateScale(100),
    height: scale(35),
    backgroundColor: Black,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(40),
  },
  text1: {
    color: 'white',
    paddingRight: moderateScale(5),
  },
  icon: {
    marginRight: moderateScale(20),
  },
  text2: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
    paddingTop: moderateScale(30),
    fontFamily: PrimaryF,
    color:'white'
  },
  container: {
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20),
    backgroundColor: Primary,
    flex: 1,
  },
  text3: {
    fontSize: 15,
    fontWeight: '200',
    letterSpacing: 1,
    paddingTop: moderateScale(20),
    fontFamily: PrimaryF,
    color:'white'
  },
  text4: {
    fontSize: 15,
    fontWeight: '200',
    letterSpacing: 1,
    paddingTop: moderateScale(2),
    fontFamily: PrimaryF,
  },
  textInput: {
    borderBottomWidth: 0.3,
    paddingTop: moderateScale(30),
    borderBottomColor: 'white',
  },
  inputContainer: {
    paddingTop: moderateScale(10),
  },
  submit: {
    paddingTop: moderateScale(70),
  },
  google: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
  },
  textabove: {
    color: LightGrey,
    fontFamily: PrimaryF,
  },
  error: {
    color: 'red',
  },
  googleButton: {
    marginTop: moderateScale(20),
    padding: moderateScale(10),
  },
  modal:{
    right: 0,
    bottom: 0,
    position: 'absolute',
    height: 60,
    width: width,
    backgroundColor: 'white',
  }
});

