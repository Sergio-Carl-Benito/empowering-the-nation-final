import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';

type Props = StackScreenProps<RootStackParamList, 'landscapingcourse'>;

const LandscapingScreen: React.FC<Props> = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Landscaping Course Overview</Text>
            
            <Text style={styles.fee}>Fees: R1500</Text>
            <Text style={styles.purpose}>Purpose:</Text>
            <Text style={styles.description}>
                To provide landscaping services for new and established gardens.
            </Text>

            <Text style={styles.contentTitle}>Content:</Text>
            <Text style={styles.content}>
                • Indigenous and exotic plants and trees{'\n'}
                • Fixed structures (fountains, statues, benches, tables, built-in braai){'\n'}
                • Balancing of plants and trees in a garden{'\n'}
                • Aesthetics of plant shapes and colours{'\n'}
                • Garden layout
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

export default LandscapingScreen;
