import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';

type Props = StackScreenProps<RootStackParamList, 'summaryofsixweekscourse'>;

const SummaryOfSixWeeksCourse: React.FC<Props> = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Six-Week Courses</Text>

            <View style={styles.course}>
                <Text style={styles.courseTitle}>Child Minding</Text>
                <Text style={styles.description}>
                    Learn how to care for children, including basics of child development and safety.
                </Text>
                <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('childmindingcourse')}>
                    <Text style={styles.courseButtonText}>View Details</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.course}>
                <Text style={styles.courseTitle}>Cooking</Text>
                <Text style={styles.description}>
                    Master the art of cooking with hands-on training in various cuisines.
                </Text>
                <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('cookingcourse')}>
                    <Text style={styles.courseButtonText}>View Details</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.course}>
                <Text style={styles.courseTitle}>Garden Maintenance</Text>
                <Text style={styles.description}>
                    Acquire skills for maintaining gardens, including planting and landscaping techniques.
                </Text>
                <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('gardenmaintenancecourse')}>
                    <Text style={styles.courseButtonText}>View Details</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
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
    courseTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
    },
    description: {
        fontSize: 16,
        marginVertical: 10,
        textAlign: 'center',
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

export default SummaryOfSixWeeksCourse;
