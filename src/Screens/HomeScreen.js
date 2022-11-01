import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native'

import React, { useState } from 'react'
import Search from '../components/Search'
import useCategory from '../hooks/useCategory'
import CategoryBookList from '../components/CategoryBookList'
import Spinner from '../components/Spinner'

const HomeScreen = () => {
  const [localSearchText, setLocalSearchText] = useState("")
  const [serverSearchText, setServerSearchText] = useState("")
  const [categories, errorMessage, loading] = useCategory()
  const searchBookFromServer = () => {
    console.log(`${localSearchText} ene utgaar search hiij ehleellee`)
    setServerSearchText(localSearchText)

  }



  return (
    <View style={styles.ActivityIndicator}>

      <Search search={localSearchText}
        setSearch={setLocalSearchText}
        onFinishEnter={searchBookFromServer} />
      <ScrollView>
        {errorMessage ? <Text style={{ marginHorizontal: 20, color: "red" }}>{errorMessage}</Text>
          : null}
        {loading ?
          <Spinner /> : categories.map((data) => {
            return (
              <View>
                <CategoryBookList key={data.name}
                  data={data}
                  searchValue={localSearchText}
                  searchServerValue={serverSearchText}
                  style={{ marginVertical: 10, marginHorizontal: 20 }} />
              </View>


            )
          })}


      </ScrollView>
    </View>
  )
}
export default HomeScreen
const styles = StyleSheet.create({
  ActivityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",


  }
})