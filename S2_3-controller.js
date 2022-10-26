let articles = []
module.exports.create = function(req,res){
    req.body.comments = []
    console.log(req.body)
    articles.push(req.body)
    res.redirect('/articles')
}

module.exports.new = function(req,res){
    res.send(`
    <h2>Add Post</h2>
    <form style="display: flex;flex-direction: column;gap: 10px;" action="/articles" method="post">
        <input type="text" placeholder="Title" name="title">
        <input type="text" placeholder="Author" name="author">
        <textarea name="body" placeholder="Content" cols="30" rows="10"></textarea>
        <button>Submit</button>
    </form>
    `)
}

module.exports.index = function(req,res){
    res.json(articles)
}