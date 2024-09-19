import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';

type Props = StackScreenProps<RootStackParamList, 'sewingcourse'>;

const SewingScreen: React.FC<Props> = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Sewing Course Overview</Text>
            
            <Text style={styles.fee}>Fees: R1500</Text>
            <Text style={styles.purpose}>Purpose:</Text>
            <Text style={styles.description}>
                To provide alterations and new garment tailoring services.
            </Text>

            <Text style={styles.contentTitle}>Content:</Text>
            <Text style={styles.content}>
                • Types of stitches{'\n'}
                • Threading a sewing machine{'\n'}
                • Sewing buttons, zips, hems, and seams{'\n'}
                • Alterations{'\n'}
                • Designing and sewing new garments
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    fee: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    purpose: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'left', // Align text to the left for better readability
    },
    contentTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
    content: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'left',
    },
});

export default SewingScreen;
