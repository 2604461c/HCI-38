import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { ExerciseModeProvider } from './contexts/ExerciseModeContext';
import LoginScreen from './Screens/LoginScreen';
import AccountDeletedScreen from './Screens/AccountDeletedScreen';
import ARScreen from './Screens/ARScreen';
import ChangeIntensityScreen from './Screens/ChangeIntensityScreen';
import ChangePasswordScreen from './Screens/ChangePasswordScreen';
import ChangeUIScreen from './Screens/ChangeUIScreen';
import ConfirmPasswordScreen from './Screens/ConfirmPasswordScreen';
import CyclingScreen from './Screens/CyclingScreen';
import HomeScreen from './Screens/HomeScreen';
import PasswordChangedScreen from './Screens/PasswordChangedScreen';
import RunningScreen from './Screens/RunningScreen';
import SettingsScreen from './Screens/SettingsScreen';
import SignUpScreen from './Screens/SignUpScreen';
import UIChoiceScreen from './Screens/UIChoiceScreen';
import WalkingScreen from './Screens/WalkingScreen';
import RouteInPogressHomeScreen from './Screens/RouteInProgressHomeScreen';
import 'expo-dev-client';

const Tab = createBottomTabNavigator();
export default function App() {
  return(
    <ExerciseModeProvider>
    <NavigationContainer>
    <Tab.Navigator 
    screenOptions={{
    headerShown: false
    }}>
            <Tab.Screen name ="Login" component={LoginScreen}
            options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' },
              tabBarVisible: false,
            }}
            />
            <Tab.Screen name ="AccountDeleted" component={AccountDeletedScreen} 
            options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' },
              tabBarVisible: false, 
            }}
            />
            <Tab.Screen name ="AR" component={ARScreen}
            options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' },
              tabBarVisible: false, 
            }}
            />
            <Tab.Screen name ="ChangeIntensity" component={ChangeIntensityScreen}
            options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' },
              tabBarVisible: false, 
            }}
            />
            <Tab.Screen name ="ChangePassword" component={ChangePasswordScreen}
            options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' },
              tabBarVisible: false, 
            }}
            />
            <Tab.Screen name ="ChangeUI" component={ChangeUIScreen}
            options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' },
              tabBarVisible: false, 
            }}
            />
            <Tab.Screen name ="ConfirmPassword" component={ConfirmPasswordScreen}
            options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' },
              tabBarVisible: false, 
            }}
            />
            <Tab.Screen name ="Cycling" component={CyclingScreen}
            options={{
              tabBarButton: () => null,
              tabBarStyle:{display: 'none'},
              tabBarVisible: false, 
            }}
            />
            <Tab.Screen name ="Home" component={HomeScreen}
            options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' },
              tabBarVisible: false, 
            }}
            />
            <Tab.Screen name ="PasswordChanged" component={PasswordChangedScreen}
            options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' },
              tabBarVisible: false, 
            }}
            />   
            <Tab.Screen name ="Running" component={RunningScreen}
            options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' },
              tabBarVisible: false, 
            }}
            />   
            <Tab.Screen name ="Settings" component={SettingsScreen}
            options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none'},
              tabBarVisible: false, 
            }}
            />  
            <Tab.Screen name ="SignUp" component={SignUpScreen}
            options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none'},
              tabBarVisible: false, 
            }}
            />  
            <Tab.Screen name ="UIChoice" component={UIChoiceScreen}
            options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none'},
              tabBarVisible: false, 
            }}
            />
            <Tab.Screen name ="Walking" component={WalkingScreen}
            options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none'},
              tabBarVisible: false, 
            }}
            />  
            <Tab.Screen name ="RouteInProgressHome" component={RouteInPogressHomeScreen}
            options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none'},
              tabBarVisible: false, 
            }}
            />  
        </Tab.Navigator>
    </NavigationContainer>  
    </ExerciseModeProvider>
);
}
