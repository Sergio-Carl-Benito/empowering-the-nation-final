// mainscreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';

type Props = StackScreenProps<RootStackParamList, 'mainscreen'>;

const Homepage: React.FC<Props> = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Logo at the top */}
            <Image
                source={require('../img/Logo.png')} // Update the path to your logo image
                style={styles.logo}
            />

            <Text style={styles.title}>Welcome to Empowering the Nation</Text>
            <Text style={styles.description}>
                Welcome to Empowering the Nation! Since our launch in 2018, our mission has been to transform the lives of domestic workers and gardeners in Johannesburg. We understand that many have never had the opportunity to gain formal skills, unlike our parents and grandparents. That's why we offer practical training that opens doors. Our six-month and six-week courses are designed to help them become more skilled professionals, secure better jobs, and perhaps even start their own businesses. By joining our program, they gain valuable skills that not only improve their career prospects but also contribute positively to their community.
            </Text>

            {/* Navigation Buttons */}
            <Button
                title="Home"
                onPress={() => navigation.navigate('mainscreen')}
            />
            <Button
                title="Six-Month Course Overview"
                onPress={() => navigation.navigate('summaryofsixmonthscourse')}
            />
            <Button
                title="Six-Week Course Overview"
                onPress={() => navigation.navigate('summaryofsixweekscourse')}
            />
            <Button
                title="Fee Calculation"
                onPress={() => navigation.navigate('calculatetotalfees')}
            />
            <Button
                title="Contact"
                onPress={() => navigation.navigate('contactdetails')}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 200, // Adjust width as needed
        height: 200, // Adjust height as needed
        resizeMode: 'contain',
        marginBottom: 20, // Space between logo and title
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center', // Center text for better readability
    },
});

export default Homepage;
