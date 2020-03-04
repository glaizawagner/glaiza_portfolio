import LiveList from './images/proj01.png';
import BuxInflux from './images/proj02.png';
import SpacedRep from './images/proj03.png';
import Petful from './images/proj04.png';
import Bookmarks from './images/proj05.png';
import QuizApp from './images/proj06.png';
// import baseUrl from './config';

export const ProjectList =
[
    {
        id: 1, 
        name: "Live List", 
        img: LiveList ,
        liveApp: "https://www.live-list.org/",
        clientRepo: "https://github.com/thinkful-ei-heron/SocialPlaylist-Client",
        serverRepo: "https://github.com/thinkful-ei-heron/SocialPlaylist-server",
        description: "An application that will let you live like the locals. It helps users find customizable lists of other users that already tried a certain spot in the area.",
    },
    {
        id: 2, 
        name: "Bux Influx", 
        img:  BuxInflux ,
        liveApp: "https://glaiza-buxinflux-app.now.sh",
        clientRepo: "https://github.com/glaizawagner/bux-influx-client",
        serverRepo: "https://github.com/glaizawagner/bux-influx-server",
        description: "Bux Influx is an app that will help users monitor their monthly income and expenses. It can determine if you have exceeded your alloted budget.",
    },
    {
        id: 3, 
        name: "SpacedRep", 
        img: SpacedRep ,
        liveApp: "https://gz-spaced-repetition-app.now.sh/",
        clientRepo: "https://github.com/thinkful-ei-heron/spaced-repetition_Zac-Glaiza_client",
        serverRepo: "https://github.com/thinkful-ei-heron/spaced-repetition_Zac-Glaiza_server",
        description: "This spaced-repetition project is designed to help users learn twenty LATIN words. It can track users' total scores, correct and incorrect count. Finally, it gives feedback in every answer.",
    },
    {
        id: 4, 
        name: "Petful", 
        img: Petful ,
        liveApp: "https://petful-client-glaiza-wesley.now.sh/",
        clientRepo: "https://github.com/glaizawagner/petful-client",
        serverRepo: "https://github.com/thinkful-ei-heron/Petful-server",
        description: "It is a FIFO Adoption agency that works in a first come, first served basis not only for animals but for people who are interested to adopt.",
    },
    {
        id: 5, 
        name: "Bookmarks", 
        img: Bookmarks,
        liveApp: "https://thinkful-ei-heron.github.io/glaiza-bookmark-app/",
        clientRepo: "https://github.com/thinkful-ei-heron/glaiza-bookmark-app",
        description: "This application allows a user to save their favorite bookmarks. It will also let a user filter their lists by minimum rating. Using this app will help a user track their saved bookmarks.",
    },
    {
        id: 6, 
        name: "Quiz App", 
        img: QuizApp,
        liveApp: "https://glaizawagner.github.io/Jonny-Glaiza-QuizGame/",
        clientRepo: "https://github.com/glaizawagner/Jonny-Glaiza-QuizGame",
        description: "A 10 question quiz that will test your knowledge in HTML, CSS and Javascript. When a user clicks submit, a random image and a message will show that the user's answer is correct or incorrect.",
    },
];

export default ProjectList;