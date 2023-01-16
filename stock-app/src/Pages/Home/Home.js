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
            <img
              src="https://i.postimg.cc/pXw2P5QZ/D4-E1l1g-WAAApft-P.jpg"
              alt=""
            ></img>
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
          <button className="button-6" type="button" onClick={NSEDataHandler}>
            NSE
          </button>
          <button className="button-6" type="button" onClick={BSEDataHandler}>
            BSE
          </button>
        </div>
        <div className="container">
          <h1>Nasdaq</h1>
          <h5>DERIVED: CFD</h5>
        </div>
        <div className="container header-section flex">
          <div className="header-left">
            <h1>11,079.16</h1>
            <h3>
              <Triangle></Triangle> 78.05(0.71%)
            </h3>
            <h6>As on 14 Jan, 2023 | 02:18 IST</h6>
          </div>
          <div className="header-middle">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea.
            </p>
          </div>
          <div className="header-right">
            <AreaChart stock={stock}></AreaChart>
          </div>
        </div>
      </header>

      <section className="section-1">
        <div className="container">
          <div className="nav-links">
            <ul className="flex-2">
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
          {/* <label for="stocks">STOCKS:</label> */}

          <select className="stocks-bar-button" name="stocks" id="stocks">
            <option value="ashokley">ASHOKLEY</option>
            <option value="cipla">CIPLA</option>
            <option value="eichermot">EICHERMOT</option>
            <option value="reliance">RELIANCE</option>
            <option value="tata steel">TATA STEEL</option>
          </select>
        </div>
      </section>
      <Chart></Chart>
    </div>
  );
}
