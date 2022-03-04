import React, {useState, useContext} from "react";
import {useNavigate} from "react-router-dom"
import {FirebaseContext} from "../context/firebase"
import {HeaderContainer} from "../containers/header"
import { FooterContainer } from "../containers/footer";
import {Form} from "../components"
import * as ROUTES from "../constants/routes"

export default function Signin() {

    const history = useNavigate()
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState('')

    const isInvalid = emailAddress === '' || password === ''

    const handleSignIn = (e) => {
        e.preventDefault()
    }

    firebase
        .auth()
        .signInWithEmailAndPassword(emailAddress, password)
        .then(() => {
            history(ROUTES.BROWSE)
        })
        .catch((error) => {
            setEmailAddress('')
            setPassword('')
            setError(error.message)
        })

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignIn} method="POST">

                        <Form.Input 
                            placeholder="Email or phone number" 
                            value={emailAddress} 
                            onChange={({target}) => setEmailAddress(target.value)}>
                        </Form.Input>

                        <Form.Input
                            type="password" 
                            placeholder="Password" 
                            autoComplete="off"
                            value={password} 
                            onChange={({target}) => setPassword(target.value)}>
                        </Form.Input>

                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign In
                        </Form.Submit>


                    </Form.Base>

                    <Form.Text>
                        New to Netlix? <Form.Link to="/signup">Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</Form.TextSmall>

                </Form>
            </HeaderContainer>


            <FooterContainer />
        </>
    )
}