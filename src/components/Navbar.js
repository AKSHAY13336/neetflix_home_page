function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#hero" aria-label="Neetflix clone home">
        NEETFLIX
      </a>
      <nav aria-label="Primary navigation">
        <a href="#tabs">Browse</a>
        <a href="#pricing">Plans</a>
        <a href="#footer">Help</a>
      </nav>
      <button className="btn btn-small btn-red">Sign In</button>
    </header>
  );
}

export default Navbar;
