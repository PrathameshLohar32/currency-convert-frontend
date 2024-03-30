import React, { useState,useEffect, useRef } from "react";
import axios from "axios";
import "./CurrencyConverter.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import styles from "./App.module.css";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    amount: "",
  });
  const heroSectionRef = useRef(null);
  const footerSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const currencyCodes = [
    "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN",
    "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL",
    "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY",
    "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP",
    "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS",
    "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF",
    "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD",
    "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT",
    "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD",
    "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN",
    "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK",
    "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR",
    "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SOS", "SRD", "SSP",
    "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD",
    "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES", "VND",
    "VUV", "WST", "XAF", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMW",
    "ZWL"
];


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Http Request
    try {
      const response = await axios.post(
        "https://currency-converter-backend-ehz0.onrender.com/api/convert",
        formData
      );
      setResult(response?.data);
      setError("");
    } catch (error) {
      setError(
        "Error",
        error?.response ? error?.response?.data : error?.message
      );
    }
  };
  const scrollToHeroSection = () => {
    heroSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToEnd = () => {
    footerSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar scrollToTarget={scrollToHeroSection} scrollToFooter={scrollToEnd} scrollToInfo = {scrollToAbout}/>
      <section ref={aboutSectionRef}>
      <Hero scrollToTarget={scrollToHeroSection} />
      </section>
      
      <section ref={heroSectionRef} className={`hero ${styles.converterHead}`}>
        <h1 style={{fontWeight:650}}>Global Currency Converter</h1>
        <p>Your go-to solution for real-time currency conversions worldwide.</p>
      </section>
      <div className={styles.bgimg}>
      <img src="\vecteezy_currency-exchange-3d-illustration_13167051.png" className={styles.image}/>
      <section className={`converter ${styles.converterCal}`}>
        <form onSubmit={handleSubmit}>
          <select
            name="from"
            value={formData.from}
            onChange={handleChange}
            className="input"
          >
            <option value="">Select From Currency</option>
            {currencyCodes.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
          <select
            name="to"
            value={formData.to}
            onChange={handleChange}
            className="input"
          >
            <option value="">Select To Currency</option>
            {currencyCodes.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
          <input
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Amount"
            type="number"
            className="input"
          />
          <button type="submit" className="submit-btn">
            Convert
          </button>
        </form>
        {result && (
          <div className="result">
            <p>
              Converted Amount: {result.convertedAmount} {result.target}
            </p>
            <p>Conversion Rate: {result.conversionRate}</p>
          </div>
        )}
        {error && <p className="error">Error: {error}</p>}
      </section>
      </div>
      <section ref={footerSectionRef}>
      <Router>
      <Footer />
    </Router>
      </section>
      
    </div>
  );
}

export default App;