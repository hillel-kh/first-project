<template>
    <div id="table-wrapper">

        <table id="table" ref="table" >
            <thead>
            <tr>
                <th v-for="headName of headNames" :key="headName" class="headColumn"  @click="sortTable($event.target)">{{ headName }}</th>
                <th class="headColumn">remove</th>
            </tr>
            </thead>
            <tbody>
            <User v-for="(item, index) of users"
                  :key="index"
                  :user="item"
                  :index="index"
                  @delete="onDelete(index)"
                  @showModalWindow="showModalWindow(index)"
            ></User>
            </tbody>
        </table>

        <div id="userFilter" ref="userFilter" @click="closeAddNewUser"></div>
        <div id="modalWindowFilter" ref="modalWindowFilter" @click="closeModalWindow"></div>

        <div id="modalWindow" ref="modalWindow">
            <span ref="nameModalWindow"></span><br>
            <span ref="usernameModalWindow"></span><br>
            <span ref="emailModalWindow"></span><br>
            <span ref="streetModalWindow"></span><br>
            <span ref="suiteModalWindow"></span> <br>
            <span ref="cityModalWindow"></span><br>
            <span ref="zipcodeModalWindow"></span><br>
            <span ref="latModalWindow"></span><br>
            <span ref="lngModalWindow"></span>
            <span ref="phoneModalWindow"></span><br>
            <span ref="websiteModalWindow"></span><br>
            <span ref="companyNameModalWindow"></span><br>
            <span ref="catchPhraseModalWindow"></span><br>
            <span ref="bsModalWindow"></span><br>
            <button id="modalClose" @click="closeModalWindow">Close</button>
        </div>

        <button id="addNewUser" ref="addNewUser" @click="openAddNewUserForm">Add new user</button>

        <div id="newUserForm" ref="newUserForm">
            <br><span class="modalContent">name: </span><input type="text" class="addNewUserInput" ref="name"><br><br>
            <span class="modalContent">username: </span><input type="text" class="addNewUserInput" ref="username"><br><br>
            <span class="modalContent">email: </span><input type="text" class="addNewUserInput" ref="email"><br><br>
            <span class="modalContent">address, street: </span><input type="text" class="addNewUserInput" ref="street"><br><br>
            <span class="modalContent">address, suite: </span><input type="text" class="addNewUserInput" ref="suite"><br><br>
            <span class="modalContent">address, city: </span><input type="text" class="addNewUserInput" ref="city"><br><br>
            <span class="modalContent">address, zipcode: </span><input type="text" class="addNewUserInput" ref="zipcode"><br><br>
            <span class="modalContent">address, geo, lat: </span><input type="text" class="addNewUserInput" ref="lat"><br><br>
            <span class="modalContent">address, geo, lng: </span><input type="text" class="addNewUserInput" ref="lng"><br><br>
            <span class="modalContent">phone: </span><input type="text" class="addNewUserInput" ref="phone"><br><br>
            <span class="modalContent">website: </span><input type="text" class="addNewUserInput" ref="website"><br><br>
            <span class="modalContent">company, name: </span><input type="text" class="addNewUserInput" ref="companyName"><br><br>
            <span class="modalContent">company, catchPhrase:  </span><input type="text" class="addNewUserInput" ref="catchPhrase"><br><br>
            <span class="modalContent">company, bs: </span><input type="text" class="addNewUserInput" ref="bs"><br><br><br>
            <button id="addNewUserButton" @click="addNewUser">Add new user</button>
            <button id="removeFormAddNewUser" ref="removeFormAddNewUser" @click="closeAddNewUser">Close</button>
        </div>

    </div>
</template>

