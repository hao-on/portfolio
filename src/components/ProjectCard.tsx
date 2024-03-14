import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader } from '@/components/ui/card';
import { Github, Link2Icon } from 'lucide-react';
import { Badge } from './ui/badge';

export interface Project {
  image: string;
  category: string;
  name: string;
  description: string;
  link?: string;
  github: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className='group overflow-hidden relative'>
      <CardHeader className='p-0'>
        {/* image */}
        <div className='relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden'>
          <Image
            className='absolute bottom-0 shadow-2xl'
            src={project.image}
            width={247}
            height={250}
            alt=''
            priority
          />
          {/* buttons */}
          <div className='flex gap-x-4'>
            {project.link && (
              <Link
                href={project.link}
                className='bg-black w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Link2Icon className='text-white' />
              </Link>
            )}
            <Link
              href={project.github}
              className='bg-black w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300'
              rel='noopener noreferrer'
              target='_blank'
            >
              <Github className='text-white' />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className='h-full px-8 py-6'>
        <Badge className='uppercase text-sm font-medium mb-2 absolute top-4 left-5'>
          {project.category}
        </Badge>
        <h4 className='h4 mb-1'>{project.name}</h4>
        <p className='text-muted-foreground text-lg'>{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
