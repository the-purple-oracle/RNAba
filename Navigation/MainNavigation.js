import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home/Home';
import Clients from '../Screens/Clients/Clients';
import Client from '../Screens/Client/Client';
import {Routes} from './Routes';
import Login from '../Screens/Login/Login';
import Register from '../Screens/Register/Register';
import AddClient from '../Screens/AddClient/AddClient';
import EditClient from '../Screens/EditClient/EditClient';
import TreatmentPlan from '../Screens/TreatmentPlan/TreatmentPlan';
import Session from '../Screens/Session/Session';
import SessionDetails from '../Screens/SessionDetails/SessionDetails';
import SignatureScreen from '../Screens/SignatureScreen/SignatureScreen';
const Stack = createStackNavigator();

export const NonAuthenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Register} component={Register} />
    </Stack.Navigator>
  );
};

export const Authenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Clients} component={Clients} />
      <Stack.Screen name={Routes.Client} component={Client} />
      <Stack.Screen name={Routes.AddClient} component={AddClient} />
      <Stack.Screen name={Routes.EditClient} component={EditClient} />
      <Stack.Screen name={Routes.TreatmentPlan} component={TreatmentPlan} />
      <Stack.Screen name={Routes.Session} component={Session} />
      <Stack.Screen name={Routes.SessionDetails} component={SessionDetails} />
      <Stack.Screen name={Routes.SignatureScreen} component={SignatureScreen} />
    </Stack.Navigator>
  );
};
