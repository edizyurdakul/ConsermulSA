import { CallToAction, CommonHero, Block, BlockReverse } from "../components/Sections";

const ProjectsPage = () => {
  return (
    <main>
      <section>
        <CommonHero
          title="Projects"
          paragraph="Provide your customers a story they would enjoy keeping in mind the objectives of your website. Pay special
      attention to the tone of voice. Try to win the customers' trust by being positive"
          noAction="true"
        />
      </section>
      <section>
        <Block
          title="Project 1"
          paragraph="Provide your customers a story they would enjoy keeping in mind the objectives of your website. Pay special
            attention to the tone of voice. Try to win the customers' trust by being positive"
        />
        <BlockReverse
          title="Project 2"
          paragraph="Provide your customers a story they would enjoy keeping in mind the objectives of your website. Pay special
            attention to the tone of voice. Try to win the customers' trust by being positive"
        />
        <Block
          title="Project 3"
          paragraph="Provide your customers a story they would enjoy keeping in mind the objectives of your website. Pay special
            attention to the tone of voice. Try to win the customers' trust by being positive"
        />
        <BlockReverse
          title="Project 4"
          paragraph="Provide your customers a story they would enjoy keeping in mind the objectives of your website. Pay special
            attention to the tone of voice. Try to win the customers' trust by being positive"
        />
      </section>
      <section>
        <CallToAction />
      </section>
    </main>
  );
};

export default ProjectsPage;
