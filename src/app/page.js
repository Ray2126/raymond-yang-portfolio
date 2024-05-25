import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <section>
      <header className="flex flex-col md:flex-row items-center space-y-4 md:space-x-12 mb-12">
        <Image
          src="/raymond.jpeg"
          alt="Picture of Me"
          width={142}
          height={142}
          priority
          quality={100}
        />
        <h1 className="text-3xl md:text-4xl">Hey, I&apos;m Raymond 👋 <br></br>I&apos;m a Full Stack Software Engineer.</h1>
      </header>
      <article className="flex flex-col space-y-4">
        <p>I&apos;m based in Auckland, New Zealand and I specialise in crafting robust and dynamic web applications. Currently, I work at centrapay, where I leverage my expertise in both front-end and back-end technologies to deliver exceptional digital payments solutions all over New Zealand.</p>

        <h2>Skills and Expertise</h2>

        <ul>
          <li>Front-End: HTML, CSS, JavaScript, Vue.js, Vuex, React.js, Next.js</li>
          <li>Back-End: Node.js, Python, Python Flask</li>
          <li>DevOps: Docker, AWS</li>
          <li>Databases: MongoDB, MySQL, DynamoDB</li>
          <li>Testing: Jest, Cypress, Cucumber, Testing Library</li>
        </ul>

        <h2>Education</h2>

        <p>Bachelors Degree in Computer Science from the University of Auckland</p>

        <h2>Interests and Hobbies</h2>

        <p>Outside of work, I enjoy staying active through regular workouts, which help me maintain a balanced lifestyle. Cooking is another passion of mine, allowing me to experiment with flavors and techniques in the kitchen. Additionally, I am an avid gamer, finding joy and relaxation in immersive gaming experiences.</p>

        <h2>Let&apos;s Connect</h2>

        <p>I&apos;d love to connect and discuss potential collaborations or opportunities. Feel free to reach out to me via <Link href="mailto:raymondyang@outlook.co.nz">email</Link>. Don&apos;t forget to check out my portfolio to see some of my latest projects.</p>
      </article>
    </section>
  );
}
