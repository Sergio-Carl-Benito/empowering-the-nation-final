import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';

type Props = StackScreenProps<RootStackParamList, 'lifeskillcourse'>;

const LifeSkillsScreen: React.FC<Props> = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Life Skills Course Overview</Text>
            
            <Text style={styles.fee}>Fees: R1500</Text>
            <Text style={styles.purpose}>Purpose:</Text>
            <Text style={styles.description}>
                To provide skills to navigate basic life necessities.
            </Text>

            <Text style={styles.contentTitle}>Content:</Text>
            <Text style={styles.content}>
                • Opening a bank account{'\n'}
                • Basic labour law (know your rights){'\n'}
                • Basic reading and writing literacy{'\n'}
                • Basic numeric literacy
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

export default LifeSkillsScreen;
