import Menu from "./components/Menu.jsx";
import {Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import DriftPage from "./components/DriftPage.jsx";
import TimeAttackPage from "./components/TimeAttackPage.jsx";
import ForzaPage from "./components/ForzaPage.jsx";
import {useEffect, useState} from "react";

export default function App() {
    const [activePage, setActivePage] = useState([]);

    useEffect(() => {
        const active = document.getElementsByClassName("active");

        setActivePage([
            active[0],
        ])
    }, []);

    useEffect(() => {
        if (activePage.length > 0) {
            activePage[0].classList.add("menu__item-active");
        }

    }, [activePage]);

    const handlerOnClick = (e) => {
        const { target } = e;

        return setActivePage([
            target,
        ])

    }

  return (
        <div>
            <Menu onClick={handlerOnClick} />

            <div className="page">

                <Routes>
                    <Route
                        path="/"
                        element={<HomePage />}
                    />

                    <Route
                        path="/drift"
                        element={<DriftPage />}
                    />

                    <Route
                        path="/timeattack"
                        element={<TimeAttackPage />}
                    />

                    <Route
                        path="/forza"
                        element={<ForzaPage />}
                    />
                </Routes>

            </div>

        </div>
  );
}