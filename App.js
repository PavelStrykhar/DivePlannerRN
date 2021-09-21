import React, { Component }  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { gStyle } from './styles/style';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import MainStack from './navigate';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-common';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
//import { MaterialIcons } from '@expo/veсtor-icons';
import {createAppContainer, DrawerNavigator, StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import MainScreen from "./src/screens/MainScreen";
import PadiScreen from "./src/screens/PadiScreen";
import ProfilScreen from "./src/screens/ProfilScreen";
import PlannerScreen from "./src/screens/PlannerScreen";
import VotingScreen from "./src/screens/VotingScreen";
import ContactsScreen from "./src/screens/ContactsScreen";
import AboutUsScreen from "./src/screens/AboutUsScreen";
import LoginScreen from './src/screens/LoginScreen';

import { textColor } from 'styled-system';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';



// const Drawer = createDrawerNavigator();

const fonts = () => Font.loadAsync({
  'Roboto': require('native-base/Fonts/Roboto.ttf'),
  'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
})

// const client = new ApolloClient({
//   uri: 'http://989ed68d3bb4.ngrok.io/graphqlll/'
// })

// export default function App() {
//   return (
//     <NavigationContainer>
//       {/* <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} /> */}
//       <ApolloProvider client={client}>
//       <Drawer.Navigator
//         initialRouteName="dOne"
//         drawerStyle={{
//           backgroundColor: '#3366ff',
//         }}
//         drawerContentOptions={{
//           activeTintColor: '#fff', /* font color for active screen label */
//           activeBackgroundColor: '#68f', /* bg color for active screen */
//           inactiveTintColor: '#fff', /* Font color for inactive screens' labels */
//           labelStyle: {
//             fontSize: 18,
//             marginLeft: 10,
//           }
//         }}
//       >
//         <Drawer.Screen name="Strona główna" component={MainScreen} />
//         <Drawer.Screen name="Klasyfikacja PADI" component={PadiScreen} title='News'/>
//         {/* <Drawer.Screen name="ProfilScreen" component={ProfilScreen} /> */}
//         {/* <Drawer.Screen name="PlannerScreen" component={PlannerScreen} /> */}
//         <Drawer.Screen name="Wyprawy" component={VotingScreen} />
//         <Drawer.Screen name="Kontakty" component={ContactsScreen} />
//         <Drawer.Screen name="O Nas" component={AboutUsScreen} />
//         <Drawer.Screen name="LoginScreen" component={LoginScreen} />  
        
//       </Drawer.Navigator>
//       </ApolloProvider> 
//       <StatusBar style="auto"/>
      
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//     textAlign: 'center'
//   },
//   icon: {
//     position: 'absolute',
//     left: 16
//   }
// });

const NewsStack = createStackNavigator();
const PadiStack = createStackNavigator();
const LoginStack = createStackNavigator();
const AboutUsStack = createStackNavigator();
const Drawer = createDrawerNavigator();


const NewsStackScreen = ({navigation}) => (
  
  <NewsStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#256fe6',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
      }}
      >
        <NewsStack.Screen name="Main" component={MainScreen} 
        options={{ 
          title:'News',
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={35}
            backgroundColor="#256fe6" onPress={() => navigation.openDrawer()}>
            </Icon.Button>
          ) }} />
  </NewsStack.Navigator>
    
);

const PadiStackScreen = ({navigation}) => (
  
  <PadiStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#256fe6',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
      }}
      >
      <PadiStack.Screen name="Padi" component={PadiScreen} 
      options={{ 
        title:'PADI',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={35}
          backgroundColor="#256fe6" onPress={() => navigation.openDrawer()}>
          </Icon.Button>
        ) }} /> 
        
  </PadiStack.Navigator>
    
);

const AboutUsStackScreen = ({navigation}) => (
  
  <AboutUsStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#256fe6',
        
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
      }}
      >
      <AboutUsStack.Screen name="AboutUs" component={AboutUsScreen} 
      options={{ 
        title:'News',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={35}
          backgroundColor="#256fe6" onPress={() => navigation.openDrawer()}>
          </Icon.Button>
        ) }} /> 
        
  </AboutUsStack.Navigator>
    
);

const LoginStackScreen = ({navigation}) => (
  
  <LoginStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#256fe6',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
      }}
      >
      <LoginStack.Screen name="Padi" component={LoginScreen} 
      options={{ 
        title:'DivePlanner',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={35}
          backgroundColor="#256fe6" onPress={() => navigation.openDrawer()}>
          </Icon.Button>
        ) }} /> 
        
  </LoginStack.Navigator>
    
);

const App = () => {
  return (
    <NavigationContainer>
      
      <Drawer.Navigator initialRouteName="Home"
      initialRouteName="dOne"
        drawerStyle={{
          backgroundColor: '#3366ff',
        }}
        drawerContentOptions={{
          activeTintColor: '#fff', /* font color for active screen label */
          activeBackgroundColor: '#68f', /* bg color for active screen */
          inactiveTintColor: '#fff', /* Font color for inactive screens' labels */
          labelStyle: {
            fontSize: 18,
            marginLeft: 10,
          }
        }}>
        <Drawer.Screen name="News" component={NewsStackScreen}/>
        <Drawer.Screen name="PADI" component={PadiStackScreen}/>
        <Drawer.Screen name="AboutUs" component={AboutUsStackScreen}/>
        <Drawer.Screen name="Login" component={LoginStackScreen}/>
      </Drawer.Navigator>
      
    </NavigationContainer>
  )
}
export default App;