<script>
    import User from "./User"

    export default {
        name: "Table",
        components: {
            User
        },
        data() {
            return {
                headNames: ["name", "username", "email", "website"],
                users: []
            }
        },
        methods: {
            addNewUser() {
                this.users.push({
                    "id": this.users.length + 1,
                    "name": this.$refs.name.value,
                    "username": this.$refs.username.value,
                    "email": this.$refs.email.value,
                    "address": {
                        "street": this.$refs.street.value,
                        "suite": this.$refs.suite.value,
                        "city": this.$refs.city.value,
                        "zipcode": this.$refs.zipcode.value,
                        "geo": {
                            "lat": this.$refs.lat.value,
                            "lng": this.$refs.lng.value
                        }
                    },
                    "phone": this.$refs.phone.value,
                    "website": this.$refs.website.value,
                    "company": {
                        "name": this.$refs.companyName.value,
                        "catchPhrase": this.$refs.catchPhrase.value,
                        "bs": this.$refs.bs.value
                    }
                });
                this.closeAddNewUser();
            },
            openAddNewUserForm() {
                this.$refs.userFilter.style.display = "block";
                this.$refs.addNewUser.style.display = "none";
                this.$refs.newUserForm.style.display = "block";
            },
            closeAddNewUser() {
                this.$refs.userFilter.style.display = "none";
                this.$refs.addNewUser.style.display = "block";
                this.$refs.newUserForm.style.display = "none";

                document.querySelectorAll('.addNewUserInput').forEach(elem => {
                    elem.value = ''
                })
            },
            onDelete(index) {
                this.users.splice(index, 1)
            },
            showModalWindow(index) {
                this.$refs.modalWindowFilter.style.display = "block";
                this.$refs.modalWindow.style.display = "block";

                this.$refs.nameModalWindow.innerHTML = `<b>name:</b> ` + this.users[index].name;
                this.$refs.usernameModalWindow.innerHTML = `<b>username:</b> ` + this.users[index].username;
                this.$refs.emailModalWindow.innerHTML = `<b>email:</b> ` + this.users[index].email;
                this.$refs.streetModalWindow.innerHTML = `<b>address, street:</b> ` + this.users[index].address.street;
                this.$refs.suiteModalWindow.innerHTML = `<b>address, suite:</b> ` + this.users[index].address.suite;
                this.$refs.cityModalWindow.innerHTML = `<b>address, city:</b> ` + this.users[index].address.city;
                this.$refs.zipcodeModalWindow.innerHTML = `<b>address, zipcode:</b> ` + this.users[index].address.zipcode;
                this.$refs.latModalWindow.innerHTML = `<b>address, geo, lat:</b> ` + this.users[index].address.geo.lat;
                this.$refs.latModalWindow.innerHTML = `<b>address, geo, lng:</b> ` + this.users[index].address.geo.lng;
                this.$refs.phoneModalWindow.innerHTML = `<b>phone:</b> ` + this.users[index].phone;
                this.$refs.websiteModalWindow.innerHTML = `<b>website:</b> ` + this.users[index].website;
                this.$refs.companyNameModalWindow.innerHTML = `<b>company, name:</b> ` + this.users[index].company.name;
                this.$refs.catchPhraseModalWindow.innerHTML = `<b>company, catchPhrase:</b> ` + this.users[index].company.catchPhrase;
                this.$refs.bsModalWindow.innerHTML = `<b>company, bs:</b> ` + this.users[index].company.bs;
            },
            closeModalWindow() {
                this.$refs.modalWindowFilter.style.display = "none";
                this.$refs.modalWindow.style.display = "none";
            },
            sortTable(headElement) {
                const dynamicSort = (property) => {
                    let sortOrder = 1;
                    if (property[0] === "-") {
                        sortOrder = -1;
                        property = property.substr(1);
                    }
                    return  (a,b) => {
                        let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
                        return result * sortOrder;
                    }
                };

                const headCells = document.querySelectorAll('.headColumn');

                headCells.forEach(elem => {
                    elem.setAttribute("data-sort-indicator" , "without arrow");
                });

                headElement.setAttribute("data-sort-indicator" , "arrow");

                headCells.forEach( elem => {
                    if(elem.dataset.sortIndicator === "without arrow") {
                        elem.removeAttribute("data-sort");

                        let position = elem.innerHTML.indexOf(" ");

                        if(position !== -1) {
                            elem.innerHTML = elem.innerHTML.substr(0, position);
                        }
                    }
                });

                if(!headElement.hasAttribute("data-sort")) {
                    this.users.sort(dynamicSort(headElement.innerHTML));
                    headElement.setAttribute("data-sort", "up");
                    headElement.innerHTML += " &#x25B2";
                } else if (headElement.dataset.sort === "down") {
                    this.users.sort(dynamicSort(headElement.innerHTML));
                    this.users.reverse();
                    headElement.setAttribute("data-sort", "up");
                    let position = headElement.innerHTML.indexOf(" ");
                    headElement.innerHTML = headElement.innerHTML.substr(0, position) + ` &#x25B2`;
                } else {
                    this.users.sort(dynamicSort(headElement.innerHTML));
                    this.users.reverse();
                    headElement.setAttribute("data-sort", "down");
                    let position = headElement.innerHTML.indexOf(" ");
                    headElement.innerHTML = headElement.innerHTML.substr(0, position) + ` &#x25BC`;
                }
            }
        },
        beforeCreate() {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {
                    this.users = json
                });
        }
    }
