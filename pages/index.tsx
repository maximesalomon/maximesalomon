import Layout from "../components/Layout";

// INDEX
const Index: React.FunctionComponent = () => (
  <Layout title="Home">
    <div className="md:flex px-4 pt-4 md:pt-16">
      <div className="">
        <img
          src="/assets/maxime-salomon.jpg"
          alt="Maxime Salomon"
          className="h-64 rounded-sm"
        />
      </div>
      <div className="md:ml-24">
        <h1 className="text-3xl font-semibold pt-8 md:pt-0">
          Bonjour, I'm Maxime 👋
        </h1>
        <p className="pt-4">27</p>
        <p className="pt-2">France 🇫🇷</p>
        <p className="pt-2">Learning & Building</p>
        <p className="pt-2">
           Founder at{" "}
          <a
            className="hover:underline text-blue-600"
            href="https://croissant.io"
          >
            Croissant
          </a>
        </p>
        <p className="pt-2">
          Previously - Growth Engineer at{" "}
          <a
            className="hover:underline text-pink-600"
            href="https://shotgun.live"
          >
            Shotgun
          </a>.{" "}
          Student at{" "}
          <a
            className="hover:underline text-red-600"
            href="https://lambdaschool.com"
          >
            Lambda School
          </a>{" "}
          + Intern at{" "}
          <a
            className="hover:underline text-blue-600"
            href="https://www.algolia.com"
          >
            Algolia
          </a>
          ,{" "}
          <a
            className="hover:underline text-orange-600"
            href="https://www.ycombinator.com"
          >
            YC W14
          </a>
        </p>
        <p className="pt-2">
          <a
            className="hover:underline"
            href="https://twitter.com/maximesalomon"
          >
            Twitter
          </a>{" "}
          |{" "}
          <a
            className="hover:underline"
            href="https://github.com/maximesalomon"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            className="hover:underline"
            href="https://www.linkedin.com/in/maximesalomon"
          >
            Linkedin
          </a>
        </p>
      </div>
    </div>
  </Layout>
);

export default Index;
