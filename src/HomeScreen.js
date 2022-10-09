import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import Search from '../components/Search'

const HomeScreen = (props) => {
  const [searchValue, setSearchValue] = useState("hi")
  const [categories, setCategories] = useState([])
  console.log(categories)
  const onSearch = () => {
    axios
      .get("http://192.168.1.5:8000/api/v1/categories")
      .then(res => console.log(res.data.data))
      .catch(err => console.log(err))
  }
  return (
    <View>
      <Search search={searchValue} onFinishEnter={onSearch} setSearch={setSearchValue} />
      <Text>{searchValue}</Text>
      <Text>{categories}</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})