import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max=md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI powered tool. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Illo ipsum tenetur dolor facere. Alias
        commodi aut perspiciatis iure hic rem doloremque similique sed,
        consequatur praesentium, optio culpa id nemo possimus. Ipsa laudantium
        asperiores cumque.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
