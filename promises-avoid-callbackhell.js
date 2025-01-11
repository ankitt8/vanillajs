function getUser(userId, callback) {
    setTimeout(() => {
        console.log('user details fetched');
        callback({userId: '123', name: 'Ankit'})
    }, 1000)
}

function getPosts(userId, callback) {
    setTimeout(() => {
        console.log('user posts fetched successfully');
        callback([{ postId: 1, content: "Post 1" }, { postId: 2, content: "Post 2" }, { postId: 3, content: "Post 3" }]);
    }, 1000)
}

function getComments(postId, callback) {
    setTimeout(() => {
        callback([{ commentId: 1, text: "Comment 1" }, { commentId: 2, text: "Comment 2" }]);
    }, 1000)
}

getUser('1', function(userDetails) {
    getPosts(userDetails.userId, function (posts) {
        posts.forEach((post) => {
            getComments(post.postId, function(comments) {
                console.log(comments);
            });
        })
    })
})
// function getUser(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Fetched user data");
//             resolve({ userId: userId, name: "John Doe" });
//         }, 1000);
//     });
// }
//
// function getPosts(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Fetched posts for user");
//             resolve([{ postId: 1, content: "Post 1" }, { postId: 2, content: "Post 2" }]);
//         }, 1000);
//     });
// }
//
// function getComments(postId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Fetched comments for post");
//             resolve([{ commentId: 1, text: "Comment 1" }, { commentId: 2, text: "Comment 2" }]);
//         }, 1000);
//     });
// }
//
// getUser(1)
//     .then((userId) => getPosts(userId))
//     .then((posts) => {
//         console.log(posts);
//         const commentsPromises = posts.map(({ postId }) => getComments(postId))
//         return Promise.all(commentsPromises);
//     })
//     .then((comments) => {
//         console.log(comments);
//     })
