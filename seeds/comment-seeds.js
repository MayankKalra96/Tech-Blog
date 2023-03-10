const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is amazing!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Wow, amazing work!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "It's sad but better, for future."
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "its hard!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "this is sad!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "this is the greatest news!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Fantastic!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Great Work!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;