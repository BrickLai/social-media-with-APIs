<h2>social-media-with-APIs</h2>

<h3>Technologies</h3>
<li>HTML5</li>
<li>CSS3</li>
<li>Git</li>

<h3>key Code</h3>

```

    async function getUsers() {
        try {
            const result = await fetch(url, options);
            if (result.status >= 200 && result.status <400) {
                const data = await result.json();
                const users = data.results;
                console.log(users);
                for (let i = 0; i < users.length; i++) {
                    console.log(users[i].picture.medium);
                    console.log(users[i].name.first);
                    console.log(users[i].name.last);
                    console.log(users[i].location.city);
                    let div = document.createElement('div');
                    //let hThree = document.createElement('h3');
                    userSuggestion.appendChild(div);
                    div.innerHTML =
                    `<div class="user-info">
                                <div class="user-img"><img src="${users[i].picture.medium}"></div>
                                <div class="user-name">
                                    <h4 class="user-info-name">${users[i].name.first} ${users[i].name.last}</h4>
                                    <p class="user-info-city">${users[i].location.city}</p>
                                </div>
                                <div class="user-add">+</div>
                    </div>`
                  }
            }
        } catch (error) {
            console.log(error);
        }
    }
    getUsers();
```

<h3>Launch</h3>
<a href="https://bricklai.github.io/social-media-with-APIs/">Click here</a> to visit.

