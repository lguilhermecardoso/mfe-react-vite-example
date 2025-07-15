import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const Navbar = React.lazy(() => import("mf_navbar/Navbar"));
const LoginMFE = React.lazy(() => import("mf_login/Login"));

function getUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

export default function App() {
  const [user, setUser] = useState(getUser());

  function handleLogin({ username, token }: { username: string; token: string }) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify({ username }));
    setUser({ username });
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  }

  useEffect(() => {
    function handleStorage() {
      setUser(getUser());
    }
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <Router>
      <React.Suspense fallback={null}>
        {user && <Navbar user={user} onLogout={handleLogout} />}
      </React.Suspense>
      <div className="pt-16">
        <React.Suspense fallback={<div>Carregando...</div>}>
          <Routes>
            <Route path="/login" element={
              user
                ? <Navigate to="/dashboard" replace />
                : <LoginMFE onAuthSuccess={handleLogin} />
            } />
            <Route path="/dashboard" element={
              user
                ? <div style={{ marginTop: "60px" }}>
                  <p>Bem-vindo, {user.username}</p>
                  <pre>{JSON.stringify(user, null, 2)}</pre>
                </div>
                : <Navigate to="/login" replace />
            } />
            <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} replace />} />
            <Route path="*" element={<div style={{ marginTop: "60px" }}>Página não encontrada</div>} />
          </Routes>
        </React.Suspense>
      </div>
    </Router>
  );
}