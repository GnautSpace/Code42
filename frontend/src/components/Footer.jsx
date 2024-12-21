
import "./Footer.css";
import logo from "../assets/logo.png";
function Footer() {
  return (
    <footer className="footer">
      <h3 className="h3">The End of the Universe is in 42 minutes. Until then, explore!</h3>
      <p className="p">And May you always know where your towel is. </p>
      <br />
      <div className="copyright">
        <span>© 2024 Gnaut.</span>
        <img src={logo} alt="logo" className="footer-logo" />
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
}
export default Footer;