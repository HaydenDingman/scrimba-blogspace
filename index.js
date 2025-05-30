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

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        })
        .then(res => res.json())
        .then(data => {
            const newPostHeader = document.createElement("h2");
            const newPostBody = document.createElement("p");
            const newRule = document.createElement("hr");
            newPostHeader.textContent = data.title;
            newPostBody.textContent = data.body;
            document.getElementById("blog-list").prepend(newRule);
            document.getElementById("blog-list").prepend(newPostBody);
            document.getElementById("blog-list").prepend(newPostHeader);
        });

    document.getElementById("new-post-form").reset();
    document.getElementById("new-post-title").focus();
})