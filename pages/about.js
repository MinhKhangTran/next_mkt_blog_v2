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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                dolore labore tenetur reprehenderit repudiandae molestiae enim
                aperiam exercitationem architecto sit.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                itaque nobis accusantium veritatis deserunt quasi quaerat quae,
                minima, debitis cum non nihil perferendis dicta dolores.
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
