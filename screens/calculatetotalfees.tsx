// Import necessary components from React and React Native
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
// Import specific types for navigation
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';
// Import functions from the email sending library
import { send, EmailJSResponseStatus } from '@emailjs/react-native';

// Define a list of courses with unique IDs, names, and prices
const courses = [
    { id: 'firstaid', name: 'First Aid', price: 1500 },
    { id: 'sewing', name: 'Sewing', price: 1500 },
    { id: 'landscaping', name: 'Landscaping', price: 1500 },
    { id: 'lifeskills', name: 'Life Skills', price: 1500 },
    { id: 'childminding', name: 'Child Minding', price: 750 },
    { id: 'cooking', name: 'Cooking', price: 750 },
    { id: 'gardenmaintenance', name: 'Garden Maintenance', price: 750 },
];

// Define a type for navigation properties specific to this screen
type Props = StackScreenProps<RootStackParamList, 'calculatetotalfees'>;

// Main functional component to calculate total fees for selected courses
const CalculateTotalFees: React.FC<Props> = ({ navigation }) => {
    // State to track selected courses, total cost, discount, and user contact info
    const [selectedCourses, setSelectedCourses] = useState<{ [key: string]: boolean }>({});
    const [totalCost, setTotalCost] = useState(0);
    const [discountPercentage, setDiscountPercentage] = useState(0);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    // Function to validate if an email is formatted correctly
    const validateEmail = (emailToCheck: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(emailToCheck);
    };

    // Function to validate if the phone number contains exactly 10 digits
    const validatePhone = (phoneToCheck: string) => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phoneToCheck);
    };

    // Function to calculate the total course fees with discount and VAT
    const calculateTotal = () => {
        // Check if at least one course has been selected
        const selectedCoursesCount = Object.values(selectedCourses).filter(Boolean).length;
        if (selectedCoursesCount === 0) {
            Alert.alert('Error', 'Please select at least one course', [{ text: 'OK' }]);
            return;
        }

        // Ensure user has entered all contact information
        if (!name.trim()) {
            Alert.alert('Error', 'Please enter your name', [{ text: 'OK' }]);
            return;
        }
        if (!phone.trim()) {
            Alert.alert('Error', 'Please enter your phone number', [{ text: 'OK' }]);
            return;
        }
        if (!validatePhone(phone.trim())) {
            Alert.alert('Error', 'Please enter a valid 10-digit phone number', [{ text: 'OK' }]);
            return;
        }
        if (!email.trim()) {
            Alert.alert('Error', 'Please enter your email', [{ text: 'OK' }]);
            return;
        }
        if (!validateEmail(email.trim())) {
            Alert.alert('Error', 'Please enter a valid email address', [{ text: 'OK' }]);
            return;
        }

        // Calculate the total cost of selected courses
        const selected = courses.filter(course => selectedCourses[course.id]);
        const total = selected.reduce((sum, course) => sum + course.price, 0);

        // Calculate discount based on the number of selected courses
        let discount = 0;
        const numberOfCourses = selected.length;
        if (numberOfCourses === 2) discount = 0.05;
        else if (numberOfCourses === 3) discount = 0.10;
        else if (numberOfCourses > 3) discount = 0.15;

        // Apply discount and add VAT, then update the total and discount states
        const discountAmount = total * discount;
        const totalWithVAT = (total - discountAmount) * 1.15; // 15% VAT
        setTotalCost(totalWithVAT);
        setDiscountPercentage(discount * 100);
    };

    // Function to submit the form and send an email if all fields are validated
    const onSubmit = async () => {
        try {
            // Re-run validation to confirm everything is correct
            const selectedCoursesCount = Object.values(selectedCourses).filter(Boolean).length;
            if (selectedCoursesCount === 0) {
                Alert.alert('Error', 'Please select at least one course', [{ text: 'OK' }]);
                return;
            }
            if (!name.trim()) {
                Alert.alert('Error', 'Please enter your name', [{ text: 'OK' }]);
                return;
            }
            if (!phone.trim() || !validatePhone(phone.trim())) {
                Alert.alert('Error', 'Please enter a valid 10-digit phone number', [{ text: 'OK' }]);
                return;
            }
            if (!email.trim() || !validateEmail(email.trim())) {
                Alert.alert('Error', 'Please enter a valid email address', [{ text: 'OK' }]);
                return;
            }

            // Send an email with user details and course selection
            await send(
                'service_mxen25r', // Service ID from emailjs
                'template_m8hlxuu', // Template ID from emailjs
                {
                    name,
                    email,
                    phone,
                    message: `Selected Courses: ${courses.filter(course => selectedCourses[course.id]).map(course => course.name).join(', ')}
                    Total Cost (inc VAT): R${totalCost.toFixed(2)}
                    Discount: ${discountPercentage}%`,
                },
                {
                    publicKey: 'vvS3ReToskikmVIKU', // Public key for emailjs
                },
            );

            // Display a success message
            Alert.alert('Success', 'Your form has been submitted successfully!', [{ text: 'OK' }]);
        } catch (err) {
            // Error handling in case of email failure
            if (err instanceof EmailJSResponseStatus) {
                Alert.alert('Error', 'Failed to send email. Please try again.', [{ text: 'OK' }]);
            } else {
                Alert.alert('Error', 'An unexpected error occurred.', [{ text: 'OK' }]);
            }
            console.log('ERROR', err); // Log error details to console for debugging
        }
    };

    // Function to toggle selection of a course
    const toggleCourse = (id: string) => {
        setSelectedCourses(prev => ({
            ...prev,
            [id]: !prev[id], // Toggle course selection on or off
        }));
    };

    // UI rendering of the screen with user input fields, course list, and buttons
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Calculate Total Fees</Text>

            <Text style={styles.subtitle}>Contact Details</Text>
            <View style={styles.contactForm}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone (10 digits)"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                    maxLength={10}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            <Text style={styles.subtitle}>Select Courses</Text>
            {courses.map(course => (
                <TouchableOpacity
                    key={course.id}
                    style={styles.courseItem}
                    onPress={() => toggleCourse(course.id)}
                >
                    <Text style={selectedCourses[course.id] ? styles.checked : styles.unchecked}>
                        {selectedCourses[course.id] ? '☑' : '☐'} {course.name} - R{course.price}
                    </Text>
                </TouchableOpacity>
            ))}

            <TouchableOpacity style={styles.calculateButton} onPress={calculateTotal}>
                <Text style={styles.calculateButtonText}>Calculate Total Fees</Text>
            </TouchableOpacity>

            <Text style={styles.result}>Selected Courses: {Object.values(selectedCourses).filter(Boolean).length}</Text>
            <Text style={styles.result}>Discount Percentage: {discountPercentage}%</Text>
            <Text style={styles.result}>Total Cost (inc VAT): R{totalCost.toFixed(2)}</Text>
            <Button title="Submit" onPress={onSubmit} />
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
    },
    contactForm: {
        width: '100%',
        marginBottom: 10,
    },
    input: {
        width: '100%',
        padding: 5,
        marginBottom: 3,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        fontSize: 12,
    },
    courseItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 3,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    checked: {
        fontSize: 16,
        color: 'green',
    },
    unchecked: {
        fontSize: 16,
        color: 'black',
    },
    result: {
        fontSize: 16,
        marginTop: 5,
    },
    calculateButton: {
        backgroundColor: '#333333',
        width: '100%',
        height: 60,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    calculateButtonText: {
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

export default CalculateTotalFees;