import {
  PrimaryButton,
  SecondaryButton,
  SecondaryOutlinedButton,
} from "../components/Buttons";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="HACK-R-PLAY" description="A hackathon hosted by ReactPlay">
      <div>hello world</div>
      <PrimaryButton>Register +</PrimaryButton>
      <SecondaryButton>Register +</SecondaryButton>
      <SecondaryOutlinedButton>Register +</SecondaryOutlinedButton>
    </Layout>
  );
}
