import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';

type Props = StackScreenProps<RootStackParamList, 'mainscreen'>;

const Homepage: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Logo at the top */}
            <Image
                source={require('../img/Logo.png')}
                style={styles.logo}
            />

            <Text style={styles.title}>Welcome to Empowering the Nation</Text>
            <Text style={styles.description}>
                Welcome to Empowering the Nation! Since our launch in 2018, our mission has been to transform the lives of domestic workers and gardeners in Johannesburg. We understand that many have never had the opportunity to gain formal skills, unlike our parents and grandparents. That's why we offer practical training that opens doors. Our six-month and six-week courses are designed to help them become more skilled professionals, secure better jobs, and perhaps even start their own businesses. By joining our program, they gain valuable skills that not only improve their career prospects but also contribute positively to their community.
            </Text>

            {/* Navigation Buttons at the bottom */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('summaryofsixmonthscourse')}>
                    <Text style={styles.buttonText}>Six-Month{'\n'}Course Overview</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('summaryofsixweekscourse')}>
                    <Text style={styles.buttonText}>Six-Week{'\n'}Course Overview</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('calculatetotalfees')}>
                    <Text style={styles.buttonText}>Fee{'\n'}Calculation</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('contactdetails')}>
                    <Text style={styles.buttonText}>Contact{'\n'} Details</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10, 
    },
    button: {
        backgroundColor: '#333333',
        width: '23%', 
        height: 60,   
        borderRadius: 8,
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 14,
        textAlign: 'center', 
    },
});

export default Homepage;
