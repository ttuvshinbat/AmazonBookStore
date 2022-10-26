import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import useCategory from '../hooks/useCategory'
const Spinner = () => {
    const [categories, errorMessage, loading] = useCategory()
    return (
        <View style={styles.ActivityIndicator}>
            <ActivityIndicator />
            <Text>Please wait !!!</Text>
        </View>
    )
}

export default Spinner

const styles = StyleSheet.create({
    ActivityIndicator: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})