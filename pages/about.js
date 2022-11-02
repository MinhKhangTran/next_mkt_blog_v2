import Layout from "../components/Layout";
import Image from "next/image";

export default function About() {
  return (
    <Layout title="Über mich">
      <section id="about__me" aria-label="über mich section">
        <div className="wrapper">
          <h1>Hi, Ich bin Minh Khang Tran</h1>
          <div className="flex">
            <div className="lefty">
              <p>
                Auf meinem Blog übe ich hauptsächlich das Schreiben. Ich war nie der große super Schreiber. Aber ich weiß, dass viel Übung und Konsistenz mich zu einem besseren Schreiber machen wird.
                Hier schreibe ich meine wöchentlichen Learnings und meine Gedanken, die ich sonst nirgends auffange und niederschreibe.
              </p>
              <p>
                Warum das Ganze? Ehrlich gesagt, keine Ahnung. Aber wo wären wir, wenn wir für alles was wir machen eine Rechtfertigung brauchen :D.
                In diesem Sinne. Viel Spaß beim stalken und rumlesen.
              </p>
              {/* <p>Für die, die es sehr genauen wollen:</p> */}
              {/* <a href="">Lebenslauf schauen</a> */}
            </div>
            <div className="righty">
              <Image
                width={322.5}
                height={375}
                alt="Ein Foto von mir (Minh Khang Tran). Lächelnd mit Arme verschränkt."
                src="/images/mkt.png"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
