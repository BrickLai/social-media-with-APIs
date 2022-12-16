'use strict';


let avatar = document.querySelector('.fa-user-tie');
let file = document.querySelector('.uploadpicture');

console.log(file);

    let postBtn = document.querySelector('.postbtn');
    let postInputContent = document.querySelector('.post-input-content')
    postBtn.addEventListener('click', function() {
        let photo = file.files;
        let div = document.createElement('div');
        let item = document.querySelector('.post-content');
        let reader = new FileReader();
        item.insertBefore(div, item.children[0]);
        reader.readAsDataURL(photo[0]);
        reader.onload = function () {
        let image = document.createElement('img');
        image.width = '450';
        image.src = reader.result; 
        let items = document.querySelector('.post-content div');
        items.append(image);
    }
    })

const url = 'https://randomuser.me/api/?inc=name,picture,location&nat=CA&results=10';
    const options ={
        method: 'GET',
        mode: 'cors'
    };
    let userImgOne = document.querySelector('.user-img-1');
    // let userInfoName = document.querySelector('.user-info-name');
    let userInfoCity = document.querySelector('.user-info-city');
    let userInfoDiv = document.querySelector('.user-info');
    let userSuggestion = document.querySelector('.user-suggestion');
    let userAdd = document.querySelector('.user-add');

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


    

let faUser = document.querySelector('.fa-user');
faUser.addEventListener('click', function() {
    window.open('index.html');
})