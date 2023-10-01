
import * as React from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Page1 from './views/Page1';
import Page2 from './views/Page2';
import Page3 from './views/Page3';
import Page4 from './views/Page4';
import Page5 from './views/Page5';
import Page6 from './views/Page6';
import Page7 from './views/Page7';


const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: true,
  tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
  headerShown: false,
  tabBarStyle: {
    backgroundColor: '#fff',
  }
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        initialRouteName='Page1'
      >
        <Tab.Screen
          name="Page1" component={Page1} />
        <Tab.Screen name="Page2" component={Page2} />
        <Tab.Screen name="Page3" component={Page3} />
        <Tab.Screen name="Page4" component={Page4} />
        <Tab.Screen name="Page5" component={Page5} />
        <Tab.Screen name="Page6" component={Page6} />
        <Tab.Screen name="Page7" component={Page7} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}