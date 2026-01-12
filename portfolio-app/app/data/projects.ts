export interface Icon {
    src: string;
    alt: string;
}

export interface Project {
    slug: string;
    title: string;
    description: string;
    tag: string;
    icons: Icon[];
    video: string;
    requirements: string;
    process: string;
    outcomes: string;
}

export const projects = [
    {
        slug: "payroll-manager",
        title: "Payroll Manager",
        description: "A comprehensive payroll management system designed to streamline employee salary processing and reporting.",
        tag: "Apprenticeship",
        icons: [
            { src: "/icons/python.png", alt: "Python" },
        ],
        video: "https://www.youtube.com/embed/7qF3urBfggU",
        requirements: "A payroll management system developed using Python and SQLite, featuring employee management, salary calculations, and report generation.",
        process: "Agile methodology with 2-week sprints, daily stand-ups, and bi-weekly retrospectives.",
        outcomes: "Successfully deployed the system in a local environment, receiving positive feedback for its user-friendly interface and efficient functionality.",
    },

    {
        slug: "banking-app",
        title: "Banking App",
        description: "A secure banking application for managing accounts, transactions, and financial services.",
        tag: "Apprenticeship",
        icons: [
            { src: "/icons/csharp.png", alt: "C#" },
            { src: "/icons/dotnet.png", alt: ".NET" },
            { src: "/icons/mysql.png", alt: "MySQL" },
        ],
        video: "https://www.youtube.com/embed/kxOLPuBwK_k",
        requirements: "A banking application developed using Python and SQLite, featuring account management, transaction processing, and financial reporting.",
        process: "Agile methodology with 2-week sprints, daily stand-ups, and bi-weekly retrospectives.",
        outcomes: "Successfully deployed the system in a local environment, receiving positive feedback for its user-friendly interface and efficient functionality.",
    },

    {
        slug: "messaging-app",
        title: "Messaging App",
        description: "A secure messaging application for real-time communication between users.",
        tag: "Apprenticeship",
        icons: [
            { src: "/icons/csharp.png", alt: "C#" },
            { src: "/icons/dotnet.png", alt: ".NET" },
            { src: "/icons/mysql.png", alt: "MySQL" },
        ],
        video: "https://www.youtube.com/embed/ZxFGV4m2k28",
        requirements: "A messaging application developed using Python and SQLite, featuring real-time chat, user authentication, and message history.",
        process: "Agile methodology with 2-week sprints, daily stand-ups, and bi-weekly retrospectives.",
        outcomes: "Successfully deployed the system in a local environment, receiving positive feedback for its user-friendly interface and efficient functionality.",
    },
];