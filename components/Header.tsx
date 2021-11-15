import Link from "next/link";
import { Menu as Menuant, Dropdown } from "antd";
import { AiOutlineArrowDown } from "react-icons/ai";

type Link = {
 href: string;
 text: string;
};

const accesories: Link[] = [
 { href: "/accesorios/collares", text: "Collares" },
 { href: "/accesorios/anillo", text: "Anillos" },
 { href: "/accesorios/pulsera", text: "Pulseras" },
 { href: "/accesorios/aretes", text: "Aretes" },
 { href: "/accesorios/cadenas", text: "cadenitas" },
];

const clothes: Link[] = [
 { href: "/ropa/pañoleta", text: "Pañoleta" },
 { href: "/ropa/ruanas", text: "Ruanas" },
 { href: "/ropa/pashmina", text: "Pashminas" },
];

const Menu = ({ links }: { links: Link[] }) => {
 return (
  <Menuant>
   {links.map((link: Link, index: number) => (
    <Menuant.Item key={index}>
     <Link href={link.href}>
      <a>{link.text}</a>
     </Link>
    </Menuant.Item>
   ))}
  </Menuant>
 );
};

function Header() {
 return (
  <header>
   <nav>
    <Dropdown
     overlay={<Menu links={accesories} />}
     arrow={true}
     overlayStyle={{
      width: "150px",
     }}
    >
     <a className="link">
      Accesorios <AiOutlineArrowDown />
     </a>
    </Dropdown>
    <Dropdown
     overlay={<Menu links={clothes} />}
     arrow={true}
     overlayStyle={{
      width: "150px",
     }}
    >
     <a>
      Ropa <AiOutlineArrowDown />
     </a>
    </Dropdown>
    <Link href="/">
     <a>Sobre Nosotros </a>
    </Link>

    <Link href="/">
     <a>Contáctanos</a>
    </Link>
   </nav>
   <style jsx>{`
    nav {
     height: 60px;
     display: flex;
     justify-content: center;
     gap: 30px;
     align-items: center;
     background-color: #fff;
     box-shadow: 11px 7px 21px 5px rgba(0, 0, 0, 0.31);
    }
    nav a {
     color: #080808;
     font-family: "Quicksand", sans-serif;
     font-weight: 300, bold;
     font-size: clamp(0.8rem, 1rem, 2.5rem);
     position: relative;
     overflow: hidden;
     transition: all 0.5s ease-in-out;
    }
    a:hover {
     transform: translateY(-3px);
    }
    a:before {
     content: "";
     position: absolute;
     bottom: 0px;
     width: 100%;
     height: 2px;
     transform: translateX(-110%);
     transition: all 1s ease-in-out;

     background-color: #292828;
    }
    a:hover:before {
     transform: translateX(0%);
    }
   `}</style>
  </header>
 );
}

export default Header;
