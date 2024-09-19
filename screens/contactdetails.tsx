import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';
import { Picker } from '@react-native-picker/picker';

type Props = StackScreenProps<RootStackParamList, 'contactdetails'>;

const venues = [
    { id: 'venue1', name: 'Venue 1: 123 Old Johannesburg Rd, Louwlardia, Centurion' },
    { id: 'venue2', name: 'Venue 2: 456 Main Rd, Bryanston, Sandton' },
    { id: 'venue3', name: 'Venue 3: Elm Rd, Riverclub, Sandton' },
];

const ContactDetails: React.FC<Props> = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [selectedVenue, setSelectedVenue] = useState(venues[0].id);

    const handleVenueChange = (itemValue: string) => {
        setSelectedVenue(itemValue);
    };

    const handleSubmit = () => {
        if (!name || !email || !message) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            Alert.alert('Error', 'Please enter a valid email address.');
            return;
        }

        console.log('Submitted:', { name, email, message, venue: selectedVenue });
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Contact Us</Text>

            <Text style={styles.subtitle}>Get in Touch</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Message"
                value={message}
                onChangeText={setMessage}
                multiline
                numberOfLines={4}
            />
            <Text style={styles.label}>Select Venue:</Text>
            <Picker
                selectedValue={selectedVenue}
                style={styles.picker}
                onValueChange={handleVenueChange}
            >
                {venues.map(venue => (
                    <Picker.Item key={venue.id} label={venue.name} value={venue.id} />
                ))}
            </Picker>
            <Button title="Submit" onPress={handleSubmit} />

            <View style={styles.contactInfo}>
                <Text style={styles.infoTitle}>Contact Information</Text>
                <Text>Phones: (012) 345-6789</Text>
                <Text>Email: contact@Empoweringnation.com</Text>
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
    subtitle: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    label: {
        fontSize: 16,
        marginVertical: 5,
    },
    picker: {
        width: '100%',
        height: 50,
        marginVertical: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    contactInfo: {
        marginTop: 20,
        alignItems: 'flex-start',
        width: '100%',
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default ContactDetails;
