import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { useAuth } from './AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function Header() {
    const router = useRouter();
    const currentPath = usePathname();
    const { user } = useAuth();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.replace('/login');
        } catch (error) {
            console.error('Error signing out: ', error);
        }
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Profile', path: '/profile' },
        { name: 'Notifications', path: '/notifications' },
        { name: 'Followers', path: '/followers' },
        { name: 'Messages', path: '/messages' },
        { name: 'Settings', path: '/settings' },
    ];

    return (
        <View style={styles.header}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {navItems.map((item) => (
                    <TouchableOpacity
                        key={item.path}
                        onPress={() => router.push(item.path)}
                        style={[
                            styles.navItem,
                            currentPath === item.path && styles.activeNavItem
                        ]}
                    >
                        <Text style={[
                            styles.headerText,
                            currentPath === item.path && styles.activeHeaderText
                        ]}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            {user && (
                <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    // ... (previous styles)
    logoutButton: {
        position: 'absolute',
        right: 10,
        top: 40,
    },
    logoutText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});