import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";

import App from "./App";

import Password from "./pages/Password";
import IPChecker from "./pages/IPChecker";
import Base64 from "./pages/Base64";
import UUID from "./pages/UUID";
import JSONFormatter from "./pages/JSONFormatter";
import QRGenerator from "./pages/QRGenerator";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import PasswordStrengthChecker from "./pages/PasswordStrengthChecker";
import URLEncoderDecoder from "./pages/UrlEncoderDecoder";
import JWTDecoder from "./pages/JWTDecoder";



ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <BrowserRouter>

    <Routes>

      <Route
        path="/"
        element={<App />}
      />

      <Route
        path="/password-generator"
        element={<Password />}
      />

      <Route
        path="/ip-checker"
        element={<IPChecker />}
      />

      <Route
        path="/base64-tool"
        element={<Base64 />}
      />


      
<Route
  path="/uuid-generator"
  element={<UUID />}
/>


<Route
  path="/json-formatter"
  element={<JSONFormatter />}
/>

<Route
  path="/qr-generator"
  element={<QRGenerator />}
/>


<Route
  path="/about"
  element={<About />}
/>

<Route
  path="/privacy-policy"
  element={<Privacy />}
/>

<Route
  path="/contact"
  element={<Contact />}
/>

<Route
  path="/password-strength-checker"
  element={<PasswordStrengthChecker />}
/>
<Route
  path="/url-encoder-decoder"
  element={<URLEncoderDecoder />}
/>
<Route
  path="/jwt-decoder"
  element={<JWTDecoder />}
/>






    </Routes>


    

  </BrowserRouter>
);