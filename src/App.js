import React, { useState, useEffect } from "react"
import FacebookLogin from "react-facebook-login"
import { GoogleLogin } from "react-google-oauth"
import "./App.css"
import axios from "axios"
import { gapi } from "gapi-script"

function App() {
  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId:
  //         "853600285512-3jct7hkj7jbfqso7881fv6pt3o72jl84.apps.googleusercontent.com",
  //       scope: "email",
  //     })
  //   }

  //   gapi.load("client:auth2", start)
  // }, [])

  // const getToken = async () => {
  //   try {
  //     const response = await axios.post(
  //       "https://ads.tiktok.com/open_api/oauth2/access_token/",
  //       null,
  //       {
  //         params: {
  //           app_id: "7272720109842761734",
  //           secret: "",
  //           grant_type: "client_credentials",
  //         },
  //       }
  //     )

  //     const accessToken = response.data.data.access_token
  //     return accessToken
  //   } catch (error) {
  //     console.error("Error fetching access token:", error)
  //     throw error
  //   }
  // }

  // const handleInstagramLogin = () => {
  //   // Redirect the user to the Instagram authorization page
  //   window.location.href =
  //     "https://www.instagram.com/oauth/authorize" +
  //     "?client_id=960898401841943" +
  //     "&redirect_uri=http://localhost:3001/api/v1/auth/instagram/callback" +
  //     "&scope=user_profile,user_media" + // Specify the required permissions
  //     "&response_type=code"
  // }
  // const responseFacebook = (response) => {
  //   console.log(response)
  // }

  const responseGoogle = (response) => {
    debugger
    console.log(response, "I AM RESPONSE FROM GOOGLE")
    var token = response
    var data = {
      provider: "google_oauth2",
      uid: token.Ca,
      id_token: response.xc.id_token,
      info: {
        email: token.wt.cu,
      },
    }
    console.log(data, "MY USER OBJECT I WANT TO SEND TO THE BACKEND")

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${response.xc.access_token}`,
        "Content-Type": "application/json",
        access_token: `${response.xc.access_token}`,
      },
      body: JSON.stringify(data),
    }
    return fetch(
      "http://localhost:3001/api/v1/auth/social_auth/callback",
      requestOptions
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response, "I AM  RESPONSE FROM THE BACKEND")
        // do something
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <h1>Login with Google Account</h1>
      <GoogleLogin
        height="10"
        width="500px"
        backgroundColor="#4285f4"
        access="offline"
        scope="email profile"
        onLoginSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      {/* <h1>LOGIN WITH FACEBOOK Account</h1>
      <FacebookLogin
        appId="794838042192093" //APP ID NOT CREATED YET
        fields="name,email,picture"
        scope="pages_show_list,pages_read_engagement,pages_manage_metadata,pages_manage_ads,pages_manage_posts"
        callback={responseFacebook}
      />

      <br />
      <br />
      <h1>LOGIN WITH FACEBOOK Ads Account</h1>
      <FacebookLogin
        appId="794838042192093" //APP ID NOT CREATED YET
        fields="name,email,picture"
        scope="ads_management,ads_read"
        callback={responseFacebook}
      /> */}

      {/* <hr />
      <h1>Instagram</h1>
      <FacebookLogin
        appId="1315367659088977" //APP ID NOT CREATED YET
        fields="name,email,picture"
        scope="pages_show_list,pages_manage_ads,instagram_manage_insights"
        responseType="code"
        callback={responseFacebook}
      /> */}
    </>
  )
}

export default App
