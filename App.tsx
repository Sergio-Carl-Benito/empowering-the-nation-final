// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './screens/RootStackParams';

// Import your screen components
import Homepage from './screens/mainscreen'; 
import FirstAidCourse from './screens/firstaidcourse'; 
import CalculateTotalFees from './screens/calculatetotalfees'; 
import ChildMindingCourse from './screens/childmindingcourse';
import ContactDetails from './screens/contactdetails'; 
import GardenMaintenanceCourse from './screens/gardenmaintenancecourse'; 
import LandscapingCourse from './screens/landscapingcourse'; 
import CookingCourse from './screens/cookingcourse'; 
import LifeSkillCourse from './screens/lifeskillcourse'; 
import SewingCourse from './screens/sewingcourse'; 
import SummaryOfSixMonthsCourse from './screens/summaryofsixmonthscourse'; 
import SummaryOfSixWeeksCourse from './screens/summaryofsixweekscourse'; 

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: '#333333' },
                    headerTintColor: '#ffffff', 
                }}
            >
                <Stack.Screen name="mainscreen" component={Homepage} />
                <Stack.Screen name="firstaidcourse" component={FirstAidCourse} />
                <Stack.Screen name="calculatetotalfees" component={CalculateTotalFees} />
                <Stack.Screen name="childmindingcourse" component={ChildMindingCourse} />
                <Stack.Screen name="contactdetails" component={ContactDetails} />
                <Stack.Screen name="gardenmaintenancecourse" component={GardenMaintenanceCourse} />
                <Stack.Screen name="landscapingcourse" component={LandscapingCourse} />
                <Stack.Screen name="cookingcourse" component={CookingCourse} />
                <Stack.Screen name="lifeskillcourse" component={LifeSkillCourse} />
                <Stack.Screen name="sewingcourse" component={SewingCourse} />
                <Stack.Screen name="summaryofsixmonthscourse" component={SummaryOfSixMonthsCourse} />
                <Stack.Screen name="summaryofsixweekscourse" component={SummaryOfSixWeeksCourse} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
