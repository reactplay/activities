import Layout from "../components/Layout";
import {
  Hero,
  About,
  ChallengesAndPrizes,
  Judges,
  CTA,
  FAQs,
} from "../components/Home";

export default function Home() {
  return (
    <Layout title="HACK-R-PLAY" description="A hackathon hosted by ReactPlay">
      <Hero />
      <About />
      <ChallengesAndPrizes />
      <Judges />
      <CTA />
      <FAQs />
    </Layout>
  );
}
