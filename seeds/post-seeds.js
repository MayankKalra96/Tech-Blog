const { Post } = require('../models');

const postData = [
    {
        title: "Tech layoffs are creating a new era of scrappy (and humbled) founders!",
        post_content: "he onramps into Silicon Valley often include access: to a smart mentor, a well-connected venture capitalist, or even a rocket ship of a startup.But an emerging class of founders is reminding the ecosystem how collapse can be an activator, as well. Laid-off talent is flocking to build startups within all sectors, from climate to crypto to the creator economy. And they’re hoping to course-correct where their alma maters — both Big Tech companies and small upstarts alike — went wrong.",     
        user_id: 3
    },
    {
        title: "Bitcoin Miners Are Playing a High-Stakes Game of Chicken!",
        post_content: "IT’S KIND OF a last-man-standing situation,” says Fred Thiel, CEO of US-based Marathon Digital Holdings. His crypto-mining company, among the largest in the world, has found itself—like the rest of the industry—in the path of a perfect storm.Over the past year, the sector has been battered by a slump in the price of bitcoin, combined with a spike in the cost of energy and an increase in mining difficulty—a reflection of the amount of computing power directed at the bitcoin network, which dictates the proportion of coins miners are able to win. ",
        user_id: 2
    },
    {
        title: "Workday cuts about 525 jobs but says it/'s not the result of overhiring!",
        post_content: "Cloud provider Workday laid off 3% of employees, mostly in product and technology.Workday’s co-CEOs told employees the company would still hire and grow its head count for the 2024 fiscal year.",
        user_id: 5

    },
    {
        title: "Tech Blogger Weighs in on New Online Bot Leaving Users Amazed and Concerned!",
        post_content: "A new piece of online technology is wowing users from around the world with its potential, but it also has some others concerned.ChatGPT is an online bot that uses artificial intelligence to answer questions that can range from the mundane to extremely intricate, albeit with varying degrees of accuracy.Local tech blogger Kevin Andrews says the bot can respond to almost any prompt given to it with a surprising level of clarity.",
         user_id: 3
    },
    {
        title: "THE TECH NEWSPAPER!",
        post_content: "Just Tech News—a tech news website where users can post, upvote, and comment on links to news articles. Use Sequelize, an object-relational mapping (ORM) library, to simplify your MySQL queries, add password hashing so that users can create secure passwords, and connect your application to JawsDB, a MySQL add-on for Heroku",
        user_id: 1
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;