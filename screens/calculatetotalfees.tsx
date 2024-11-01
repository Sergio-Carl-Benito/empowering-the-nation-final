import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';
import { send, EmailJSResponseStatus } from '@emailjs/react-native';

const courses = [
    { id: 'firstaid', name: 'First Aid', price: 1500 },
    { id: 'sewing', name: 'Sewing', price: 1500 },
    { id: 'landscaping', name: 'Landscaping', price: 1500 },
    { id: 'lifeskills', name: 'Life Skills', price: 1500 },
    { id: 'childminding', name: 'Child Minding', price: 750 },
    { id: 'cooking', name: 'Cooking', price: 750 },
    { id: 'gardenmaintenance', name: 'Garden Maintenance', price: 750 },
];

type Props = StackScreenProps<RootStackParamList, 'calculatetotalfees'>;

const CalculateTotalFees: React.FC<Props> = ({ navigation }) => {
    const [selectedCourses, setSelectedCourses] = useState<{ [key: string]: boolean }>({});
    const [totalCost, setTotalCost] = useState(0);
    const [discountPercentage, setDiscountPercentage] = useState(0);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const validateEmail = (emailToCheck: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(emailToCheck);
    };

    const validatePhone = (phoneToCheck: string) => {
        // Basic phone number validation (adjust regex as needed for your region)
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phoneToCheck);
    };

    const calculateTotal = () => {
        // Check if at least one course is selected
        const selectedCoursesCount = Object.values(selectedCourses).filter(Boolean).length;
        if (selectedCoursesCount === 0) {
            Alert.alert(
                'Error', 
                'Please select at least one course',
                [{ text: 'OK' }]
            );
            return;
        }

        // Validate contact details
        if (!name.trim()) {
            Alert.alert(
                'Error', 
                'Please enter your name',
                [{ text: 'OK' }]
            );
            return;
        }

        if (!phone.trim()) {
            Alert.alert(
                'Error', 
                'Please enter your phone number',
                [{ text: 'OK' }]
            );
            return;
        }

        if (!validatePhone(phone.trim())) {
            Alert.alert(
                'Error', 
                'Please enter a valid 10-digit phone number',
                [{ text: 'OK' }]
            );
            return;
        }

        if (!email.trim()) {
            Alert.alert(
                'Error', 
                'Please enter your email',
                [{ text: 'OK' }]
            );
            return;
        }

        if (!validateEmail(email.trim())) {
            Alert.alert(
                'Error', 
                'Please enter a valid email address',
                [{ text: 'OK' }]
            );
            return;
        }

        // Calculate total if all validations pass
        const selected = courses.filter(course => selectedCourses[course.id]);
        const total = selected.reduce((sum, course) => sum + course.price, 0);

        let discount = 0;
        const numberOfCourses = selected.length;
        if (numberOfCourses === 2) discount = 0.05;
        else if (numberOfCourses === 3) discount = 0.10;
        else if (numberOfCourses > 3) discount = 0.15;

        const discountAmount = total * discount;
        const totalWithVAT = (total - discountAmount) * 1.15; // Add 15% VAT
        setTotalCost(totalWithVAT);
        setDiscountPercentage(discount * 100);
    };

    const onSubmit = async () => {
        // Reuse the validation logic from calculateTotal
        try {
            const selectedCoursesCount = Object.values(selectedCourses).filter(Boolean).length;
            if (selectedCoursesCount === 0) {
                Alert.alert(
                    'Error', 
                    'Please select at least one course',
                    [{ text: 'OK' }]
                );
                return;
            }

            if (!name.trim()) {
                Alert.alert(
                    'Error', 
                    'Please enter your name',
                    [{ text: 'OK' }]
                );
                return;
            }

            if (!phone.trim() || !validatePhone(phone.trim())) {
                Alert.alert(
                    'Error', 
                    'Please enter a valid 10-digit phone number',
                    [{ text: 'OK' }]
                );
                return;
            }

            if (!email.trim() || !validateEmail(email.trim())) {
                Alert.alert(
                    'Error', 
                    'Please enter a valid email address',
                    [{ text: 'OK' }]
                );
                return;
            }

            // If all validations pass, send the email
            await send(
                'service_mxen25r',
                'template_m8hlxuu',
                {
                    name,
                    email,
                    phone,
                    message: `Selected Courses: ${courses.filter(course => selectedCourses[course.id]).map(course => course.name).join(', ')}
                    Total Cost (inc VAT): R${totalCost.toFixed(2)}
                    Discount: ${discountPercentage}%`,
                },
                {
                    publicKey: 'vvS3ReToskikmVIKU',
                },
            );

            // Show success alert
            Alert.alert(
                'Success', 
                'Your form has been submitted successfully!',
                [{ text: 'OK' }]
            );
        } catch (err) {
            // Handle email sending errors
            if (err instanceof EmailJSResponseStatus) {
                Alert.alert(
                    'Error', 
                    'Failed to send email. Please try again.',
                    [{ text: 'OK' }]
                );
            } else {
                Alert.alert(
                    'Error', 
                    'An unexpected error occurred.',
                    [{ text: 'OK' }]
                );
            }
            console.log('ERROR', err);
        }
    };

    const toggleCourse = (id: string) => {
        setSelectedCourses(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

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

            <Text style={styles.result}>
                Selected Courses: {Object.values(selectedCourses).filter(Boolean).length}
            </Text>
            <Text style={styles.result}>
                Discount Percentage: {discountPercentage}%
            </Text>
            <Text style={styles.result}>
                Total Cost (inc VAT): R{totalCost.toFixed(2)}
            </Text>
            <Button title="Submit" onPress={onSubmit} />
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
});

export default CalculateTotalFees;