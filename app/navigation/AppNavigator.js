import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen'
import AccountScreen from '../screens/AccountScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const AppNavigator = () =>{
    return(
      <Tab.Navigator>
        <Tab.Screen 
        name= "home" 
        component={HomeScreen} 
        options={{
          tabBarIcon:({size,color})=> <MaterialCommunityIcons name="home" size={size} color={color} />
        }}
        />

        <Tab.Screen 
        options={{
          tabBarIcon:({size,color})=><MaterialCommunityIcons name="folder-open-outline" size={size} color={color} />
        }}
        name= "File"    
         component={AccountScreen} />
         <Tab.Screen 
        options={{
          tabBarIcon:({size,color})=><MaterialCommunityIcons name="microsoft-sharepoint" size={size} color={color} />
        }}
        name= "Shared"
         component={AccountScreen} />
        <Tab.Screen 
        options={{
          tabBarIcon:({size,color})=><MaterialCommunityIcons name="account-outline" size={size} color={color} />
        }}
        name= "account"
         component={AccountScreen} />
         
      </Tab.Navigator>
    ) 
  }

export default AppNavigator;