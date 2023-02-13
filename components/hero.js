import Image from "next/image";

const Hero = () => {
  return (
    <section className="wrapper" id="hero" aria-label="hero abschnitt">
     <div className="hero__bio">
      <h1>Minh Khang Tran</h1>
      <p>Powerlifter & Berechnungsingenieur</p>
      <ul>
        <li>🌎 Aus Ulm</li>
        <li>💪 schwere Gewicht bewegen ist meine Leidenschaft</li>
        <li>🇰🇷 Lerne ständig koreanisch</li>
        <li>💻 Hobby Web Designer und Web Entwickler</li>
        <li>💩 Talent: Overthinking und mich selber paralysieren dabei</li>
      </ul>
     </div>
     <div className="hero__image">
      <Image
        width={322.5}
        height={375}
        alt="Ein Foto von mir (Minh Khang Tran). Lächelnd mit Arme verschränkt."
        src="/images/mkt.png"
      />
    </div>
    </section>
  );
};

export default Hero;
