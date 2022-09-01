let userList = [];
let getUserList;
let nameListDOM = document.querySelector("#nameList");


function Read() {
    nameListDOM.innerHTML = "";
    getUserList = JSON.parse(localStorage.getItem("userList"));
    if (getUserList != null) {
        if (nameListDOM === "") {
            nameListDOM.innerHTML = "There are no any items";
        } else {
            for (let i = 0; i < getUserList.length; i++) {
                nameListDOM.innerHTML += `           
            <div class="user-class">
                <p>
                    <i class="fas fa-user">
                    </i>
                    <span>User :</span>
                    ${getUserList[i]}
                </p>
                <button class="sucess" onclick="Edit(${i})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="danger" onclick="Delete(${i})">
                    <i class="fas fa-trash-can"></i>
                </button>
            </div>`
            }
        }
    }
}

function Create() {
    let storage = JSON.parse(localStorage.getItem("userList"));
    let getItem = document.querySelector("#name").value;
    if (getItem === "") {
        alert("Empty")
    } else {
        if (storage === null) {
            userList.push(getItem);
            localStorage.setItem("userList", JSON.stringify(userList));
        } else {
            userList = JSON.parse(localStorage.getItem("userList"));
            userList.push(getItem);
            localStorage.setItem("userList", JSON.stringify(userList));
        }
    }
}

function Delete(item) {
    let deleteUsers = JSON.parse(localStorage.getItem("userList"));
    deleteUsers.splice(item, 1);
    localStorage.setItem("userList", JSON.stringify(deleteUsers));
    Read();
}

function Edit(item) {
    let editUsers = JSON.parse(localStorage.getItem("userList"));
    nameListDOM.innerHTML = "";
    for (let i = 0; i < editUsers.length; i++) {
        if (i == item) {
            nameListDOM.innerHTML += `
    <div class="user-class">
        <div>            
            <p>
                <i class="fas fa-user">
                </i>
                <span>User :</span>
                ${getUserList[i]}
            </p>
            <input type="text" id="newName" autocomplete="off" placeholder="${editUsers[i]}">
        </div>
            <button class="sucess" onclick="Update(${i})">
                <i class="fas fa-edit"></i>
            </button>
            <button class="danger" onclick="Read(${i})">
                <i class="fas fa-minus"></i>
            </button>
    </div>`
        } else {
            nameListDOM.innerHTML += `           
            <div class="user-class">
                <p>
                    <i class="fas fa-user">
                    </i>
                    <span>User :</span>
                    ${getUserList[i]}
                </p>
                <button class="sucess" onclick="Edit(${i})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="danger" onclick="Delete(${i})">
                    <i class="fas fa-minus"></i>
                </button>
            </div>`
        }
    }
}

function Update(item) {
    let updateUsers = JSON.parse(localStorage.getItem("userList"));
    updateUsers[item] = document.querySelector("#newName").value;
    if (updateUsers[item] == "") {
        alert("Input is empty")
    } else {
        localStorage.setItem("userList", JSON.stringify(updateUsers));
    }
    Read();
}
document.querySelector("#form").addEventListener("submit", (e) => {
    e.preventDefault();
    Create();
    Read();
    document.querySelector("#form").reset();
})

document.addEventListener("DOMContentLoaded", () => {
    Read();
})
































// function Read() {
//     nameListDOM.innerHTML = "";
//     getUserList = JSON.parse(localStorage.getItem("userList"));
//     if (getUserList != null) {
//         if (getUserList.length === 0) {
//             nameListDOM.innerHTML = "There are no any users!"
//         } else {
//             for (let i = 0; i < getUserList.length; i++) {
//                 nameListDOM.innerHTML += `
// <div class="user-class">
//     <p>
//         <i class="fas fa-user">
//         </i>
//         <span>User :</span>
//         ${getUserList[i]}
//     </p>
//     <button class="sucess" onclick="Edit(${i})">
//         <i class="fas fa-edit"></i>
//     </button>
//     <button class="danger">
//         <i class="fas fa-tarsh" onclick="Delete(${i})"></i>
//     </button>
// </div>
//         `

//             }
//         }
//     }
// }

// function Create() {
//     let storage = JSON.parse(localStorage.getItem("userList"));
//     let inputText = document.querySelector("#name").value;
//     if (inputText == "") {
//         alert("Empty");
//     } else {
//         if (storage === null) {
//             userList.push(inputText);
//             localStorage.setItem("userList", JSON.stringify(userList));
//         } else {
//             userList = JSON.parse(localStorage.getItem("userList"));
//             userList.push(inputText);
//             localStorage.setItem("userList", JSON.stringify(userList));

//         }
//     }
// }



// document.querySelector("#form").addEventListener("submit", (e) => {
//     e.preventDefault();
//     Create();
//     Read();
//     document.querySelector("#name").reset();
// })
// document.addEventListener("DOMContentLoaded", () => {
//     Read();
// })



// function Create() {
//     let storage = JSON.parse(localStorage.getItem("userList"));
//     let inputText = document.querySelector("#name").value;
//     if (inputText == "") {
//         alert("Write a name")
//     } else {
//         if (storage === null) {
//             userList.push(inputText);
//             localStorage.setItem("userList", JSON.stringify(userList));
//         } else {
//             userList = JSON.parse(localStorage.getItem("userList"));
//             userList.push(inputText);
//             localStorage.setItem("userList", JSON.stringify(userList));
//         }
//     }

// }

// function Delete(item) {

// }

// document.getElementById("form").addEventListener("submit", (e) => {
//     e.preventDefault();
//     Create();
//     Read();
//     document.getElementById("form").reset();
// });

// document.addEventListener("DOMContentLoaded", () => {
//     Read();
// });
