import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Profile() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Profile</Text>
            {/* Add profile content here */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});