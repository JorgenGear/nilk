import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function NewPostForm({ onSubmit }) {
    const [content, setContent] = useState('');

    const handleSubmit = () => {
        if (content.trim()) {
            onSubmit(content);
            setContent('');
        }
    };

    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={setContent}
                placeholder="What's on your mind?"
                multiline
            />
            <Button title="Post" onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
});