import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useCategory = () => {
    const [categories, setCategories] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)
    useEffect(() => {
        axios
            .get("http://192.168.1.5:8000/api/v1/categories")
            .then(res => setCategories(res.data.data))
            .catch(err => {
                let message = err.message
                if (message === "Request failed with status code 404")
                    message = "404- server deer ene ogogdol baihgui baina !!!"
                else if (message === "Network Error")
                    message = "Back-end server offline"
                setErrorMessage(message)
            })
    }, [])
    return [categories, errorMessage]
}
export default useCategory


const styles = StyleSheet.create({})