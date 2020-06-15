export const projectsData = [
    {
      image: require("../images/projects/ncNewsFinal.png"), title: "NC News Frontend", stack: ["React", "Axios", "Reach Router"], description: "NC News is a reddit-copy that allows a user to view a list of articles, comment & vote on them and sort articles according to creation time, votes and amount of comments", hosted: "https://fenc-news-app.netlify.app/", github: "https://github.com/VoltrefferNL/FENC-News-App"
    },
    {
      image: require("../images/projects/NCNEWSAPI.png"), title: "NC News Backend", stack: ["Node.JS", "Express", "PostgreSQL"], hosted: "https://nc-news-voltreffer.herokuapp.com/api/", github: "https://github.com/VoltrefferNL/BENC-News-App"
      },
      {
        image: require('../images/projects/cabbed.png') ,title: "Cabbed", stack: ["Node.JS", "Flutter", "MongoDB"], description: "A real time footfall application targeted at black cab and private transport companies. The app provides real time data on hotspots in any city and provides users with the ability to submit data on pick ups and additional notes.", hosted: "https://www.youtube.com/watch?v=HZUk6hpe1io", github: "https://github.com/VoltrefferNL/BENC-News-App"
      },

    ]

    export default {
      projectsData,
  }