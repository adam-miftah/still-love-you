function Hero({ onOpen }) {
  return (
    <section id="hero" className="hero">

      <div className="hero-background"></div>

      <div className="container hero-container">

        <div className="hero-content">

          <span className="hero-badge">
            dibuat khusus buat seseorang 👀
          </span>

          <h3 className="hero-title">
            Lu nanya...
            <br />
            <span>"Gua Masih suka?"</span>
          </h3>

          <p className="hero-description">
            Harusnya sih tinggal gue jawab lewat WhatsApp.
            <br />
            Tapi...
            <br />
            karena gue bisa ngoding,
            ya sekalian aja gue bikin website 😎
          </p>

          <div className="hero-buttons">

            <button
              className="btn-primary hero-button"
              onClick={onOpen}
            >
              Buka Jawaban →
            </button>

          </div>

          <small className="hero-note">
            Tenang.
            Website ini cuma buat jawab pertanyaan lu kok.
          </small>

        </div>

      </div>

      <div className="hero-gradient hero-gradient-left"></div>

      <div className="hero-gradient hero-gradient-right"></div>

    </section>
  );
}

export default Hero;