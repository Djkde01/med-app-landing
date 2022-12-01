import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link href="/caso"> Caso </Link>
        </li>
        <li>
          <Link href="/como-te-podemos-ayudar">¿Cómo te podemos ayudar?</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
