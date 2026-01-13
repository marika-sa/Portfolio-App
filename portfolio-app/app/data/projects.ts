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
        description: "A terminal based payroll management system designed to streamline employee salary processing and reporting.",
        tag: "Apprenticeship",
        icons: [
            { src: "/icons/python.png", alt: "Python" },
        ],
        video: "https://www.youtube.com/embed/7qF3urBfggU",
        requirements: "In the project brief document the client outlined that the focus of the program is to allow the HR department to access and process the payroll activities, on either a weekly, bi-weekly, or monthly basis. The client wanted the application to have the function of viewing payslips of current employees, adding new employees and viewing the new employees’ payslips. I have also added a few other small features like: viewing and printing payslips of all current employees, showing the total annual pay and the total monthly pay. Another feature that I added was the help function. This feature provides the user with a clearer explanation of the options they have available. Lastly, the final feature that was added was the exit feature, which allows the users to exit the program with more ease.",
        process: "Creating algorithms for accounting applications is pretty challenging, as you have to consider and use all the rules, and formulas required to work out all the different types of taxes. Since I do not specialise in accounting, I had to outsource the formulas. Revenue.ie was the main source I used for all the necessary formulas and information regarding tax calculations. Once I had compiled a list of formulas and all the tax brackets, I moved onto creating a data requirements table. The table specified all the variables I would need for the formulas, but also for displaying the employee data and payslip. This has provided me with a guide during the development process.",
        outcomes: "The current program performs all the functionalities specified in the requirements, and with the features requested. Even though the project complies with the project specifications and requirements, there are functions that I would improve on in the future. An addition of a database to store new and current employees, and their data, would be a significant improvement to the current system. Overall the program works how it was intended and performs all the functions specified in the project brief, which is a success.",
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