import { BiBadge, BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { BsDatabase } from "react-icons/bs";
import { FaCodepen, FaLinkedin, FaReact } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

export const NAVLINKS = [
    {
        id: 1,
        url: "home",
        label: 'Home'
    },
    {
        id: 3,
        url: "background",
        label: 'Background'
    },
    {
        id: 4,
        url: "skills",
        label: 'Skills'
    },
    {
        id: 5,
        url: "reviews",
        label: 'Testimonals'
    },
    {
        id: 6,
        url: "contact",
        label: 'Contact'
    },
];

export const SERVICES = [
    {
        id: 1,
        icon: '/images/s2.png',
        name: 'Web and Mobile App',
        description: 'Designing interfaces that are intuitive, efficient, and enjoyable to use.',
        dataAosDelay: '100',
    },
    {
        id: 2,
        icon: '/images/s1.png',
        name: 'UI and UX',
        description: 'Transforming concepts into user-friendly, visually striking digital products.',
        dataAosDelay: '',
    },
    {
        id: 3,
        icon: '/images/s4.png',
        name: 'SEO & CWV',
        description: 'Optimizing performance and visibility through SEO and Core Web Vitals excellence.',
        dataAosDelay: '200',
    },
    {
        id: 4,
        icon: '/images/s3.png',
        name: 'Career Guidance',
        description: 'Helping professionals navigate their career journey with clarity and confidence.',
        dataAosDelay: '300',
    }
]

export const EXPERIENCES = [
    {
        id: 1,
        icon: FaCodepen,
        role: 'Senior Software Engineer, realtor.com',
        desc: 'Led front-end initiatives using React, Next.js, GraphQL, and Node.js—building micro frontends, improving performance, and streamlining sprint processes as an interim tech lead'
    },
    {
        id: 2,
        icon: FaReact,
        role: 'Full stack engineer, IHS Markit',
        desc: 'Developed performant React frontends, optimized security and load times, and enhanced data visualization using React, Node.js, .NET MVC5, and SQL'
    },
    {
        id: 3,
        icon: BsDatabase,
        role: 'Software Engineer, Accenture solutions',
        desc: 'Contributed to critical healthcare projects with MEAN stack, .NET, and Java, ensuring code quality through strict development practices'
    },
]

export const EDUCATION = [
    {
        id: 1,
        icon: BiBadge,
        date: 'August 2019 - December 2020',
        role: 'Masters in Applied Computing',
        desc: 'Univeristy of Windsor, Windsor, ON, Canada'
    },
    {
        id: 2,
        icon: FaReact,
        date: 'August 2012 - August 2016',
        role: 'Bachelors in Computer Science and Engineering',
        desc: 'Panimalar Engineering College, Chennai, Tamil Nadu, India'
    },
]

export const PROJECTS = [
    {
        id: 1,
        img: '/images/p1.jpg',
        name: 'Modern finance dashboard',
        tags: 'Apps, UI/UX',
        dataAosDelay: '0'
    },
    {
        id: 2,
        img: '/images/p2.jpg',
        name: 'Portfolio Website for Creatives',
        tags: 'Bradning , Motion',
        dataAosDelay: '100'
    },
    {
        id: 3,
        img: '/images/p3.jpg',
        name: 'Brand Identity for Startups',
        tags: 'Branding , UI/UX',
        dataAosDelay: '200'
    },
    {
        id: 4,
        img: '/images/p4.jpg',
        name: 'SaaS Dashboard Development',
        tags: 'Apps, UI/UX',
        dataAosDelay: '300'
    },

]

export const SKILLS = [
    {
        id: 1,
        Icon: SiJavascript,
        percent: '89',
        name: 'JavaScript',
    },
    {
        id: 2,
        Icon: SiReact,
        percent: '92',
        name: 'React',
    },
    {
        id: 3,
        Icon: SiNextdotjs,
        percent: '90',
        name: 'Next.js',
    },
    {
        id: 4,
        Icon: SiNodedotjs,
        percent: '88',
        name: 'Node.js',
    },
    {
        id: 5,
        Icon: SiTailwindcss,
        percent: '50',
        name: 'Tailwind CSS',
    },
    {
        id: 6,
        Icon: SiTypescript,
        percent: '89',
        name: 'TypeScript',
    },
]

export const REVIEWS = [
    {
        id: 1,
        image: '/images/blank_headshot.jpg',
        name: 'Kash',
        role: 'Senior Software Engineer, Tazwiz',
        text: 'He is ambitious, creative, team player and above all passionate for knowledge. He has always gone an extra mile to find the right solutions and meet the deadlines, even if it meant working extra hours',
    },
    {
        id: 2,
        image: '/images/blank_headshot.jpg',
        name: 'Vibin',
        role: 'Tech lead, Tazwiz',
        text: 'Vicky has a knack for grasping things quickly. He was a good team player and can manage his tasks independently with little to no help needed from the leads',
    },
    {
        id: 3,
        image: '/images/blank_headshot.jpg',
        name: 'Francisco',
        role: 'Tech lead, realtor.com',
        text: `He has a native initiative and curiosity, and he doesn't hesitate to challenge ideas and explore new alternatives`,
    },
]

export const BLOGS = [
    {
        id: 1,
        image: '/images/blog_2_512.jpg',
        title: 'JavaScript beginner introduction',
        date: 'Febraury 26 2020',
        tags: ['JavaScript'],
        url: 'https://dev-in-the-web.medium.com/things-to-know-before-stepping-in-to-javascript-web-development-e40fa3d1ac74'
    },
    {
        id: 2,
        image: '/images/blog3.jpg',
        title: 'React basics',
        date: 'April 1 2020',
        tags: ['React'],
        url: 'https://dev-in-the-web.medium.com/whats-the-buzz-about-react-bac9e38f2a8b'
    },
    {
        id: 3,
        image: '/images/blog1.jpg',
        title: 'Angular vs React vs Vue',
        date: 'May 12 2020',
        tags: ['Angular', 'React', 'Vue'],
        url: 'https://dev-in-the-web.medium.com/angular-vs-react-vs-vue-a77645361ada'
    },
]

export const CONTACT = [
    {
        id: 1,
        Icon: BiPhone,
        info: '407-888-8888'
    },
    {
        id: 2,
        Icon: BiEnvelope,
        info: 'vigneshwaran0310@gmail.com'
    },
    {
        id: 3,
        Icon: BiMap,
        info: 'Toronto, ON, Canada'
    }
]

export const SOCIALS = [
    {
        id: 1,
        Icon: FaLinkedin,
        hoverClass: 'hover:bg-blue-800',
        url: 'https://www.linkedin.com/in/balasubv/',
    },
    {
        id: 2,
        Icon: FaXTwitter,
        hoverClass: 'hover:bg-gray-800',
        url: 'https://x.com/devIntheWeb',
    },
]