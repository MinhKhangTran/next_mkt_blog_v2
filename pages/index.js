
import Beruflich from "../components/beruflich";
import Hero from "../components/hero";
import Kompetenz from "../components/kompetenz";
import Layout from "../components/Layout";
import Learning from "../components/learning";



export default function Home({ posts }) {
  return (
    <Layout>
      <Hero />
      <Kompetenz/>
      <Beruflich/>
      <Learning/>
    </Layout>
  );
}


