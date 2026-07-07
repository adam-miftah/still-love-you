function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-card">

          <h2>
            Udah sampai sini?
          </h2>

          <p>
            Berarti...
          </p>

          <p>
            Lu beneran baca semuanya.
          </p>

          <p>
            Makasih ya.
          </p>

          <p>
            Dan...
          </p>

          <p className="footer-highlight">
            Sekarang lu udah tau jawaban dari pertanyaan lu.
          </p>

          <div className="footer-divider"></div>

          <p className="footer-small">
            by seseorang yang jawabnya nggak bisa lewat chat doang.
          </p>

          <span className="footer-year">
            © {year}
          </span>

        </div>

      </div>
    </footer>
  );
}

export default Footer;