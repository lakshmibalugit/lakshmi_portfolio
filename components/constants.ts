import { BiBadge, BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { BsDatabase } from "react-icons/bs";
import { FaCodepen, FaLinkedin, FaReact } from "react-icons/fa";
import { SiApachehadoop, SiApachespark, SiAwslambda, SiHive, SiJavascript, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

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
    // {
    //     id: 5,
    //     url: "reviews",
    //     label: 'Testimonals'
    // },
    {
        id: 5,
        url: "contact",
        label: 'Contact'
    },
];

export const SERVICES = [
    {
        id: 1,
        icon: '/images/s2.png',
        name: 'Data Analysis',
        description: 'Transforming raw data into meaningful insights that drive strategic business decisions.',
        dataAosDelay: '100',
    },
    {
        id: 2,
        icon: '/images/s1.png',
        name: 'Business Intelligence',
        description: 'Creating compelling visualizations and dashboards to unlock hidden patterns in your data.',
        dataAosDelay: '',
    },
    {
        id: 3,
        icon: '/images/s4.png',
        name: 'Technical Solutions',
        description: 'Providing expert technical guidance and resolving complex issues with precision and care.',
        dataAosDelay: '200',
    },
    {
        id: 4,
        icon: '/images/s3.png',
        name: 'Data Storytelling',
        description: 'Communicating data insights through compelling narratives and persuasive presentations.',
        dataAosDelay: '300',
    }
]

export const EXPERIENCES = [
    {
        id: 1,
        icon: BsDatabase,
        role: 'Senior Data Engineer',
        desc: 'Led enterprise-wide analytics initiatives, designing data pipelines and dashboards that improved decision-making for 50+ stakeholders. Utilized Python, SQL, and Tableau to drive an increase in operational efficiency.'
    },
    {
        id: 2,
        icon: FaCodepen,
        role: 'Data Engineer',
        desc: 'Designed and maintained scalable Hadoop data pipelines using Sqoop, Hive, and PySpark, optimizing data migration, query performance, and integrating outputs with AWS S3 while ensuring production monitoring and issue resolution.'
    },
    {
        id: 3,
        icon: FaReact,
        role: 'Data Analyst',
        desc: 'Designed a software product prototype, analyzed datasets using Excel, Pandas, and Spark (DataFrames/RDDs) across multiple data formats, and contributed to feature ideation and UX design through wireframes and prototypes for web and mobile applications.'
    },
]

export const EDUCATION = [
    {
        id: 1,
        icon: BiBadge,
        role: 'Master of Engineering in Computer Engineering',
        desc: 'Univeristy of Windsor, Windsor, ON, Canada'
    },
    {
        id: 2,
        icon: FaReact,
        role: 'Bachelor of Engineering in Electronics and Instrumentation',
        desc: 'Anna University, Chennai, Tamil Nadu, India'
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
        Icon: BsDatabase,
        percent: '90',
        name: 'SQL',
    },
    {
        id: 2,
        Icon: SiPython,
        percent: '80',
        name: 'Python',
    },
    {
        id: 3,
        Icon: SiReact,
        percent: '80',
        name: 'Unix',
    },
    {
        id: 4,
        Icon: SiApachehadoop,
        percent: '80',
        name: 'Hadoop',
    },
    {
        id: 5,
        Icon: SiHive,
        percent: '80',
        name: 'Hive',
    },
    {
        id: 6,
        Icon: SiApachespark,
        percent: '80',
        name: 'Spark',
    },
    {
        id: 7,
        Icon: SiAwslambda,
        percent: '70',
        name: 'AWS/GCP/Azure',
    },
]

export const REVIEWS = [
    {
        id: 1,
        image: '/images/blank_headshot.jpg',
        name: 'Sarah Johnson',
        role: 'Analytics Manager, Fortune 500 Tech',
        text: 'Lakshmi transformed our data landscape. Her insights drove strategic decisions that improved our quarterly revenue by 40%. She has exceptional attention to detail and an incredible ability to communicate complex data to non-technical stakeholders.',
    },
    {
        id: 2,
        image: '/images/blank_headshot.jpg',
        name: 'Michael Chen',
        role: 'Director, Data Solutions Inc.',
        text: 'Working with Lakshmi was a game-changer. Her SQL optimization techniques reduced our query times by 60%, and her dashboards became the gold standard across our organization. Highly recommended for any data project.',
    },
    {
        id: 3,
        image: '/images/blank_headshot.jpg',
        name: 'Emma Rodriguez',
        role: 'Support Director, Global Tech Solutions',
        text: 'Lakshmi combines technical expertise with exceptional customer support skills. She resolved our most complex issues with ease and educated our team along the way. A true professional.',
    },
]

export const BLOGS = [
    {
        id: 1,
        image: '/images/blog_2_512.jpg',
        title: 'Advanced SQL Optimization Techniques for Big Data',
        date: 'March 15 2024',
        tags: ['SQL', 'Database'],
        url: '#'
    },
    {
        id: 2,
        image: '/images/blog3.jpg',
        title: 'From Data to Decisions: Mastering Data Storytelling',
        date: 'February 28 2024',
        tags: ['Analytics', 'Visualization'],
        url: '#'
    },
    {
        id: 3,
        image: '/images/blog1.jpg',
        title: 'Python for Data Analysis: Tools and Best Practices',
        date: 'January 20 2024',
        tags: ['Python', 'Data Science'],
        url: '#'
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
        info: 'lakshmibalu2019@gmail.com'
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
        url: 'https://www.linkedin.com/in/lakshmi-balu/',
    }
]