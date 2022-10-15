import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import useCategory from './useCategory'
import axios from 'axios'


export default (categoryID, searchText) => {
    const [books, setBooks] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)
    const [categories, errorMessageCategory, loading] = useCategory()
    const searchBook = (searchValue) => {
        // console.log(searchValue + "starting search")
    }

    useEffect(() => {
        let limit = 3;
        let search = "";
        if (searchText) {
            limit = 50;
            search = `&search=${searchText}`
        }
        console.log(`http://192.168.1.5:8000/api/v1/categories/${categoryID}/books?limit=${limit}${search}`)

        axios
            .get(`http://192.168.1.5:8000/api/v1/categories/${categoryID}/books?limit=${limit}${search}`)
            .then(res => setBooks(res.data.data))
            .catch(err => {

                let message = err.message
                if (message === "Request failed with status code 404")
                    message = "404- server deer ene ogogdol baihgui baina !!!"
                else if (message === "Network Error")
                    message = "Back-end server offline"

                setErrorMessage(message)
            })
    }, [searchText, categoryID,])
    return [books, errorMessage, searchBook]
}



const styles = StyleSheet.create({})