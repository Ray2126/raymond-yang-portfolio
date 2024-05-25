import Image from "next/image";
import Link from "next/link";
import { FaGooglePlay, FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

const projects = [
  {
    name: 'Crypto Tracker',
    description: 'Crypto Tracker is an Android app that connects to the CoinGecko API to display the top 10 cryptocurrencies based on their market capitalization. It provides market movement data for a specific time period. Users have the flexibility to customize the time period and view the top coins for the day, week, month, or year.',
    demoIcon: FaGooglePlay,
    demoText: 'Google Play', 
    demoLink: 'https://play.google.com/store/apps/details?id=com.cryptotrackerapp123',
    githubLink: 'https://github.com/Ray2126/crypto-tracker',
    technologies: ['Javascript', 'React Native', 'Expo', 'CoinGecko API'],
    image: '/cryptoTracker.webp',
  },
  {
    name: 'Tabs',
    description: 'Tabs is a mobile app that uses OCR technology to convert handwritten notes into digital text, streamlining file organization and task management by integrating with Microsoft APIs. Developed by a team of six for a final year Computer Science project, it received the Excellence award from the Computer Science department.',
    demoIcon: LuExternalLink,
    demoText: 'Demo', 
    demoLink: 'https://www.capitalise.space/projects/654d7ef11d6ecfc86ae1e10c',
    githubLink: 'https://github.com/uoa-compsci399-s2-2023/capstone-project-team-9',
    technologies: ['Javascript', 'React Native', 'Expo', 'Microsoft Graph API', 'AWS Textract'],
    image: '/tabs.webp',
  },
];

export default function Projects() {
  return (
    <div className="space-y-12">
      <h1>Projects</h1>
      <div className="space-y-12">
        {projects.map(project => (
          <div key={project.name} className="border-2 rounded-2xl border-color-primary flex items-center min-h-80 md:space-x-4 px-2 md:pl-0">
              <Image className="hidden md:block rounded-l-2xl" src={project.image} alt={project.name} width={200} height={500} quality={100} />

            <div className="flex flex-col h-full space-y-4 my-4">
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <h2>{project.name}</h2>
                <div className="flex space-x-1 sm:space-x-4">
                  <Link className="btn" target="_blank" href={project.demoLink}>
                    <span className="mr-1">{project.demoIcon()}</span>
                    <span>{project.demoText}</span>
                  </Link>
                  <Link className="btn" target="_blank" href={project.githubLink}>
                    <span className="mr-1"><FaGithub /></span>
                    <span>Source Code</span>
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <p>{project.description}</p>
                <p className="flex flex-wrap items-center space-x-3">
                  {project.technologies.map(t => (
                    <span key={t} className="pill mb-1">{t}</span>
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
