var posts = [{
    user: 'Two-Face',
    title: 'How to Flip a Coin'
}, {
    user: 'Joker',
    title: 'Top 5 Jokes of 2015'
}];

module.exports = function (socket) {
    console.log("inside post controller");
    
    // Recent Posts
    for (var i = 0; i < posts.length; i++) {
        socket.emit('post.add', posts[i]);
        socket.emit('posts.count', {
            count: i + 1
        });
    }

};
