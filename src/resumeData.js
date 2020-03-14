const resumeData = {
    "name" : "Glaiza Wagner",
    "role" : "Full-Stack Web Developer",
    "contactTitle": "Contact",
    "contactSign" : "fa fa-map-pin",
    "socialLinks" : 
    [
        {
            "id" : 1,
            "name" : "LinkedIn",
            "url" : "https://www.linkedin.com/in/glaizawagner/",
            "className": "fa fa-linkedin",
        },
        {
            "id" : 2,
            "name" : "GitHub",
            "url" : "https://github.com/glaizawagner",
            "className":"fa fa-github"
        },
        {
            "id" : 3,
            "name" : "Twitter",
            "url" : "https://twitter.com/GlaizaWagner",
            "className": "fa fa-twitter",
        },
        {
            "id" : 4,
            "name" : "Email",
            "url" : "mailto:glaizawagner@gmail.com",
            "className": "fa fa-envelope",
        }
    ],
    "navResumeLink" : "https://drive.google.com/file/d/188nMXjIDNyqTr66sYmX4hhq61tdXuxrT/view?usp=sharing",
    "navResumeIcon" : "fa fa-file",
    "navLinks" : 
    [
        {
            "id" : 1,
            "to" : "/",
            "name" : "Home",
            "icons": "fa fa-home",
        },
        {
            "id" : 2,
            "to" : "/about",
            "name" : "About",
            "icons":"fa fa-user"
        },
        {
            "id" : 3,
            "name" : "Projects",
            "to" : "/projects",
            "icons": "fa fa-folder",
        }
        ,
        {
            "id" : 4,
            "name" : "Resume",
            "to" : "https://drive.google.com/file/d/188nMXjIDNyqTr66sYmX4hhq61tdXuxrT/view?usp=sharing",
            "icons": "fa fa-file",
        }
    ],
    "about" : 
    [
        {
            "id" : 1 , 
            "desc" : "I began my career as an IT Analyst, moving up to an IT Instructor, and eventually being recruited to work in Singapore as an IT Executive."
        },
        {
            "id" : 2 , 
            "desc" : "I started web developing, without any prior knowledge. My love of creative, intuitive smartphone apps inspired me to take this training to get to a new level and build apps."
        },
        {
            "id" : 3 , 
            "desc" : "It’s like a dream turning into reality. I will always be grateful and honored that I found Thinkful and for the opportunity they gave me. Thinkful helped me unlock my potential as well as encouraging me that I can achieve my dream.",
        },
    ],
    "interestTitle": "Interest/Hobbies",
    "interests" : [
        {
            "id" : 1 , 
            "desc" : "Eating new foods",
            "className" : "fa fa-caret-right"
        },
        {
            "id" : 2 , 
            "desc" : "Playing snooker and bowling",
            "className" : "fa fa-caret-right"
        },
        {
            "id" : 3 , 
            "desc" : "Traveling in nearby places or out of the country",
            "className" : "fa fa-caret-right"
        },
        {
            "id" : 4 , 
            "desc" : "New experiences and adventures",
            "className" : "fa fa-caret-right"
        },
        {
            "id" : 5 , 
            "desc" : "Baking/cooking when I have lots of extra time",
            "className" : "fa fa-caret-right"
        },
        
    ],
    "projectname" : "Projects",
    "projectList" : 
        [
            {
                id: 1, 
                name: "Live List", 
                img: "https://imgur.com/yfIWPQ7.jpg" ,
                liveApp: "https://www.live-list.org/",
                clientRepo: "https://github.com/thinkful-ei-heron/SocialPlaylist-Client",
                serverRepo: "https://github.com/thinkful-ei-heron/SocialPlaylist-server",
                description: "An application that will let you live like the locals. It helps users find customizable lists of other users that already tried a certain spot in the area.",
            },
            {
                id: 2, 
                name: "Bux Influx", 
                img:  "https://imgur.com/hwb41Ae.png" ,
                liveApp: "https://glaiza-buxinflux-app.now.sh",
                clientRepo: "https://github.com/glaizawagner/bux-influx-client",
                serverRepo: "https://github.com/glaizawagner/bux-influx-server",
                description: "Bux Influx is an app that will help users monitor their monthly income and expenses. It can determine if you have exceeded your alloted budget.",
            },
            {
                id: 3, 
                name: "SpacedRep", 
                img: "https://imgur.com/6a4fwa4.png" ,
                liveApp: "https://gz-spaced-repetition-app.now.sh/",
                clientRepo: "https://github.com/thinkful-ei-heron/spaced-repetition_Zac-Glaiza_client",
                serverRepo: "https://github.com/thinkful-ei-heron/spaced-repetition_Zac-Glaiza_server",
                description: "This spaced-repetition project is designed to help users learn twenty LATIN words. It can track users' total scores, correct and incorrect count. Finally, it gives feedback in every answer.",
            },
            {
                id: 4, 
                name: "Petful", 
                img: "https://imgur.com/gyicmiA.png" ,
                liveApp: "https://petful-client-glaiza-wesley.now.sh/",
                clientRepo: "https://github.com/glaizawagner/petful-client",
                serverRepo: "https://github.com/thinkful-ei-heron/Petful-server",
                description: "It is a FIFO Adoption agency that works in a first come, first served basis not only for animals but for people who are interested to adopt.",
            },
            {
                id: 5, 
                name: "Bookmarks", 
                img: "https://imgur.com/xYRl1YI.png",
                liveApp: "https://thinkful-ei-heron.github.io/glaiza-bookmark-app/",
                clientRepo: "https://github.com/thinkful-ei-heron/glaiza-bookmark-app",
                description: "This application allows a user to save their favorite bookmarks. It will also let a user filter their lists by minimum rating. Using this app will help a user track their saved bookmarks.",
            },
            {
                id: 6, 
                name: "Quiz App", 
                img: "https://imgur.com/dBHjK9p.png",
                liveApp: "https://glaizawagner.github.io/Jonny-Glaiza-QuizGame/",
                clientRepo: "https://github.com/glaizawagner/Jonny-Glaiza-QuizGame",
                description: "A 10 question quiz that will test your knowledge in HTML, CSS and Javascript. When a user clicks submit, a random image and a message will show that the user's answer is correct or incorrect.",
            }
    ],
    "techStack" : 
    [
        {
            "id": 1,
            "skillName":"html5-plain-wordmark",
            "symbol" : " | "
          },
          {
            "id": 2,
            "skillName":"css3-plain-wordmark",
            "symbol" : " | "
          },
          {
            "id": 3,
            "skillName":"javascript-plain",
            "symbol" : " | "
          },
          {
            "id": 4,
            "skillName":"react-original-wordmark",
            "symbol" : " | "
          },
          {
            "id": 5,
            "skillName":"nodejs-plain-wordmark",
            "symbol" : " | "
          },
          {
            "id": 6,
            "skillName":"express-original-wordmark",
            "symbol" : " | "
          },
          {
            "id": 7,
            "skillName":"postgresql-plain-wordmark",
            "symbol" : " | "
          },
          {
            "id": 8,
            "skillName":"git-plain-wordmark",
            "symbol" : " | "
          },
          {
            "id": 9,
            "skillName":"heroku-original-wordmark",
            "symbol" : " | "
          },
          {
            "id": 10,
            "skillName":"jquery-plain-wordmark",
            "symbol" : " | "
          },
          {
            "id": 11,
            
            "skillName":"sass-original",
            "symbol" : " | "
          },
    ]
}
export default resumeData;