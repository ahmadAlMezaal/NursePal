import { StyleSheet, Text, View } from 'react-native'

export const ProfileScreen = () => {
    return <View style={styles.container}>
        <Text>Profile screen</Text>
    </View>;
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        }
    }
);