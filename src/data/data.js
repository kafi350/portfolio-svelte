const META = {
	creation_year: 2024,
	src: 'https://github.com/kafi350/portfolio-svelte.git'
};

const PERSONAL = {
	name: 'Abdullahil Kafi',
	first_name: 'Abdullahil',
	surname: 'Kafi',
	role: 'AI Engineer | Software Engineer', 
	introduction:
		'Experienced software engineer with a strong background in Python, Go, PHP, and SQL optimization, aiming to advance career progress through impactful API development and system migration initiatives. A demonstrable history of improving team efficiency by employing frameworks such as React and Django. A record of contributing to agile teams by fostering innovation and resolving intricate issues, leading to enhanced operations and pioneering solutions. Proficient in developing and refining new systems, with a substantial emphasis on analytical problem-solving and perpetual advancement.',
	location: 'Berlin, Germany'
};

const SKILLS = {
	specializations: [
		'Software Engineering',
		'Data Engineering',
		'Machine Learning',
		'Deep Learning',
		'Full-Stack Development',
		'AI Engineering'
	],
	programmingLanguages: ['Python', 'Java', 'PHP', 'Go', 'SQL', 'NoSql', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
	technologies: [
		'PyTorch',
		'TensorFlow',
		'Jupyter',
		'SQL Server',
		'Svelte',
		'Sveltekit',
		'React',
		'Next',
		'PHP',
		'Node.js',
		'MongoDB',
		'PostgreSQL',
		'Git'
	]
};

const CONTACT = {
	email: 'kafiabdullahil96@gmail.com',
	github: 'https://github.com/kafi350',
	linkedin: 'https://www.linkedin.com/in/abdullahil-kafi120'
};

const NAVLIST = [
	{ id: 1, url: '/about', label: 'About' },
	{ id: 2, url: '/interests', label: 'Interests' },
	{ id: 3, url: '/contact', label: 'Contact' },
	
];

const ABOUT = {
	paragraphs: [
		"Hi, I'm Abdullahil Kafi, a software engineer with a strong background in Python, Go, PHP, and SQL optimization. I am currently working as a Software Engineer at ASSA ABLOY Group in Berlin, Germany. I have experience in developing and refining new systems, with a substantial emphasis on analytical problem-solving and perpetual advancement.",
	],
		experience: [
			{
				id: 1,
				company: 'ASSA ABLOY Group',
				jobTitle: 'Software Engineer',
				startDate: 'November 2022',
				endDate: 'Present',
				location: 'Berlin',
				description: 'The Bird Home Automation GmbH develops and manufactures high-quality IP video door intercoms. Access control devices, indoor stations and accessories under the trademark DoorBird. It is a part of ASSA Abloy Group. Hands-on experience with Python, PHP, SQL and NoSQL Databases. Collaborate with cross-functional teams to define, design, and ship new features. Increased user engagement by 30% by redesigning the application interface and improving user experience. Designing and implementing RESTful APIs and microservices to support application functionality.',
				photo: { src: '/photos/assa_abloy.webp', alt: 'Logo ASSA ABLOY Group' }
			},
			{
				id: 2,
				company: 'University Hospital Magdeburg',
				jobTitle: 'IT Project Staff (Software Engineer)',
				startDate: 'January 2022',
				endDate: 'October 2022',
				location: 'Magdeburg, Germany',
				description: 'Digitization of clinical information systems. Modeling and executing of automated patient handling. Medical data evaluation and easy data retrieval system. Data exchange using Hl7 among the existing system of Hospital management.',
				photo: { src: '/photos/ukmd.jpg', alt: 'Logo University Hospital Magdeburg' }
			},
			{
				id: 3,
				company: 'Adroit Solutions',
				jobTitle: 'Technical Support Engineer',
				startDate: 'December 2018',
				endDate: 'August 2019',
				location: 'Dhaka, Bangladesh',
				description: 'Improved client operational efficiency through developing web-based IoT frameworks using Angular and React. Increased client operational efficiency through developing IoT solutions on Azure IoT and IBM Watson.',
				photo: { src: '/photos/adroit.png', alt: 'Logo Adroit Solutions' }
			}
		],
	education: [
		{
			id: 1,
			school: 'Otto-von-Guericke University Magdeburg',
			degree: 'Master of Science in Data and Knowledge Engineering',
			graduationDate: '2024',
			photo: { src: '/photos/ovgu.png', alt: 'Otto-von' }
		},
		{
			id: 2,
			school: 'BRAC University',
			degree: 'Bachelor of Science in Computer Science and Engineering',
			graduationDate: 'October 2018',
			photo: { src: '/photos/bracu_logo.webp', alt: 'BRAC University' }
		}
	],
	skills :[
		'Python', 'Java', 'PHP', 'Go', 'SQL', 'JavaScript', 'PyTorch', 'TensorFlow', 'HTML', 'CSS', 'TypeScript',  'Jupyter', 'SQL Server', 'Svelte', 'Sveltekit', 'React', 'Next', 'Node.js', 'MongoDB', 'PostgreSQL', 'Git'
	]
};

const PROJECTS = [
	{
        id: 1,
        title: 'Segmenting Audio Data and Analyzing the Credibility of the Speaker with Gender and Emotion Detection',
        organization: 'OVGU, Magdeburg',
        year: '2023',
        type: 'Master Thesis',
        description: 'Audio segmentation based on energy level of the audio and detecting the noise part. Classification of gender and emotion with deep learning. Analyzing the authenticity of the audio. Explainable data points in each audio modality to ensure AI explainability. Created a Framework (MFAF) tool to visualise and process audio.',
        photo: { src: '/photos/logo_fak_3.png', alt: 'Audio Segmentation' }
    },
    {
        id: 2,
        title: 'Fake Audio Detection using Deep Learning',
        organization: 'OVGU, Magdeburg',
        year: '06/2021 - 10/2021',
        description: 'Synthetic audio detection using deep learning to prevent spoof attacks. Fake Audio Generation using Variational Autoencoder. Fake Audio Detection using CNN (Residual). Scientific evaluation of accuracy.',
        photo: { src: '/photos/project.png', alt: 'Fake Audio Detection' }
    },
    {
        id: 3,
        title: 'MPA Pathway Tool Visualization of Chemical Reactions',
        organization: 'OVGU, Magdeburg',
        year: '07/2021 - 11/2021',
        description: 'Frontend development of a chemical reaction web-application. Built using ReactJS and Graph d3 library. Improved reaction analysis by utilizing Java application to calculate reaction flux.',
        photo: { src: '/photos/project.png', alt: 'Chemical Reactions' }
    },
    {
        id: 4,
        title: 'Integrating GPU Libraries in Database Query Processing',
        organization: 'OVGU, Magdeburg',
        year: '05/2021 - 08/2021',
        description: 'Using GPU to process database queries alongside CPU. OpenCL, CUDA-based database management system. Integrating Boost Compute into the existing system by using VexCL.',
        photo: { src: '/photos/project.png', alt: 'GPU Database' }
    },
    {
        id: 5,
        title: 'Genre Identification on (a subset of) Gutenberg Corpus',
        organization: 'OVGU, Magdeburg',
        year: '06/2020 - 08/2020',
        description: 'Using Machine learning classifying the genres of fictional books. Collected features from fictional corpus to determine genre of the book. Application of four features to train models (LR, Naive Bayes, Random Forest, SGD).',
        photo: { src: '/photos/project.png', alt: 'Genre Identification' }
    },
    {
        id: 6,
        title: 'Artificially Intelligent Smart Mirror',
        organization: 'BRACU, Bangladesh',
        year: '06/2017 - 11/2017',
        description: 'Building an AI based smart mirror using Raspberry Pi and AI libraries. Smart mirror based on Raspberry Pi. Usage of AI library (WIT AI). Backend based on Python. Facial recognition with OpenCV.',
        photo: { src: '/photos/project.png', alt: 'Smart Mirror' }
    }
];

const INTERESTS = {
	medium_posts : [
		{
			id: 1,
			title: 'Building a Dynamic Personal Portfolio with Svelte: A Step-by-Step Guide',
			url: 'https://medium.com/@kafi350/building-a-dynamic-personal-portfolio-with-svelte-a-step-by-step-guide-a37f859b9475'
		},
		{
			id: 2,
			title: 'Amazon SES Service for User validation and marketing services',
			url: 'https://medium.com/@kafi350/amazon-ses-service-for-user-validation-and-marketing-services-84aee481e98c'
		},
		{
			id: 3,
			title: 'Parallel Query Processing using GPUs and the current trend',
			url: 'https://medium.com/@kafi350/parallel-query-processing-using-gpus-and-the-current-trend-8f81b77b38f5'
		},
		{
			id: 4,
			title: 'FD Files to SQL: Automating Data Transformation with Python',
			url: 'https://medium.com/@kafi350/fd-files-to-sql-automating-data-transformation-with-python-cbe8ab0b1c9b'
		},
		{
			id: 5,
			title: 'Transforming Healthcare Data: Introducing HL7toCSV',
			url: 'https://medium.com/@kafi350/transforming-healthcare-data-introducing-hl7tocsv-2cb4ae587b0c',
		}
	],
	hobbies: [
		'Photography', 'Traveling', 'Gaming (FIFA Fan ⚽)', 'Cooking', 'Watching Football ⚽'
	]
};


const DATA = {
	META,
	PERSONAL,
	SKILLS,
	CONTACT,
	NAVLIST,
	ABOUT,
	PROJECTS,
	INTERESTS
};

export default DATA;
