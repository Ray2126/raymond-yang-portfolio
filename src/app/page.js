import Image from "next/image";

export default function Home() {
  return (
    <section>
      <header className="flex items-center space-x-12 mb-12">
        <Image
          src="/raymond.jpeg"
          alt="Picture of Me"
          width={142}
          height={142}
          priority
          quality={100}
        />
        <h1 className="text-4xl">Hey, I'm Raymond 👋 <br></br>I'm a Full Stack Software Engineer.</h1>
      </header>
      <article className="flex flex-col space-y-4">
        <p>I'm based in Auckland, New Zealand and I specialise in crafting robust and dynamic web applications. Currently, I work at centrapay, where I leverage my expertise in both front-end and back-end technologies to deliver exceptional digital payments solutions all over New Zealand.</p>

        <h2>Skills and Expertise</h2>

        <ul className="text-gray-400">
          <li>Front-End: HTML, CSS, JavaScript, Vue.js, Vuex, React.js, Next.js</li>
          <li>Back-End: Node.js, Python, Python Flask</li>
          <li>DevOps: Docker, AWS</li>
          <li>Databases: MongoDB, MySQL, DynamoDB</li>
          <li>Testing: Jest, Cypress, Cucumber, Testing Library</li>
        </ul>

        <h2>Education</h2>

        <p>Bachelors Degree in Computer from the University of Auckland</p>

        <h2>Interests and Hobbies</h2>

        <p>Outside of work, I enjoy staying active through regular workouts, which help me maintain a balanced lifestyle. Cooking is another passion of mine, allowing me to experiment with flavors and techniques in the kitchen. Additionally, I am an avid gamer, finding joy and relaxation in immersive gaming experiences.</p>

        <h2>Let's Connect</h2>

        <p>I’d love to connect and discuss potential collaborations or opportunities. Feel free to reach out to me via email or connect with me on LinkedIn. Don’t forget to check out my portfolio to see some of my latest projects.</p>
      </article>
    </section>
  );
}
