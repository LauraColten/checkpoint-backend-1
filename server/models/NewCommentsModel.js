const mongoose = require("mongoose");

var newCommentsSchema = new mongoose.Schema({
    body: String
    });
var NewComment = mongoose.model('NewComment', newCommentSchema);
module.exports = NewComment;