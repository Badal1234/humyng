import React, {createRef, useRef, useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Button,
  Linking,
  Alert,
  ActivityIndicator,
} from 'react-native';

import * as userAuthActions from '@Actions/user.authAction';
import Button1 from '@Component/Button';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Amplify, {Auth, API, Hub} from 'aws-amplify';
import {styles} from './styles';
const Signin = ({navigation, setUserLoginData, username}) => {
  var inputRef = createRef();
  var input2 = createRef();
  var submit = useRef();
  const [email, set_email] = useState('');
  const [pass, set_pass] = useState('');
  const [run, set_run] = useState(false);
  const [loading, set_loading] = useState(false);

  const login = () => {
    set_loading(true)
    const a = email.replace(/\s+/g, '');
    console.log(a);
    try {
      Auth.signIn(a, pass).then(async data => {
        const user = await Auth.currentAuthenticatedUser();
        setUserLoginData({
          username: user.username,
          userPoolId: user.pool.userPoolId,
          isLogedIn: true,
          token: user.signInUserSession.accessToken.jwtToken,
        });
        set_loading(false)
        navigation.navigate('EnterScreen');
      }).catch((err)=>console.log(err))
    } catch (error) {
      set_loading(false)
      Alert.alert(error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
      keyboardVerticalOffset={20}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.upperButton}>
          <View style={styles.icon}>
            <Icon name="chevron-left" color={'white'} size={20} />
          </View>
          <Text style={styles.text1}>BACK</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.text2}>Welcome</Text>
          <Text style={styles.text3}>
            Enter Your Information Below to Login
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <Text>{}</Text>
          <TextInput
            style={styles.textInput}
            placeholder={'E-mail'}
            returnKeyType="next"
            
            onSubmitEditing={() => {
              const a = email.match(
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              );
              console.log(a[0]);
            }}
            onChangeText={text => set_email(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>{}</Text>
          <TextInput
            style={styles.textInput}
            placeholder={'Password'}
            returnKeyType={'next'}
            ref={input => (inputRef = input)}
            onSubmitEditing={() => input2.focus()}
            onChangeText={text => set_pass(text)}
            textContentType={'password'}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.lower}>
          <View>
            <Text>Forgot Passsword</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              const a = email.replace(/\s+/g, '');
              Auth.forgotPassword(a).then(() => navigation.navigate('Verify'));
            }}>
            <Text style={styles.text}>Click Here</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.submit}>
          <Button1 text={'SIGNin'} ref={submit} onPress={() => login()} indicator={loading}/>
        </View>
        <View style={styles.lower}>
          <View>
            <Text>Do not have a account</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.text}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = state => {
  return {
    uid: state.auth.uid,
    username: state.auth.username,
  };
};

const mapDispatchToProp = dispatch => ({
  setUserLoginData: userData =>
    dispatch(userAuthActions.setUserLoginData(userData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(Signin);
