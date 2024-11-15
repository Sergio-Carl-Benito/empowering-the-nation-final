import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';

type Props = StackScreenProps<RootStackParamList, 'summaryofsixmonthscourse'>;

const SummaryOfSixMonthsCourse: React.FC<Props> = ({ navigation }) => {
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

    
    const courseDetails = {
        'First Aid': {
            description: 'Learn the basics of first aid to manage emergencies.',
            navigationRoute: 'firstaidcourse'
        },
        'Sewing': {
            description: 'Master sewing for repairs and clothing creation.',
            navigationRoute: 'sewingcourse'
        },
        'Landscaping': {
            description: 'Develop skills for designing and maintaining gardens.',
            navigationRoute: 'landscapingcourse'
        },
        'Life Skills': {
            description: 'Acquire essential skills for navigating daily life.',
            navigationRoute: 'lifeskillcourse'
        }
    };

    const courseNames = Object.keys(courseDetails);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Six-Month Courses</Text>
            
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
                    <Text style={styles.subtitle}>{selectedCourse}</Text>
                    <Text style={styles.description}>
                        {courseDetails[selectedCourse as keyof typeof courseDetails].description}
                    </Text>
                    <TouchableOpacity 
                        style={styles.courseButton} 

                        onPress={() => navigation.navigate(courseDetails[selectedCourse as keyof typeof courseDetails].navigationRoute as keyof RootStackParamList)}                    >
                        <Text style={styles.courseButtonText}>View Details</Text>
                    </TouchableOpacity>
                  
                </View>
            )}
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

export default SummaryOfSixMonthsCourse;