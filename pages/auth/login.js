// Importing react elements
import React, { useState } from "react"
import { signIn, getSession } from "next-auth/react"

// Importing next elements
import Head from 'next/head'
import Link from 'next/link'

//Importing lib files
import useUser from "../../lib/useUser";

// Importing components
import LoginForm from "../../components/formlogin"
import NavBar from "../../components/navbar"
import Footer from "../../components/footer"


export default function Login() {
  // here we just check if user is already logged in and redirect to profile

    const [errorMsg, setErrorMsg] = useState("")
    const [loginCount, setLoginCount] = useState(1)

    return (
        <> 
            <Head>
                <title>Login</title>
            </Head>

            <div className="h-full">
                
                <div className="h-2/3 mt-20">
                    <LoginForm
                        errorMessage={errorMsg}
                        onSubmit={async function handleSubmit(event) {
                            event.preventDefault()
                            
                            const body = {
                                username: event.currentTarget.username.value,
                                password: event.currentTarget.password.value,
                            };

                            try {
                                const res = await signIn('credentials', { username: body.username, password: body.password, callbackUrl: '/web' })
                                if(res?.error){
                                    setErrorMsg("Your username and password do not match")
                                    throw "Your username and password do not match"
                                }
                            } catch (error) {
                                console.error(error)
                            }
                        }}
                    />

                    
                    
                </div>
               
            </div>

        </>
    )
}

export async function getServerSideProps(context){
    const session = await getSession(context)

    if(session){
        return {
            redirect: {
                destination: '/web',
                permanent: false,
            }
        }
    }

    return {
        props: { session }
    }
}