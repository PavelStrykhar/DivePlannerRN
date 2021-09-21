import React from 'react';
import { AsyncStorage } from 'react-native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const userInfo = {username: 'admin', password: '1234'}

export default class LoginScreen extends React.Component {
    // state={
    //   email:"",
    //   password:""
    // }

    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: ''
      }
    }

    render(){
      return (
        <View style={styles.container}>
          <Text style={styles.logo}>DivePlanner</Text>
          <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Login" 
              placeholderTextColor="#B0C4DE"
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}
              />
          </View>
          <View style={styles.inputView} >
            <TextInput  
              secureTextEntry
              style={styles.inputText}
              placeholder="Password..." 
              placeholderTextColor="#B0C4DE"
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              />
          </View>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={this._login}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.signup}>Brak konta, zapraszamy na naszą stronę</Text>
          </TouchableOpacity>
  
    
        </View>
      );
    }
    
    _login = async() => {
      if(userInfo.username === this.state.username && userInfo.password === this.state.password) {
        await AsyncStorage.setItem('IsLoggedIn', '1')
        this.props.navigation.navigate('News')
      } else {
        alert('username or password incorrect');
      }
    }

    _logout = async() => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Login');
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E6E6FA',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#4B0082",
      marginBottom:40
    },
    inputView:{
      width:"80%",
      backgroundColor:"#465881",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"white"
    },
    forgot:{
      color:"#4B0082",
      fontSize:11
    },
    forgot:{
      color:"#4B0082",
      fontSize:11
    },
    loginBtn:{
      width:"80%",
      backgroundColor:"#256fe6",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      color:"white"
    }
  });