export const projectsData = [
  {
    image: require('../images/projects/cabbed.png'),
    title: "Cabbed",
     stack: ["Node.JS", "Flutter", "Express"],
     description: "Cabbed is a real time mobile footfall application targeted at taxi companies to level the playing field within the rapidly evolving personal transport industry. Cabbed is a mobile app for both Andriod and Iphone, and was created in a two week space as a graduating project.",
     hosted: "https://www.youtube.com/watch?v=HZUk6hpe1io",
     github: "https://github.com/VoltrefferNL/BENC-News-App",
     timeframe: "Timeframe: 2 weeks"  
  },
    {
      image: require("../images/projects/ncNewsFinal.png"),
      title: "NC News Frontend", stack: ["React", "Axios", "Reach Router"],
      description: "NC News is a reddit-copy that allows a user to view a list of articles, comment & vote on them and sort articles according to creation time, votes and amount of comments",
      hosted: "https://fenc-news-app.netlify.app/", 
      github: "https://github.com/VoltrefferNL/FENC-News-App",
      timeframe: "Timeframe: 1 week"  
    },
    {
      image: require("../images/projects/NCNEWSAPI.png"),
      title: "NC News Backend",
      description: "A RESTful API server that serves articles, topic and users to a frontend website.", 
      stack: ["Node.JS", "Express", "PostgreSQL"], 
      hosted: "https://nc-news-voltreffer.herokuapp.com/api/", 
      github: "https://github.com/VoltrefferNL/BENC-News-App",
      timeframe: "Timeframe: 1 week"  
    },

    ]

    export default {
      projectsData,
  }