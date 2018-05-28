module.exports = {
    getComments(req, res) {
      res.status(200).send(req.store.posts[req.params.postId].comments)
    }, 
    addComment(req, res) {
        comment = req.body
        comments = req.store.posts[req.params.postId].comments
        commentId = comments.length
        comments.push(comment)
        res.status(201).send({commentId: commentId})
    },
    updateComment(req, res) {
        postId = req.params.postId
        commentId = req.params.commentId
        comment = req.body
        req.store.posts[postId].comments[commentId].text = comment.text
        res.status(200).send(req.store.posts[postId].comments[commentId])  
    },
    removeComment(req, res) {
      req.store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
      res.status(204).send()
    }  
  }