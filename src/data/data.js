import Profile from './Profile.png';
import Towson from './Towson.png'
import Montgomery from './Montgomery.png'
import Grocery from './Grocery.png'
import Hangman from './Hangman.png'
import Instagram from './Instagram.png'
import Password from './password-generator.png'
import Tip from './Tip.png'
import Workout from './Workout.png'

export const data = {
    fname: "CHRISTIAN",
    lname: "SEYOUM",
    email: {
        address: "chriscoding96@gmail.com",
        image: "fas fa-envelope"
    },
    image: Profile,
    contact: [
        {
            image: "fas fa-file",
            link: "https://drive.google.com/file/d/1NMf2DbW5wcN1TgaBjiuTjWF9cqJrIIjN/view?usp=sharing"
        },
        {
            image: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/chrisuye/"
        },
        {
            image: "fab fa-github",
            link: "https://github.com/chrisuye"
        }
    ], 
    phone: "301-768-3548",
    job: "Software Developer",
    summery: " passionate about creating interactive applications and experiences on the web.",
    about: "Fall 2020 Computer Science Graduate with high GPA, working at TCS as a Software Engineer. Team player with emotionally intelligent communication skills and leadership experience, as a mentor and teacher in Calculus and Physics. A passion for software engineering and customer-facing work.",
    skills: [
        { 
            name:"React",
            image: "fab fa-react"
        },
        {
            name:"TypeScript",
            image: "fab fa-js"
        }, 
        {
            name:"JavaScript",
            image: "fab fa-js"
        },
        {
            name:"HTML",
            image: "fab fa-html5"
        },
        {
            name:"CSS",
            image: "fab fa-css3-alt"
        },
        {
            name:"Python",
            image: "fab fa-python"
        },
        {
            name:"SQL",
            image: "fas fa-database"
        },
        {
            name: "Git",
            image: "fab fa-git"
        },
        {
            name:"java",
            image: "fab fa-java"
        },
        {
            name:"Angular",
            image: "fab fa-angular"
        },
        {
            name: "MongoDB",
            image: "fas fa-database"
        },
        {
            name:"Kotlin",
            image: "fab fa-korvue"
        },
        {
            name:"Angular",
            image: "fab fa-angular"
        },
        {
            name:"NodeJS",
            image: "fab fa-node"
        }
    ],
    education: [
        {
            name: "Towson University",
            logo: Towson,
            degree: "Bachelor of Science",
            major: "Computer Science",
            graduation: "Dec 2020",
            gpa: "3.8"
        },
        {
            name: "Montgomery College",
            logo: Montgomery,
            degree: "Associates of Science",
            major: "Mathematics",
            graduation: "Aug 2019",
            gpa: "3.5"
        }
    ],
    projects: [
                {
                    name: "Tip",
                    description: "A tip calculator",
                    url: "https://github.com/chrisuye/Tip",
                    image: Tip,
                    website: "https://chrisuye.github.io/Tip/",
                    tech: [ 'fab fa-react', 'fab fa-js', 'fab fa-html5', 'fab fa-css3-alt']
                },
                {
                    name: "GeneratePassword",
                    description: "A simple password generator",
                    url: "https://github.com/chrisuye/GeneratePassword",
                    image: Password,
                    website: "https://chrisuye.github.io/GeneratePassword/",
                    tech: [ 'fab fa-react', 'fab fa-js', 'fab fa-html5', 'fab fa-css3-alt']
                },
                {
                    name: "Hangman",
                    description: "A simple hangman game",
                    url: "https://github.com/chrisuye/Hangman_React",
                    image: Hangman,
                    website: "https://chrisuye.github.io/Hangman_React/",
                    tech: [ 'fab fa-react', 'fab fa-js', 'fab fa-html5', 'fab fa-css3-alt']
                },
                {
                    name: "Instagram",
                    description: "A simple instagram clone",
                    url: "https://github.com/chrisuye/Instagram_Clone",
                    image: Instagram,
                    website: null,
                    tech: [ 'fab fa-react', 'fab fa-js', 'fab fa-html5', 'fab fa-css3-alt', 'fab fa-node', 'fas fa-database']
                },

                {
                    name: "The Aces Grocery Shopping Application",
                    description: "The Aces Grocery Shopping Application",
                    url: "https://github.com/chrisuye/TCS_Capstone_Project#the-aces-grocery-shopping-application",
                    image: Grocery,
                    website: null,
                    tech: [ 'fab fa-angular', 'fab fa-js', 'fab fa-html5', 'fab fa-css3-alt', 'fab fa-node', 'fas fa-database']
                },
                {
                    name: "Hangman",
                    description: "A simple hangman game",
                    url: "https://github.com/chrisuye/Hangman_React",
                    image: Hangman,
                    website: null,
                    tech: [ 'fab fa-java' ]
                },
                {
                    name: "Workout",
                    description: "A simple workout app",
                    url: "https://github.com/chrisuye/Workout",
                    image: Workout,
                    website: null,
                    tech: [ 'fab fa-java' ]
                }
    ]
}