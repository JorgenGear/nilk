import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const dummyNotifications = [
    { id: '1', text: 'John liked your post', time: '2 hours ago' },
    { id: '2', text: 'Sarah commented on your photo', time: '1 day ago' },
    // Add more dummy notifications as needed
];

export default function Notifications() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notifications</Text>
            <FlatList
                data={dummyNotifications}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.notificationItem}>
                        <Text>{item.text}</Text>
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
    notificationItem: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    timeText: {
        color: '#888',
        fontSize: 12,
        marginTop: 5,
    },
});