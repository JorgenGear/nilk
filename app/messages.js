import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const dummyMessages = [
    { id: '1', sender: 'John Doe', message: 'Hey, how are you?', time: '10:30 AM' },
    { id: '2', sender: 'Jane Smith', message: 'Did you see my latest post?', time: 'Yesterday' },
    // Add more dummy messages as needed
];

export default function Messages() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Messages</Text>
            <FlatList
                data={dummyMessages}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.messageItem}>
                        <Text style={styles.senderName}>{item.sender}</Text>
                        <Text>{item.message}</Text>
                        <Text style={styles.timeText}>{item.time}</Text>
                    </View>
                )}
            />
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
    messageItem: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    senderName: {
        fontWeight: 'bold',
    },
    timeText: {
        color: '#888',
        fontSize: 12,
        marginTop: 5,
    },
});