import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import Book from './Book';
import useBooks from '../hooks/useBooks';
import Spinner from './Spinner';
import useCategory from '../hooks/useCategory';
const CategoryBookList = ({ data, style, searchValue, searchServerValue }) => {

    const [books, errorMessage,] = useBooks(data.id, searchServerValue)
    // const [categories, errorMessageCategory, loading] = useCategory()
    const filteredBooks = books.filter((data) =>
        data.name.toLowerCase().includes(searchValue.toLowerCase()))
    const renderItem = ({ item, }) => {
        return (
            <View>
                <Item name={item.name} />
                <Book data={item} />
            </View>
        )
    }
    const Item = ({ name }) => {

        return (<View style={styles.item}>
            <Text style={{ marginHorizontal: 10, maxWidth: 200, minHeight: 50 }}>{name} </Text>
        </View>)
    }

    return (
        <View style={{ marginHorizontal: 20, ...style }}>

            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{data.name}-{books.length}</Text>
            <Text>{data.description}</Text>
            {errorMessage ? <Text style={{ color: "red" }}>{errorMessage}</Text> : null}
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={filteredBooks}
                    renderItem={renderItem}
                    keyExtractor={item => item.name}
                    horizontal />
            </SafeAreaView>
        </View>

    )
}

export default CategoryBookList

const styles = StyleSheet.create({
    item: {

    }
})