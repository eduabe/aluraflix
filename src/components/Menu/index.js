import React from "react";
import logo from "../../assets/img/logo.png";
import "./Menu.css";
import Button from "../Button";
import { Link } from "react-router-dom";
//import ButtonLink from "./components/ButtonLink";

export default function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={logo} alt="Aluraflix logo" />
      </Link>

      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  );
}
