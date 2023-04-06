import NavigationPage from '.';

function Layout(props: any) {
  return (
    <div>
      <NavigationPage />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
