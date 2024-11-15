import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';

type Props = StackScreenProps<RootStackParamList, 'summaryofsixweekscourse'>;

const SummaryOfSixWeeksCourse: React.FC<Props> = ({ navigation }) => {
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

    const courseDetails: {
        [key: string]: {
            description: string;
            navigationRoute: string;
        }
    } = {
        'Child Minding': {
            description: 'Learn how to care for children, including basics of child development and safety.',
            navigationRoute: 'childmindingcourse'
        },
        'Cooking': {
            description: 'Master the art of cooking with hands-on training in various cuisines.',
            navigationRoute: 'cookingcourse'
        },
        'Garden Maintenance': {
            description: 'Acquire skills for maintaining gardens, including planting and landscaping techniques.',
            navigationRoute: 'gardenmaintenancecourse'
        }
    };

    const courseNames = Object.keys(courseDetails);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Six-Week Courses</Text>
            
            {/* Course Picker */}
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedCourse}
                    onValueChange={(itemValue) => setSelectedCourse(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Select a Course" value={null} />
                    {courseNames.map((courseName) => (
                        <Picker.Item 
                            key={courseName} 
                            label={courseName} 
                            value={courseName} 
                        />
                    ))}
                </Picker>
            </View>
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
            {/* Course Details Section */}
            {selectedCourse && (
                <View style={styles.course}>
                    <Text style={styles.courseTitle}>{selectedCourse}</Text>
                    <Text style={styles.description}>
                        {courseDetails[selectedCourse].description}
                    </Text>
                    <TouchableOpacity 
                        style={styles.courseButton} 
                        onPress={() => navigation.navigate(courseDetails[selectedCourse].navigationRoute as keyof RootStackParamList)}                    >
                        <Text style={styles.courseButtonText}>View Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                </View>
            )}
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
    pickerContainer: {
        width: '100%',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 8,
    },
    picker: {
        height: 50,
        width: '100%',
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
        backgroundColor: '#333333',
        width: '100%',
        height: 60,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    courseButtonText: {
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#333333',
        width: '45%', 
        height: 60,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 14,
        textAlign: 'center',
    },
});

export default SummaryOfSixWeeksCourse;