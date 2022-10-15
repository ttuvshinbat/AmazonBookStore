import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
const thousandify = require('thousandify');

const Book = ({ data }) => {

    return (
        <View style={styles.pic}>
            <Image style={{ width: 200, height: 300 }} source={{ uri: "https://data.internom.mn/media/images" + data.photo }} />
            <View style={{ flexDirection: "row", alignItems: "center", }}>
                <Text style={{ marginHorizontal: 15, padding: 5, }}>{thousandify(data.price)}₮</Text>
                <Text style={{ marginHorizontal: 15 }}>Үнэлгээ:{data.rating}</Text>
            </View>

        </View>
    )
}

export default Book

const styles = StyleSheet.create({
    pic: {
        marginHorizontal: 10,
        marginVertical: 10

    }
})