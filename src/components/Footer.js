const columns = [
  ["FAQ", "Investor Relations", "Privacy", "Speed Test"],
  ["Help Center", "Jobs", "Cookie Preferences", "Legal Notices"],
  ["Account", "Ways to Watch", "Corporate Information", "Only on Neetflix"],
  ["Media Center", "Terms of Use", "Contact Us", "Gift Cards"],
];

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <p className="footer-callout">Questions? Contact us anytime.</p>
        <div className="footer-grid">
          {columns.map((items, index) => (
            <ul key={index}>
              {items.map((item) => (
                <li key={item}>
                  <a href="#hero">{item}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="socials" aria-label="Social media links">
          <a href="#hero" aria-label="Facebook">f</a>
          <a href="#hero" aria-label="Instagram">ig</a>
          <a href="#hero" aria-label="Twitter">x</a>
          <a href="#hero" aria-label="YouTube">yt</a>
        </div>
        <p className="country">Neetflix Clone</p>
      </div>
    </footer>
  );
}

export default Footer;