</script>

<style scoped>
    #table-wrapper {
        position: absolute;
        left: calc( (100% - 730px) / 2 );
    }

    #table {
        width: 50%;
        min-width: 730px;
        margin: 2% auto;
        border-collapse: collapse;
        cursor: pointer;
    }

    .headColumn {
        text-align: left;
        padding: 5px;
        font-size: 18px;
        font-weight: bold;
        color: #FFF;
        background: #000;
    }

    .headColumn:hover {
        background: #4169E1;
    }

    #addNewUser {
        color: #FFF;
        background: #4169E1;
        border-color: #4169E1;
        font-weight: bold;
    }

    #userFilter, #modalWindowFilter {
        display: none;
        background: #000;
        opacity: 0.5;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 100;
    }

    #modalWindow {
        display: none;
        background: #FFF;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 101;
        width: 550px;
        height: 350px;
        margin: 7% auto;
        padding: 10px;
        border-radius: 1%;
    }

    #modalClose {
        display: block;
        width: 70px;
        margin: 5% auto;
        position: relative;
        line-height: 2.5em;
        vertical-align: middle;
        text-align: center;
        text-decoration: none;
        text-shadow: 0 -1px 1px #777;
        color: #fff;
        outline: none;
        border: 2px solid #F64C2B;
        border-radius: 5px;
        box-shadow: 0 0 0 60px rgba(0,0,0,0) inset, .1em .1em .2em #800;
        background: #F64C2B;
    }

    #modalClose:active,  #removeFormAddNewUser:active, #addNewUserButton:active, #addNewUser:active  {
        top: .1em;
        left: .1em;
        box-shadow: 0 0 0 60px rgba(0,0,0,.05) inset;
    }

    #modalClose:hover,  #removeFormAddNewUser:hover, #addNewUserButton:hover, #addNewUser:hover  {
        cursor: pointer;
    }

    #addNewUser {
        display: block;
        width: 150px;
        margin: auto;
        position: relative;
        line-height: 2.5em;
        vertical-align: middle;
        text-align: center;
        text-decoration: none;
        text-shadow: 0 -1px 1px #777;
        color: #fff;
        outline: none;
        border: 2px solid #4169E1;
        border-radius: 5px;
        box-shadow: 0 0 0 60px rgba(0,0,0,0) inset, .1em .1em .2em #800;
        background: #4169E1;
    }

    #newUserForm {
        display: none;
        background: #FFF;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 101;
        width: 40%;
        min-width: 550px;
        height: 70%;
        min-height: 600px;
        margin: 1% auto;
        padding: 10px;
        border-radius: 1%;
    }

    #addNewUserButton {
        margin-left: 40%;
        display: inline-block;
        width: 100px;
        line-height: 2.5em;
        vertical-align: middle;
        text-align: center;
        text-decoration: none;
        text-shadow: 0 -1px 1px #777;
        color: #fff;
        outline: none;
        border: 2px solid #4169E1;
        border-radius: 5px;
        box-shadow: 0 0 0 60px rgba(0,0,0,0) inset, .1em .1em .2em #800;
        background: #4169E1;
    }

    #removeFormAddNewUser {
        margin-left: 5%;
        display: inline-block;
        width: 70px;
        line-height: 2.5em;
        vertical-align: middle;
        text-align: center;
        text-decoration: none;
        text-shadow: 0 -1px 1px #777;
        color: #fff;
        outline: none;
        border: 2px solid #F64C2B;
        border-radius: 5px;
        box-shadow: 0 0 0 60px rgba(0,0,0,0) inset, .1em .1em .2em #800;
        background: #F64C2B;
    }

    .addNewUserInput {
        float: right;
        margin-right: 5%;
        width: 60%;
    }
</style>
