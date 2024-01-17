import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import { SurveyForm } from './pages/SurveyForm';
import Login from './pages/Login';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { Toaster } from "react-hot-toast";
import Admin from './pages/Admin';
import { useUserContext } from './context/userContext';
import axiosInstance from './config/AxiosInstance';
const App = () => {

  const { isAuthenticated, setIsAuthenticated, token, setToken, setUser } = useUserContext();

  useEffect(() => {
    const checkIsUserAuthenticated = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const res = await axiosInstance({
            method: "GET",
            url: "/getuser",
          });
          const { user } = res.data;
          setIsAuthenticated(true);
          setToken(token);
          setUser(user);
        } else {
          localStorage.clear();
          setIsAuthenticated(false);
          setToken(null);
          setUser(null);
        }
      } catch (error) {
        localStorage.clear();
        setIsAuthenticated(false);
        setToken(null);
        setUser(null);
      }
    };

    checkIsUserAuthenticated();
  }, [isAuthenticated, token]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/survey' element={<SurveyForm />} />
        <Route path='/login' element={isAuthenticated ? <Navigate to={"/admin"} /> : <Login />} />
        <Route path='/admin' element={isAuthenticated ? <Admin /> : <Navigate to={"/login"} />} />
      </Routes>
      <Footer />
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </Router>

  );
};

export default App;