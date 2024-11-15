import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
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
  
    const [selectedVenue, setSelectedVenue] = useState(venues[0].id);

    const handleVenueChange = (itemValue: string) => {
        setSelectedVenue(itemValue);
    };

    

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Contact Us</Text>

            <Text style={styles.subtitle}>Get in Touch</Text>
            
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
            
            

            <View style={styles.contactInfo}>
                <Text style={styles.infoTitle}>Contact Information</Text>
                <Text>Phones: (012) 345-6789</Text>
                <Text>Email: contact@Empoweringnation.com</Text>
            </View>
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
    submitButton: {
        backgroundColor: '#333333', // Button color
        width: '100%',
        height: 60,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    submitButtonText: {
        color: '#ffffff', // Button text color
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
        marginTop: 10,},
    buttonText: {
        color: '#ffffff',
        fontSize: 14,
        textAlign: 'center',
    },
});

export default ContactDetails;
