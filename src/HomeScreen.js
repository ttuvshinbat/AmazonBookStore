import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Search from '../components/Search'
const HomeScreen = (props) => {
  const [searchValue,setSearchValue]=useState("hi")
  console.log(searchValue)
  return (
    <View>
     <Search search={searchValue} setSearch={setSearchValue}/>
     <Text>{searchValue}</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})