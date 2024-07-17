import "../css/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerMail">
        <ul>
          <li>
            <a href="mailto:charlotte.rouyer@hotmail.fr">
              <p className="menu-link">charlotte.rouyer@hotmail.fr</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="footerRS">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/charlotte-rouyer-4ba4ba150/">
              <p className="menu-link">LinkedIn</p>
            </a>
          </li>
          <li>
            <a href="https://github.com/CharlotteR678">
              <p className="menu-link">GitHub</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
