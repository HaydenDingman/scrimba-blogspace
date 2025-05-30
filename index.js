let postsArray = [];

function renderPosts() {
    const html = postsArray.map((post) => {
        return `<h2>${post.title}</h2>
        <p>${post.body}</p>
        <hr />`
    }).join("");

    document.getElementById("blog-list").innerHTML = html
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0, 5)
        renderPosts();
    })

document.getElementById("new-post-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const newPostTitle = document.getElementById("new-post-title").value;
    const newPostContent = document.getElementById("new-post-content").value;
    const newPost = { title: newPostTitle,
                        body: newPostContent,};

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        })
        .then(res => res.json())
        .then(data => {
            postsArray.unshift(data);
            renderPosts();
        });

    document.getElementById("new-post-form").reset();
    document.getElementById("new-post-title").focus();
})