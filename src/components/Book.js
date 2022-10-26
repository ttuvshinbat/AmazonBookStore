import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
const thousandify = require('thousandify');
import { useNavigation } from '@react-navigation/native';
const Book = ({ data }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("detail", { data: data })} style={styles.pic}>
            <Image style={{ width: 250, height: 300 }} source={{ uri: "https://data.internom.mn/media/images" + data.photo }} />
            <Text style={styles.center}>Зохиолч: {data.author}</Text>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between' }}>
                <Text style={{ marginHorizontal: 15, padding: 5, }}>{thousandify(data.price)}₮</Text>
                <Text style={{ marginHorizontal: 15 }}>Үлдэгдэл:{data.balance > 0 ? data.balance : "Дууссан"} </Text>
            </View>
        </TouchableOpacity>

    )
}

export default Book

const styles = StyleSheet.create({
    pic: {
        marginHorizontal: 10,
        marginVertical: 10,
        marginLeft: 15,
    },
    center: {
        marginHorizontal: 50

    }
})