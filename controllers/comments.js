const Comment = require("../models/Comment");

module.exports = {
  createComment: async (req, res) => {
    try {
      await Comment.create({
        comment: req.body.comment,
        post: req.params.id,
        likes: 0,
        user: req.user.id,
      });
      console.log("Comment has been added!");
      res.redirect("/post/" + req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
  likeComment: async (req, res) => {
    try {
      await Comment.findOneAndUpdate(
        {
          _id: req.params.commentId,
        },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Comment like has been encreased!");
      res.redirect("/post/" + req.params.postId);
    } catch (err) {
      console.log(err);
    }
  },
};
