const Navbar = () => {
  return (
    <nav className="navbar">
      {/* give nav a class of navbar */}
      <h1>Muziek</h1>
      <div className="links">
        <a href="/" activeClassName="active">Bar Chart</a>
        <a href="/overview" activeClassName="active">Pie Chart</a>
      </div>
    </nav>
  );
}

export default Navbar;