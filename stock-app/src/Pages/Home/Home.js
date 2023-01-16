import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSignOut, useAuthUser } from "react-auth-kit";
import axios from "axios";
import "./Home.css";
import { Triangle } from "react-feather";
import Chart from "./Components/Chart";
import AreaChart from "./Components/AreaChart";

export default function Home() {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const auth = useAuthUser();
  const [stock, setStock] = useState("nse");
  const [company, setCompany] = useState("");

  const changeCompanyHandler = (e) => {
    setCompany(e.target.value);
  };

  const NSEDataHandler = () => {
    setStock("nse");
  };

  const BSEDataHandler = () => {
    setStock("bse");
  };

  // console.log(auth().token);

  const logOut = () => {
    signOut();
    navigate("/signin");
    // const headers = {
    //   token: `${auth().token}`,
    // };

    // try {
    //   const response = await axios.post(
    //     "http://nulled1337.pythonanywhere.com/api/logout",
    //     {},
    //     {
    //       headers: headers,
    //     }
    //   );

    //   console.log(response);
    // } catch (err) {
    //   console.log(err);
    // }
  };
  return (
    <div>
      <nav>
        <div className="container main-nav flex">
          <a href="#" className="company-logo">
            <img src="https://i.postimg.cc/P5KYP2h1/400-2002.png" alt=""></img>
          </a>
          <div className="nav-links">
            <ul className="flex">
              <li>
                <button className="other-button" type="button">
                  Invest
                </button>
              </li>

              <li>
                <button type="button" className="other-button">
                  Trade
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="hover-link primary-button"
                  onClick={logOut}
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header>
        <div className="container header-section-2 flex">
          <button className="button-1" type="button" onClick={NSEDataHandler}>
            NSE
          </button>
          <button className="button-1" type="button" onClick={BSEDataHandler}>
            BSE
          </button>
        </div>
        <div className="container">
          <h1>Nasdaq</h1>
          <h5>DERIVED: CFD</h5>
        </div>
        <div className="container header-section flex">
          <div className="header-left">
            <h1>17,755.45</h1>
            <h3 className="profit">
              <Triangle></Triangle> 78.05(0.71%)
            </h3>
            <h6>As on 12 Jan, 2023 | 02:18 IST</h6>
          </div>
          <div className="header-middle-3">
            <div>
              <div>
                <h4>Day Range</h4>
                <div className="section-2 flex-2">
                  <p id="rangeValue">17745.56</p>
                  <p id="rangeValue">17569.69</p>
                </div>

                <div>
                  <label for="low">L </label>
                  <input
                    className="slider"
                    type="range"
                    min="0"
                    max="200"
                    value="100"
                  ></input>
                  <label for="high">H </label>
                </div>
              </div>
              <div>
                <h4>52 WEEK RANGE</h4>
                <div className="section-2 flex-2">
                  <p id="rangeValue">17745.56</p>
                  <p id="rangeValue">17569.69</p>
                </div>

                <div>
                  <label for="low">L </label>
                  <input
                    className="slider"
                    type="range"
                    min="0"
                    max="200"
                    value="100"
                  ></input>
                  <label for="high">H </label>
                </div>
              </div>
              <div>
                <h4>RETURN</h4>
                <div className="section-3 flex">
                  <select
                    className="return-bar-button"
                    name="returns"
                    id="returns"
                  >
                    <option value="ytd">YTD</option>
                  </select>
                  <h5 className="profit-2">3.55%</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="header-right">
            <AreaChart stock={stock}></AreaChart>
          </div>
        </div>
      </header>

      <section className="section-1">
        <div className="container">
          <div className="nav-links-2">
            <hr id="line-bar-1"></hr>
            <ul className="flex">
              <li>
                <button type="button" className="other-button">
                  OVERVIEW
                </button>
              </li>
              <li>
                <button type="button" className="other-button">
                  CHART
                </button>
              </li>
              <li>
                <button type="button" className="other-button">
                  TECHNICALS
                </button>
              </li>
              <li>
                <button type="button" className="other-button">
                  NEWS
                </button>
              </li>
              <li>
                <button type="button" className="other-button">
                  CONTRIBUTION
                </button>
              </li>
              <li>
                <button type="button" className="other-button">
                  COMPONENT
                </button>
              </li>
              <li>
                <button type="button" className="other-button">
                  FORUM
                </button>
              </li>
            </ul>
            <hr id="line-bar-1"></hr>
          </div>
        </div>
      </section>

      <section className="section-2">
        <div className="container header-section flex">
          <div className="header-left section-2 flex-2">
            <div>
              <h4>OPEN</h4>
              <hr className="line-bar-3"></hr>
              <h4>PREVIOUS CLOSE</h4>
              <hr className="line-bar-3"></hr>
              <h4>DAY HIGH</h4>
              <hr className="line-bar-3"></hr>
            </div>
            <div>
              <h4>17,867.50</h4>
              <hr className="line-bar-3"></hr>
              <h4>17,867.50</h4>
              <hr className="line-bar-3"></hr>
              <h4>17,867.50</h4>
              <hr className="line-bar-3"></hr>
            </div>
          </div>
          <div className="header-left section-2 flex-2">
            <div>
              <h4>OPEN</h4>
              <hr className="line-bar-3"></hr>
              <h4>PREVIOUS CLOSE</h4>
              <hr className="line-bar-3"></hr>
              <h4>DAY HIGH</h4>
              <hr className="line-bar-3"></hr>
            </div>
            <div>
              <h4>17,867.50</h4>
              <hr className="line-bar-3"></hr>
              <h4>17,867.50</h4>
              <hr className="line-bar-3"></hr>
              <h4>17,867.50</h4>
              <hr className="line-bar-3"></hr>
            </div>
          </div>
        </div>
      </section>

      <section className="section-3">
        <div className="container header-section-3">
          <h2>ADVANCED CHART</h2>
        </div>
        <div className="container header-section-4">
          <select
            className="stock-bar-button"
            name="stocks"
            id="stocks"
            onChange={changeCompanyHandler}
          >
            <option value="temp">Choose</option>
            <option value="ashokleynscsv">ASHOKLEY</option>
            <option value="ciplanscsv">CIPLA</option>
            <option value="eichermotnscsv">EICHERMOT</option>
            <option value="reliancenscsv">RELIANCE</option>
            <option value="tatasteelnscsv">TATA STEEL</option>
          </select>
        </div>
      </section>
      <div className="container">
        <Chart company={company}></Chart>
      </div>
    </div>
  );
}
