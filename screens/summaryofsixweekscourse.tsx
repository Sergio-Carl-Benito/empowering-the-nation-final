// SummaryOfSixWeeksCourse.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';

type Props = StackScreenProps<RootStackParamList, 'summaryofsixweekscourse'>;

const SummaryOfSixWeeksCourse: React.FC<Props> = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Six-Week Courses</Text>

            <Text style={styles.courseTitle}>Child Minding</Text>
            <Text style={styles.description}>
                Learn how to care for children, including basics of child development and safety.
            </Text>
            <Button
                title="View Details"
                onPress={() => navigation.navigate('childmindingcourse')}
            />

            <Text style={styles.courseTitle}>Cooking</Text>
            <Text style={styles.description}>
                Master the art of cooking with hands-on training in various cuisines.
            </Text>
            <Button
                title="View Details"
                onPress={() => navigation.navigate('cookingcourse')}
            />

            <Text style={styles.courseTitle}>Garden Maintenance</Text>
            <Text style={styles.description}>
                Acquire skills for maintaining gardens, including planting and landscaping techniques.
            </Text>
            <Button
                title="View Details"
                onPress={() => navigation.navigate('gardenmaintenancecourse')}
            />
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
});

export default SummaryOfSixWeeksCourse;
