import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker'; 

const SummaryOfSixWeeksCourse: React.FC = () => {
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null); 
    const [open, setOpen] = useState(false); 
   
    const courses = [
        {
            id: 'childminding',
            title: 'Child Minding',
            description: 'Learn how to care for children, including basics of child development and safety.',
        },
        {
            id: 'cooking',
            title: 'Cooking',
            description: 'Master the art of cooking with hands-on training in various cuisines.',
        },
        {
            id: 'gardenmaintenance',
            title: 'Garden Maintenance',
            description: 'Acquire skills for maintaining gardens, including planting and landscaping techniques.',
        }
    ];

    
    const selectedCourseDetails = courses.find(course => course.id === selectedCourse);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Six-Week Courses</Text>

            {/* Dropdown Picker */}
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

            {/* Display selected course details */}
            {selectedCourseDetails && (
                <View style={styles.course}>
                    <Text style={styles.courseTitle}>{selectedCourseDetails.title}</Text>
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
