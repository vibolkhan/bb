import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: 'Home', headerShown: true }} />
            <View style={styles.content}>
                <Text style={styles.title}>Welcome Home</Text>
                <Text style={styles.subtitle}>You have successfully redirected from the splash screen.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#121714',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#658671',
        textAlign: 'center',
    },
});
