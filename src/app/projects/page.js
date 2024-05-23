import Image from "next/image";
import Link from "next/link";
import { FaGooglePlay, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 'crypto-tracker',
    name: 'Crypto Tracker',
    description: 'Crypto Tracker is an Android app that connects to the CoinGecko API to display the top 10 cryptocurrencies based on their market capitalization. It provides market movement data for a specific time period. Users have the flexibility to customize the time period and view the top coins for the day, week, month, or year.',
    deployedLink: 'https://play.google.com/store/apps/details?id=com.cryptotrackerapp123',
    githubLink: 'https://github.com/Ray2126/crypto-tracker',
    technologies: ['React Native', 'Expo', 'CoinGecko API', 'Jest'],
    image: '/cryptoTracker.png',
  }
];

export default function Projects() {
  return (
    <div className="space-y-12">
      <h1>Projects</h1>
      <div>
        {projects.map(project => (
          <div key={project.id} className="border-2 rounded-2xl border-color-primary flex items-center min-h-72 md:space-x-4 px-2 md:pl-0">
              <Image className="hidden md:block rounded-l-2xl" src={project.image} alt={project.name} width={200} height={500} quality={100} />

            <div className="flex flex-col h-full space-y-4 my-4">
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <h2>{project.name}</h2>
                <div className="flex space-x-1 sm:space-x-4">
                  <Link className="btn" target="_blank" href={project.deployedLink}>
                    <span className="mr-1"><FaGooglePlay /></span>
                    <span>Google Play</span>
                  </Link>
                  <Link className="btn" target="_blank" href={project.githubLink}>
                    <span className="mr-1"><FaGithub /></span>
                    <span>Source Code</span>
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <p>{project.description}</p>
                <p className="flex flex-wrap space-x-3">
                  {project.technologies.map(t => (
                    <div key={t} className="pill">{t}</div>
                  ))}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
