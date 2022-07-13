
 function Footer() {
  return (
    <div className="container-fluid">
      <div className="row footer">
        <div className="col-md-12 text-center social">
          <a href="facebook.com"><i className="fa-brands fa-facebook" > Facebook</i></a>
          <a href="linkedin.com"><i className="fa-brands fa-linkedin"> LinkedIn</i></a>
          <a href="twitter.com"><i className="fa-brands fa-twitter"> Twitter</i></a>
          <a href="instagram.com"><i className="fa-brands fa-instagram"> Instagram</i></a>
          <a href="tiktok.com"><i className="fa-brands fa-tiktok"> Tiktok</i></a>
          <a href="whatsapp.com"><i className="fa-brands fa-whatsapp"> WhatsApp</i></a>
          <a href="email.com"><i className="fa-regular fa-envelope-open">   Email</i></a>
        </div>
        <p className="text-center">© 2022 OZZS PIZZA. All Rights Reserverd .</p>
        <div className="foota">
          <div>
            <a href="privacy" className="pp">Privacy Policy </a>
          </div>
          <div> <a href="accesss" className="ac">Accessibilty</a></div>
          <div> <a href="terms" className="tu">Terms of Use</a></div>
        </div>
      </div>
    </div>
  );
}
export default Footer;