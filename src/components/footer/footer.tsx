import Logo from "../logo";
import LogoMobile from "../logo-mobile";
import "./footer.scss";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="layout__footer">
      <div className="container layout__footer__content">
        <Logo fill="white" className="layout__footer__content__logo" />
        <LogoMobile className="layout__footer__content__logomobile" />

        <hr className="layout__footer__content__divider" />
        <span className="layout__footer__content__copyright">
          {`© ${currentYear} RIMAC Seguros y Reaseguros.`}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
