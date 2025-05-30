fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 5)
        let html = ""
        for (let post of postsArr) {
            html += `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <hr />
            `
        }
        document.getElementById("blog-list").innerHTML = html
    })

document.getElementById("new-post-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const newPostTitle = document.getElementById("new-post-title").value;
    const newPostContent = document.getElementById("new-post-content").value;
    const newPost = { title: newPostTitle,
                        body: newPostContent,};
    console.log(newPost);
    document.getElementById("new-post-form").reset();
    document.getElementById("new-post-title").focus();
})