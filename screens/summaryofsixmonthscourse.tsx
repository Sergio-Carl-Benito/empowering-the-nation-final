import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';

type Props = StackScreenProps<RootStackParamList, 'summaryofsixmonthscourse'>;

const SummaryOfSixMonthsCourse: React.FC<Props> = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Six-Month Courses</Text>
            
            <View style={styles.course}>
                <Text style={styles.subtitle}>First Aid</Text>
                <Text style={styles.description}>Learn the basics of first aid to manage emergencies.</Text>
                <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('firstaidcourse')}>
                    <Text style={styles.courseButtonText}>View Details</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.course}>
                <Text style={styles.subtitle}>Sewing</Text>
                <Text style={styles.description}>Master sewing for repairs and clothing creation.</Text>
                <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('sewingcourse')}>
                    <Text style={styles.courseButtonText}>View Details</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.course}>
                <Text style={styles.subtitle}>Landscaping</Text>
                <Text style={styles.description}>Develop skills for designing and maintaining gardens.</Text>
                <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('landscapingcourse')}>
                    <Text style={styles.courseButtonText}>View Details</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.course}>
                <Text style={styles.subtitle}>Life Skills</Text>
                <Text style={styles.description}>Acquire essential skills for navigating daily life.</Text>
                <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('lifeskillcourse')}>
                    <Text style={styles.courseButtonText}>View Details</Text>
                </TouchableOpacity>
            </View>
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    course: {
        marginBottom: 20,
        alignItems: 'center',
        width: '100%',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 10,
    },
    courseButton: {
        backgroundColor: '#333333', // Button color
        width: '100%',
        height: 60,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    courseButtonText: {
        color: '#ffffff', // Button text color
        fontSize: 16,
        textAlign: 'center',
    },
});

export default SummaryOfSixMonthsCourse;