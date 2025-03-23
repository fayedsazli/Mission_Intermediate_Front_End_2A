import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";

const App = () => {
  const [page, setPage] = useState("app");

  if (page === "home") return <Home setPage={setPage} />;
  if (page === "login") return <Login setPage={setPage} />;
  if (page === "register") return <Register setPage={setPage} />;
  if (page === "product") return <Product setPage={setPage} />;


  return (
    <div className="container mt-4">
      <h1>Daftar Halaman</h1>
      <ul>
      <li>
          <a href="#" onClick={(e) => { e.preventDefault(); setPage("product"); }}>
            Product (New)
          </a>
        </li>
        <li>
          <a href="#" onClick={(e) => { e.preventDefault(); setPage("home"); }}>
            Home
          </a>
        </li>
        <li>
          <a href="#" onClick={(e) => { e.preventDefault(); setPage("login"); }}>
            Login
          </a>
        </li>
        <li>
          <a href="#" onClick={(e) => { e.preventDefault(); setPage("register"); }}>
            Register
          </a>
        </li>
      </ul>
    </div>
  );
};

export default App;
