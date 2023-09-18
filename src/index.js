import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { GoogleAPI } from "react-google-oauth"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <GoogleAPI
      className="GoogleLogin"
      clientId={
        "853600285512-3jct7hkj7jbfqso7881fv6pt3o72jl84.apps.googleusercontent.com"
      }
    >
      <App />
    </GoogleAPI>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
