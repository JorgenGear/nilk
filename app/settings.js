import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function Settings() {
    const [isPrivateAccount, setIsPrivateAccount] = React.useState(false);
    const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <View style={styles.settingItem}>
                <Text>Private Account</Text>
                <Switch
                    value={isPrivateAccount}
                    onValueChange={setIsPrivateAccount}
                />
            </View>
            <View style={styles.settingItem}>
                <Text>Enable Notifications</Text>
                <Switch
                    value={notificationsEnabled}
                    onValueChange={setNotificationsEnabled}
                />
            </View>
            {/* Add more settings options as needed */}
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
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});