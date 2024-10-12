import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Post({ username, content, timestamp }) {
    return (
        <View style={styles.postContainer}>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.content}>{content}</Text>
            <Text style={styles.timestamp}>{new Date(timestamp).toLocaleString()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    postContainer: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    username: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    content: {
        marginBottom: 5,
    },
    timestamp: {
        fontSize: 12,
        color: '#888',
    },
});