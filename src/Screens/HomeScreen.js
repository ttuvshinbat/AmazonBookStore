import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Search from '../components/Search'
import useCategory from '../hooks/useCategory'
import CategoryBookList from '../components/CategoryBookList'
const HomeScreen = () => {
  const [searchValue, setSearchValue] = useState("hi")
  const [categories, errorMessage] = useCategory()

  return (
    <View>
      <Search search={searchValue} setSearch={setSearchValue} />
      <Text>{searchValue}</Text>
      <ScrollView>{errorMessage ? <Text style={{ marginHorizontal: 20, color: "red" }}>{errorMessage}</Text>
        : null}
        {categories.map((data) => {
          return (<CategoryBookList key={data.name} data={data} style={{ marginVertical: 10, marginHorizontal: 20 }} />
          )
        })}

      </ScrollView>
    </View>
  )
}
export default HomeScreen
const styles = StyleSheet.create({})