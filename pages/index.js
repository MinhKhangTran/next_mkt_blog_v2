
import Beruflich from "../components/beruflich";
import Hero from "../components/hero";
import Kompetenz from "../components/kompetenz";
import Layout from "../components/Layout";



export default function Home({ posts }) {
  return (
    <Layout>
      <Hero />
      <Kompetenz/>
      <Beruflich/>
    </Layout>
  );
}


