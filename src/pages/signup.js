import React, {useState, useContext} from "react";
import {useNavigate} from "react-router-dom"
import {FirebaseContext} from "../context/firebase"
import {HeaderContainer} from "../containers/header"
import { FooterContainer } from "../containers/footer";
import {Form} from "../components"
import * as ROUTES from "../constants/routes"

export default function Signup() {

    const history = useNavigate()
    const {firebase} = useContext(FirebaseContext)

    const [firstName, setFirstName] = useState('')
    const [emailAddress, setemailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const isInvalid = firstName === '' || emailAddress === '' || password === ''

    const handleSignup = (e) => {
        e.preventDefault()
    }

    return (
        <p>SIgnup</p>
    )
}