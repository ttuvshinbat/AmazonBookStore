import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default bookId => {
    const [book, setBook] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    const loadBook = async () => {
        try {
            const result = await axios.get(`http://192.168.1.5:8000/api/v1/books/${bookId}`)

            setBook(result.data.data);
            setErrorMessage(null)
        } catch (err) {
            console.log(err.message);
            setErrorMessage(err.message)
        }
    }
    useEffect(() => {
        loadBook()
    }, [])

    return [book, errorMessage]
}
