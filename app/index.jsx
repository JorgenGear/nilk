import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from '../store/postsSlice';
import Post from '../components/Post';
import NewPostForm from '../components/NewPostForm';

export default function Home() {
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    const handleNewPost = (content) => {
        dispatch(addPost(content));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Social Media Feed</Text>
            <NewPostForm onSubmit={handleNewPost} />
            <FlatList
                data={posts}
                renderItem={({ item }) => <Post {...item} />}
                keyExtractor={(item) => item.id.toString()}
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
});
