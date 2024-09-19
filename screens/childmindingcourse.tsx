import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';

type Props = StackScreenProps<RootStackParamList, 'childmindingcourse'>;

const ChildMindingScreen: React.FC<Props> = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Child Minding Course Overview</Text>
            
            <Text style={styles.fee}>Fees: R750</Text>
            <Text style={styles.purpose}>Purpose:</Text>
            <Text style={styles.description}>
                To provide basic child and baby care.
            </Text>

            <Text style={styles.contentTitle}>Content:</Text>
            <Text style={styles.content}>
                • Birth to six-month old baby needs{'\n'}
                • Seven-month to one year old needs{'\n'}
                • Toddler needs{'\n'}
                • Educational toys
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
        textAlign: 'left',
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

export default ChildMindingScreen;
