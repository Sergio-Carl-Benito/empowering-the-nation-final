// SummaryOfSixMonthsCourse.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
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
                <Button title="View Details" onPress={() => navigation.navigate('firstaidcourse')} />
            </View>

            <View style={styles.course}>
                <Text style={styles.subtitle}>Sewing</Text>
                <Text style={styles.description}>Master sewing for repairs and clothing creation.</Text>
                <Button title="View Details" onPress={() => navigation.navigate('sewingcourse')} />
            </View>

            <View style={styles.course}>
                <Text style={styles.subtitle}>Landscaping</Text>
                <Text style={styles.description}>Develop skills for designing and maintaining gardens.</Text>
                <Button title="View Details" onPress={() => navigation.navigate('landscapingcourse')} />
            </View>

            <View style={styles.course}>
                <Text style={styles.subtitle}>Life Skills</Text>
                <Text style={styles.description}>Acquire essential skills for navigating daily life.</Text>
                <Button title="View Details" onPress={() => navigation.navigate('lifeskillcourse')} />
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
});

export default SummaryOfSixMonthsCourse;
