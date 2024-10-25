import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const SummaryOfSixMonthsCourse: React.FC = () => {
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
    const [open, setOpen] = useState(false);

    const courses = [
        {
            id: 'firstaid',
            title: 'First Aid',
            description: 'Learn the basics of first aid to manage emergencies.',
        },
        {
            id: 'sewing',
            title: 'Sewing',
            description: 'Master sewing for repairs and clothing creation.',
        },
        {
            id: 'landscaping',
            title: 'Landscaping',
            description: 'Develop skills for designing and maintaining gardens.',
        },
        {
            id: 'lifeskills',
            title: 'Life Skills',
            description: 'Acquire essential skills for navigating daily life.',
        },
    ];

    const selectedCourseDetails = courses.find(course => course.id === selectedCourse);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Six-Month Courses</Text>

            <DropDownPicker
                open={open}
                setOpen={setOpen}
                items={courses.map(course => ({
                    label: course.title,
                    value: course.id,
                }))}
                placeholder="Select a course"
                value={selectedCourse}
                setValue={setSelectedCourse}
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropDownContainer}
            />

            {selectedCourseDetails && (
                <View style={styles.course}>
                    <Text style={styles.subtitle}>{selectedCourseDetails.title}</Text>
                    <Text style={styles.description}>{selectedCourseDetails.description}</Text>

                    <TouchableOpacity
                        style={styles.courseButton}
                        onPress={() => console.log(`Navigating to: ${selectedCourseDetails.title} details`)}
                    >
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
    dropdown: {
        width: '100%',
        backgroundColor: '#fafafa',
        borderColor: '#ccc',
    },
    dropDownContainer: {
        width: '100%',
    },
    course: {
        marginTop: 20,
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
});

export default SummaryOfSixMonthsCourse;
