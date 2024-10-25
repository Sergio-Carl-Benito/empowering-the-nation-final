import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import emailjs from 'emailjs-com';
import { RootStackParamList } from './RootStackParams';

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

    // Initialize EmailJS
    emailjs.init("sU1KoUv-1xwxrdJTeY");

    const calculateTotal = () => {
        const selected = courses.filter(course => selectedCourses[course.id]);
        const total = selected.reduce((sum, course) => sum + course.price, 0);
        
        let discount = 0;
        const numberOfCourses = selected.length;
        if (numberOfCourses === 2) discount = 0.05;
        else if (numberOfCourses === 3) discount = 0.10;
        else if (numberOfCourses > 3) discount = 0.15;

        const discountAmount = total * discount;
        const totalWithVAT = (total - discountAmount) * 1.15; 
        setTotalCost(totalWithVAT);
        setDiscountPercentage(discount * 100);
    };

    const toggleCourse = (id: string) => {
        setSelectedCourses(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const sendEmail = () => {
        const templateParams = {
            to_name: name,
            email: email,
            phone: phone,
            total: totalCost.toFixed(2),
            selectedCourses: courses
                .filter(course => selectedCourses[course.id])
                .map(course => course.name)
                .join(', '),
        };

        emailjs.send('service_8nwdi2e', 'template_dm3a15h', templateParams)
            .then((response) => {
                console.log('Email sent successfully:', response.status, response.text);
                Alert.alert('Success', 'Your email has been sent successfully!');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                Alert.alert('Error', 'There was an error sending your email. Please try again later.');
            });
    };

    const handleSubmit = () => {
        calculateTotal();
        sendEmail();
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
                    placeholder="Phone"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
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
            
            <TouchableOpacity style={styles.calculateButton} onPress={handleSubmit}>
                <Text style={styles.calculateButtonText}>Submit and Send Email</Text>
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
