module.exports = {
    getPosts(req, res) {
      res.status(200).send(req.store.posts)
    },
    addPost(req, res) {
      blogPost = req.body
      postId = req.store.posts.length
      req.store.posts.push(blogPost)
      res.status(201).send({postId: postId})
    },
    updatePost(req, res) {
        postId = req.params.postId
        blogPost = req.body
        if (blogPost.name != undefined)
            req.store.posts[postId].name = blogPost.name
        if (blogPost.url != undefined)
            req.store.posts[postId].url = blogPost.url
        if (blogPost.text != undefined)
            req.store.posts[postId].text = blogPost.text
        res.status(200).send(req.store.posts[postId])
    },
    removePost(req, res) {
      req.store.posts.splice(req.params.postId, 1)
      res.status(204).send()
    }
  }