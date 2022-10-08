import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'; 
const Search = () => {
  return (
    <View style={styles.searchPanel}>
      <Feather style={styles.Search} name="search" size={24} color="#535c68" />
      <TextInput 
      style={styles.text}
       placeholder="search"
       autoCapitalize='none'>Search</TextInput>
  </View>
  )
}

export default Search

const styles = StyleSheet.create({
    searchPanel:{
justifyContent:"center",
        height:50,
        backgroundColor:"#99aaab",
        top:5,
        borderRadius:10,
        flexDirection:"row",
        marginHorizontal:10,
        marginVertical:10,
       
 },
 text:{
    flex:1,
    color:"white",
    fontSize:18,
    },
    Search:{
        fontSize:34,
        alignSelf:"center",
    }
})