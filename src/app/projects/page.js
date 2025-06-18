import Image from "next/image";
import Link from "next/link";
import { FaGooglePlay, FaGithub, FaAppStore } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

const projects = [
  {
    name: 'iSQROLL',
    description: 'iSQROLL is a marketplace app built by Kiwis, for Kiwis. A community platform that provides a safe buying and selling environment with easy communication between traders. Hired as a freelancer. Built the backend, frontend, Android and iOS apps, and handled deployments. Liased with clients to set requirements and expectations.',
    links: [
      { icon: LuExternalLink, text: 'Demo', href: 'https://isqroll.co.nz/home' },
      { icon: FaGooglePlay, text: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.isqroll&hl=en' },
      { icon: FaAppStore, text: 'App Store', href: 'https://apps.apple.com/nz/app/isqroll/id6479675690' },
    ],
    demoIcon: LuExternalLink,
    demoText: 'Demo',
    demoLink: 'https://www.capitalise.space/projects/654d7ef11d6ecfc86ae1e10c',
    githubLink: 'https://github.com/uoa-compsci399-s2-2023/capstone-project-team-9',
    technologies: ['Node.js', 'React Native', 'Metro', 'Vue.js', 'Microsoft Azure'],
    image: '/isqroll.png',
  },
  {
    name: 'Tabs',
    description: 'Tabs is a mobile app that uses OCR technology to convert handwritten notes into digital text, streamlining file organization and task management by integrating with Microsoft APIs. Developed by a team of six for a final year Computer Science project, it received the Excellence award from the Computer Science department.',
    links: [
      { icon: LuExternalLink, text: 'Demo', href: 'https://www.capitalise.space/projects/654d7ef11d6ecfc86ae1e10c' },
      { icon: FaGithub, text: 'Source Code', href: 'https://github.com/uoa-compsci399-s2-2023/capstone-project-team-9' },
    ],
    demoIcon: LuExternalLink,
    demoText: 'Demo',
    demoLink: 'https://www.capitalise.space/projects/654d7ef11d6ecfc86ae1e10c',
    githubLink: 'https://github.com/uoa-compsci399-s2-2023/capstone-project-team-9',
    technologies: ['Javascript', 'React Native', 'Expo', 'Microsoft Graph API', 'AWS Textract'],
    image: '/tabs.webp',
  },
  {
    name: 'Crypto Tracker',
    description: 'Crypto Tracker is an Android app that connects to the CoinGecko API to display the top 10 cryptocurrencies based on their market capitalization. It provides market movement data for a specific time period. Users have the flexibility to customize the time period and view the top coins for the day, week, month, or year.',
    links: [
      { icon: FaGooglePlay, text: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.cryptotrackerapp123' },
      { icon: FaGithub, text: 'Source Code', href: 'https://github.com/Ray2126/crypto-tracker' },
    ],
    demoIcon: FaGooglePlay,
    demoText: 'Google Play',
    demoLink: 'https://play.google.com/store/apps/details?id=com.cryptotrackerapp123',
    githubLink: 'https://github.com/Ray2126/crypto-tracker',
    technologies: ['Javascript', 'React Native', 'Expo', 'CoinGecko API'],
    image: '/cryptoTracker.webp',
  },
];

export default function Projects() {
  return (
    <div className="space-y-12">
      <h1>Projects</h1>
      <div className="space-y-12">
        {projects.map(project => (
          <div key={project.name} className="flex space-x-8">
            <Image className="hidden md:block max-w-48" src={project.image} alt={project.name} width={800} height={500} quality={100} />
            <div className="border-2 rounded-2xl border-color-primary flex items-center md:space-x-4 px-2 pt-2">
              <div className="flex flex-col h-full space-y-4 my-4">
                <div className="flex flex-col items-center md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                  <h2>{project.name}</h2>
                  <div className="flex space-x-1 sm:space-x-4">
                    {project.links.map(link => (
                      <Link key={link.text} className="btn styled-link" target="_blank" href={link.href}>
                        <span className="mr-1">{link.icon()}</span>
                        <span>{link.text}</span>
                      </Link>
                    ))}
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
          </div>
        ))}
      </div>
    </div>
  );
}
