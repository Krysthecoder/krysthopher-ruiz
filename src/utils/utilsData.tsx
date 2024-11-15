// Here is all the content of my website, links, files links, etc.
interface subMenuItems {
  name: string;
  link: string;
}

interface aboutContent {
  title: string;
  content: string;
}

interface skillsContent {
  title: string;
  content: string[];
  image: string;
}

interface projectsContent {
  title: string;
  technologies: string[];
  image: string;
  content: string;
}

interface utilsData {
  devName: string;
  mainLanguage: string;
  subMenuItems: subMenuItems[];
  aboutContent: aboutContent[];
  skillsContent: skillsContent[];
  certificatesContent: [];
  projectsContent: projectsContent[];
}

export const utilsData: utilsData = {
  devName: 'krysthopher ruiz',
  mainLanguage: 'JavaScript TypeScript',
  subMenuItems: [
    { name: 'about', link: '#about' },
    { name: 'skills', link: '#' },
    { name: 'projects', link: '#' },
    { name: 'services', link: '#' },
    { name: 'certifications', link: '#' },
    { name: 'download CV', link: '#' },
    { name: 'contact Me', link: '#' }
  ],
  aboutContent: [
    {
      title: 'Who I am:',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      title: 'What I love:',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      title: 'What I am working on:',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ],
  skillsContent: [
    {
      title: 'Web Technologies',
      content: [
        'HTML5 & CSS3',
        'JavaScript',
        'TypeScript',
        'Libraries',
        'FrameWorks'
      ],
      image:
        'https://res.cloudinary.com/dhkjclfht/image/upload/c_scale,w_auto/q_auto/f_webp,fl_awebp/v1727813764/cld-sample-5'
    },
    {
      title: 'Web Technologies',
      content: ['Skill 1', 'Skill 2', 'Skill 3'],
      image:
        'https://res.cloudinary.com/dhkjclfht/image/upload/c_scale,w_auto/q_auto/f_webp,fl_awebp/v1727813764/cld-sample-5'
    },
    {
      title: 'Web Technologies',
      content: ['Skill 1', 'Skill 2', 'Skill 3'],
      image:
        'https://res.cloudinary.com/dhkjclfht/image/upload/c_scale,w_auto/q_auto/f_webp,fl_awebp/v1727813764/cld-sample-5'
    }
  ],
  certificatesContent: [],
  projectsContent: [
    {
      title: 'Dentora Dental Clinic',
      technologies: ['React', 'Tailwind CSS', 'Material UI', 'YUP', 'Formik'],
      image:
        'https://res.cloudinary.com/dhkjclfht/image/upload/c_scale,w_auto/q_auto/f_webp,fl_awebp/v1727813764/cld-sample-5',
      content: 'Dental appointment management system.'
    },
    {
      title: 'Dentora Dental Clinic',
      technologies: ['React', 'Tailwind CSS', 'Material UI', 'YUP', 'Formik'],
      image:
        'https://res.cloudinary.com/dhkjclfht/image/upload/c_scale,w_auto/q_auto/f_webp,fl_awebp/v1727813764/cld-sample-5',
      content: 'Lorem ipsum dolor sit amet.'
    },
    {
      title: 'Dentora Dental Clinic',
      technologies: ['React', 'Tailwind CSS', 'Material UI', 'YUP', 'Formik'],
      image:
        'https://res.cloudinary.com/dhkjclfht/image/upload/c_scale,w_auto/q_auto/f_webp,fl_awebp/v1727813764/cld-sample-5',
      content: 'Lorem ipsum dolor sit amet.'
    }
  ]
};
