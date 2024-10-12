import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const dummyFollowers = [
    { id: '1', name: 'John Doe', username: '@johndoe' },
    { id: '2', name: 'Jane Smith', username: '@janesmith' },
    // Add more dummy followers as needed
];

export default function Followers() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Followers</Text>
            <FlatList
                data={dummyFollowers}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.followerItem}>
                        <Text style={styles.followerName}>{item.name}</Text>
                        <Text style={styles.followerUsername}>{item.username}</Text>
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
    followerItem: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    followerName: {
        fontWeight: 'bold',
    },
    followerUsername: {
        color: '#888',
    },
});