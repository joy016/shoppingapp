import NavBar from "./NavBar";

function Layout(props: any) {
  return (
    <div>
      <NavBar />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
