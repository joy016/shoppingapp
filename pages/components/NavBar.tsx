import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="inline bg-cyan-900 h-14 text-white space-x-4 flow-root pt-4">
      <ul>
        <div className="flex justify-between items-center px-4 w-96 float-left">
          <li>
            <Link href="/">Shop</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
          <li>
            <Link href="/home/MainHome">About</Link>
          </li>
        </div>

        <div className="flex justify-between items-center px-4 w-60 float-right">
          <li>
            <Link href="/">Shopping cart</Link>
          </li>
          <li>
            <Link href="/account/Login">Login</Link>
          </li>
          <li>
            <Link href="/account/Register">Register</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
