import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const BookDetailScreen = (props) => {

    const book = props.route.params.data
    return (
        <View>
            <Text>BookDetailScreen</Text>
            <Image style={{ width: 300, height: 400, alignSelf: "center" }} source={{ uri: "https://data.internom.mn/media/images" + book.photo }} />
            <Text>{book.name} </Text>
            <Text>{book.author} </Text>
            <Text>{book.price}</Text>
            <Text>{book.balance}</Text>
            <Text>{book.content}</Text>

        </View>
    )
}

export default BookDetailScreen

const styles = StyleSheet.create({})