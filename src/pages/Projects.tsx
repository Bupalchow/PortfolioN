import { Link } from 'lucide-react';

const projects = [
  {
    title: 'Level Up Design Studio',
    description: 'Designed and developed a responsive portfolio website for an interior design studio with experienced architects. Implemented custom image galleries, project showcases, and contact forms using React and Tailwind CSS.',
    link: 'level-up-omega.vercel.app/',
    image: '/lvlup.png'
  },
  {
    title: 'Medical Analysis',
    description: 'An AI-driven website that stores and analyzes patient\'s medical reports and provides personalized diet plans, featuring a custom chatbot for user queries. Developed using Nextjs, Typescript, Nodejs, Firebase and Google Gemini API.',
    link: 'medicalanalysis.vercel.app/',
    image: '/medical.png'
  },
  {
    title: 'Master Anything',
    description: 'AI-based personalized course generator that builds a course for any given topic. Developed using Reactjs, Javascript, TailwindCSS and Mistral API.',
    link: 'master-anything.vercel.app/',
    image: '/Master.png'
  },
  {
    title: 'Boardly',
    description: 'An ed-tech platform offering resources for CBSE board exam preparation. Led the frontend development of the website.',
    link: 'www.boardly.in/',
    image: '/boardly.png'
  },
  {
    title: 'Transform Journey',
    description: ' An AI web app that generates 30-day calendar to achieve your goals. It provides daily tasks and motivational quotes to keep you on track. Developed using Reactjs, TailwindCSS, Nodejs and OpenAI API.',
    link: 'tranformation-journy.vercel.app/',
    image: '/transform.png'
  },
];

const Projects = () => {
  return (
    <div className="py-16 sm:py-20">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8">
        Things I've made trying to put my dent in the universe.
      </h1>
      
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        I've worked on tons of little projects over the years but these are the ones that I'm most
        proud of. Many of them are open-source, so if you see something that piques your interest,
        check out the code and contribute if you have ideas for how it can be improved.
      </p>
      
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, link, image }: {
  title: string;
  description: string;
  link: string;
  image: string;
}) => {
  return (
    <div className="group relative flex flex-col items-start">
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
      <a
        href={`https://${link}`}
        target='_blank'
        className="mt-4 inline-flex items-center text-sm font-medium text-teal-500 dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-500"
      >
        <Link className="w-4 h-4 mr-2" />
        {link}
      </a>
    </div>
  );
};

export default Projects;