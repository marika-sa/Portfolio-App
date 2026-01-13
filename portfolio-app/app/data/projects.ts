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
    requirements: string[];
    process: string[];
    outcomes: string[];
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
        requirements: ["In the project brief document the client outlined that the focus of the program is to allow the HR department to access and process the payroll activities, on either a weekly, bi-weekly, or monthly basis. The client wanted the application to have the function of viewing payslips of current employees, adding new employees and viewing the new employees’ payslips.", "I have also added a few other small features like: viewing and printing payslips of all current employees, showing the total annual pay and the total monthly pay.", "Another feature that I added was the help function. This feature provides the user with a clearer explanation of the options they have available."],
        process: ["Creating algorithms for accounting applications is pretty challenging, as you have to consider and use all the rules, and formulas required to work out all the different types of taxes. Since I do not specialise in accounting, I had to outsource the formulas.", "Revenue.ie was the main source I used for all the necessary formulas and information regarding tax calculations.", "Once I had compiled a list of formulas and all the tax brackets, I moved onto creating a data requirements table. The table specified all the variables I would need for the formulas, but also for displaying the employee data and payslip. This has provided me with a guide during the development process."],
        outcomes: ["The current program performs all the functionalities specified in the requirements, and with the features requested. Even though the project complies with the project specifications and requirements, there are functions that I would improve on in the future.", "An addition of a database to store new and current employees, and their data, would be a significant improvement to the current system.", "Overall the program works how it was intended and performs all the functions specified in the project brief, which is a success."]
    },

    {
        slug: "banking-app",
        title: "Banking App",
        description: "A GUI banking application for viewing account details, managing transactions and financial services.",
        tag: "Apprenticeship",
        icons: [
            { src: "/icons/csharp.png", alt: "C#" },
            { src: "/icons/dotnet.png", alt: ".NET" },
            { src: "/icons/mysql.png", alt: "MySQL" },
        ],
        video: "https://www.youtube.com/embed/kxOLPuBwK_k",
        requirements: ["The project brief document outlined that the focus of the program is to allow a user to login with their account number and pin (all number based), and perform transactions - withdrawing and depositing money.", "Another feature that I added that wasn’t part of the brief was an integration with a database for storing users and their data. Instead of having user values hard coded or stored in a tex file, I decided to make a simple database to store user credentials and their bank balance."],
        process: ["For this project I decided to follow the event-driven programming paradigm methodology. In this paradigm, the flow of the program - the order in which the functions of the program are executed - is controlled by events. Those events include things such as mouse clicks, keypresses or message passing.", "In this app everything is controlled by events. All the key presses on the number pad on the login screen are recorded and parsed to verify if the credentials match any of the users stored in the database. If details match and the user clicks the login button, they are navigated to their account window where they can perform transactions and see their details.", "On the user account window, all functionality is controlled by events, in particular user clicks and selection. The user can select two translation options: withdraw and deposit, then they are required to enter a value using the number pad, and finally have to click the submit button. Like the login event, if the amount to be withdrawn is over their balance the event cannot be performed and an error is displayed."],
        outcomes: ["The current program performs all the functionalities specified in the requirements, and with the features requested. Even though the project complies with the project specifications and requirements, there are functions that I would improve on in the future.", " Currently the program is pretty basic and does not update the users balance after performing transactions. This is something that would make the application much more sophisticated and more functional.", " Another function that the app could use would be an addition of a transaction history tab, where users can look at all their transactions."]
    },

    {
        slug: "messaging-app",
        title: "Messaging App",
        description: "A simple GUI messaging application allowing users to send MMS, and SMS messages.",
        tag: "Apprenticeship",
        icons: [
            { src: "/icons/csharp.png", alt: "C#" },
            { src: "/icons/dotnet.png", alt: ".NET" },
            { src: "/icons/mysql.png", alt: "MySQL" },
        ],
        video: "https://www.youtube.com/embed/ZxFGV4m2k28",
        requirements: ["The project brief document outlined that the focus of the program is to allow a user to input a recipient's phone number, and send that recipient a text message, a video, image or audio message, and give the user access to their contact history in both the inbox and outbox. "],
        process: ["For this project I decided to follow the OOP (object oriented programming) methodology. OOP is a programming paradigm that is based around objects, reusable pieces of code. They are then used to create different instances of objects using existing classes and calling methods to access and modify data that is stored within the objects.", "After examining the program specifications, I created a list of classes that will be the foundation of the program: Message class, SMS class, MMS class, ListboxItem class, and the Data class.", "The Message class is the parent class to the SMS and MMS classes. It contains the Sender, Text, Status, IsGroupMessage and MMS properties. The SMS class is used for creating regular text messages and has no individual properties only ones inherited from the Message class. The MMS class represents all the media type messages. It has its own properties to allow sending different types of media: image, video and audio.", "The ListboxItem class is used for separating the SMS and MMS messages. Finally the Data class is used for extracting the messages saved in the database to be loaded and read in the program."],
        outcomes: ["The current program performs all the functionalities specified in the requirements, and with the features requested. Even though the project complies with the project specifications and requirements, there are functions that I would improve on in the future.", " Currently the interface of the program feels a bit cluttered and might be overwhelming the users at first glance. Instead I would use a tabbed interface to separate the history from the messaging UI which would make for a much cleaner design. Otherwise I am pretty happy with the end result of the program."],
    },
];