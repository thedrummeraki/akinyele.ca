import { Link } from "react-router-dom";
import { myFace } from "../../icons";

import "./Header.css";

interface Props {
  name?: string;
}

export default function Header({ name = "Akinyele Cafe-Febrissy" }: Props) {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <div className="image">
          <img src={myFace} />
        </div>
        <div className="name">
          <h3>{name}</h3>
        </div>
      </Link>
    </div>
  );
}
