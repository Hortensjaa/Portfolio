import {Computer, School, Calculate, AutoAwesome, Celebration, LocalMall, Games, Book, Fax, PsychologyAlt, GitHub, LinkedIn} from '@mui/icons-material'

export const education = [
    {            
        start_year: 2017,
        end_year: 2020,
        title: "High School No. 2 in Brzeg",
        description: "Extended courses of mathematics and physics.",
        is_active: false,
        icon: School
    },
    {            
        start_year: 2020,
        end_year: 2023,
        title: "Mathematics (Wroclaw University)",
        description: `Bachelor's degree with a specialization in teaching. Completed with a good grade and defended thesis titled
            'Examining the positive definiteness of matrices with constant off-diagonal terms'.`,
        is_active: false,
        icon: Calculate
    },
    {            
        start_year: 2022,
        end_year: null,
        title: "Computer science (Wroclaw University)",
        description: `Engineering degree currently in progress. The subjects being undertaken emphasize advanced algorithms 
            and practical applications in the field of software development.`,
        is_active: true,
        icon: Computer
    },
]

export const experience = [
    {
        hashtags: ["django", "python", "web-dev", "backend", "postgresql"],
        title: "Summer Trainee - Python backend developer (Django)",
        detailsString: "Nokia Wroclaw, 07.2022 - 09.2022",
        description: "Development of an error reporting portal implemented in django.",
        responsibilities: [
            "Implement new views to appropriately show data from database",
            "Writing unit tests for the added functionalities",
            "Fixing errors reported by users and implementing suggested improvements",
            "Collaborating with the rest of the team using GitLab",
            "Creating a simple documentation",
            "Presenting progress updates during team meetings on the Teams platform"
        ]
    },
    {
        hashtags: ["mathematics", "algorithms", "teaching", "python", "sql"],
        title: "Tutoring",
        detailsString: "Self employment, 04.2017 - ...",
        description: "Tutoring in STEM subjects - mostly for extended mathematics and computer science matura exam.",
        responsibilities: [
            "Preparing a personalized study plan",
            "Presenting mathematical concepts in an understandable manner",
            "Familiarizing students with key algorithms and their implementation in python",
            "Explaining the basics of relational databases logic",
            "Developing problem-solving and independent learning skills",
        ]
    }
]

export const techstack = [
    {
        hashtags: ["kotlin", "jetpack-compose", "roomdb", "gradle"],
        title: "Android apps development",
        projects: ["Pole planner", "Party game"],
        icons: [<AutoAwesome />, <Celebration />],
    },
    {
        hashtags: ["django", "node.js", "express.js", "socket.io"],
        title: "Web development",
        projects: ["Moria Visuals ecommerce", "Checkers game hub"],
        icons: [<LocalMall />, <Games />],
    },
    {
        hashtags: ["c/c++", "python", "ocaml", "functional-programming"],
        title: "Algorithms",
        projects: ["Prolog interpreter", "Random-access machine simulator", "Textbook for computer science matura exam"],
        icons: [<PsychologyAlt />, <Fax />, <Book />],
    },
]

export const projects = [
    {
        hashtags: ["django", "python", "sqlite", "html/css", "web-dev"],
        title: "Moria Visuals",
        description: "Django project of e-commerce site. I implemented whole shop logic (cart, store etc.) with payment service and automatic emails sender.",
        photo: "/moria.png",
        repo: "https://github.com/Hortensjaa/MoriaVisuals"
    },
    {
        hashtags: ["node.js", "express.js", "socket.io", "bootstrap", "mongodb", "javascript", "web-dev"],
        title: "Checkers game hub",
        description: "Web application for playing interactive checkers game between users in separate rooms.",
        photo: "/checkers.png",
        repo: "https://github.com/mszal449/Socket-Games-Hub"
    },
    {
        hashtags: ["kotlin", "jetpack-compose", "android", "roomdb", "mobile-dev"],
        title: "Pole planner",
        description: "Mobile app for pole dancers to make planning workout sessions easier.",
        photo: "/pole.png",
        repo: "https://github.com/Hortensjaa/Pole_Planner"
    },
    {
        hashtags: ["kotlin", "jetpack-compose", "android", "websockets", "mobile-dev"],
        title: "Party game",
        description: "Party game for my friends group - connection between devices implemented with websockets.",
        photo: "/partygame.png",
        repo: "https://github.com/Hortensjaa/PartyGameApp"
    },
    {
        hashtags: ["java", "swing", "desktop-app"],
        title: "Project management app",
        description: "Desktop app for projects' leaders - enables user to assign tasks to people, set dealines etc.",
        photo: "/project.png",
        repo: "https://github.com/Hortensjaa/PartyGameApp"
    },
    {
        hashtags: ["dune", "ocaml", "functional-programming"],
        title: "Prolog",
        description: "Prolog implementation in OCaml",
        photo: "/prolog.png",
        repo: "https://github.com/Hortensjaa/PartyGameApp"
    },
]

export const personalData = {
    name: "Julia Kulczycka",
    position: "(future) software developer",
    socials: [
        {type: "Github", link: "https://github.com/Hortensjaa", icon: <GitHub/>},
        {type: "LinkedIn", link: "https://www.linkedin.com/in/julia-kulczycka-177968277/", icon: <LinkedIn/>},
    ]
}
