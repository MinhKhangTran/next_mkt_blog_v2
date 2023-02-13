
import Beruflich from "../components/beruflich";
import Hero from "../components/hero";
import IT from "../components/it";
import Kompetenz from "../components/kompetenz";
import Layout from "../components/Layout";
import Learning from "../components/learning";
import Sprache from "../components/sprache";



export default function Home({ posts }) {
  return (
    <Layout>
      <Hero />
      <Kompetenz/>
      <Beruflich/>
      <Learning/>
      <Sprache/>
      <IT/>
    </Layout>
  );
}


