import Layout from "../components/Layout";

const TechCreditPage = () => {
  return(
    <Layout
      title="Tech Stack & Credits"
      description="Know the technology stack and the credits."
    >
      <div>
        <h2>Tech Stack</h2>
        <ul>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
        </ul>
      

        <h2>Credits</h2>
        <ul>
          <li>Freepick1</li>
          <li>Freepick2</li>
        </ul>
      </div>

    </Layout>
  );
};

export default TechCreditPage;
