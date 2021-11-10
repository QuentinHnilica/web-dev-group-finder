var path = this.pathname || window.location.pathname;
var part = path.split('/').pop(); //groupNumber
let groupAdmin 
let projectInfo  = []

const xMod = document.getElementById('xClose')
const botClose = document.getElementById('botClose')
const modCreate = document.getElementById('modCreate')

const groupName2 = document.getElementById('groupName2')
const groupDifficulty = document.getElementById('groupDifficulty')
const groupDisc = document.getElementById('groupDisc')
const link1Name = document.getElementById('link1Name')
const link1Link = document.getElementById('link1Link')
const link2Name = document.getElementById('link2Name')
const link2Link = document.getElementById('link2Link')
const link3Name = document.getElementById('link3Name')
const link3Link = document.getElementById('link3Link')
const link4Name = document.getElementById('link4Name')
const link4Link = document.getElementById('link4Link')
const groupTechNeed = document.getElementById('groupTechNeed')

const getGroupPosts = async () =>{
    const response = await fetch('/projects/posts/' + part,{
        method: "GET"
    })
    if (response.ok){
        response.json().then(function(data){
            for (let i = 0; i < data.length; i++){
                let postContent = data[i].PostContent
                let postUser = data[i].UsersID
                let PostHTMl = 
                `<section class = "border m-4" style="width: 80%;">
                <div class = "d-flex align-items-start flex-column m-3">          
                    <h3 style="color: white;">${postUser}</h3>

                    <div>
                        <p style="color: white;">${postContent} </p>
                    </div>
                </div>
            </section>`

            $('#postArea').append(PostHTMl)
            }
        })
    }
    else{
        alert(response.statusText)
    }
}

const getGroupInfo = async () =>{
    const response = await fetch('/projects/groupInfo/' + part,{
        method: "GET"
    })
    if (response.ok){
        response.json().then(function(data){
            document.getElementById('groupName').innerHTML = data.name
            document.getElementById('groupDesc').innerHTML = data.description
            groupAdmin = data.adminID
            var newProp = data
            newProp.disc = 'groupInfo'
            projectInfo.push(newProp)
        })

    }
    else{
        alert(response.statusText)
    }
}

const getSocialLinks = async () =>{
    const response = await fetch('/projects/social/' + part,{
        method: "GET"
    })
    if (response.ok){
        response.json().then(function(data){
            var newProp = data
            newProp.disc = 'links'
            projectInfo.push(newProp)
            switch(data.length){
                case 1:
                    let linkName = data[0].name
                    let actualLink = data[0].SocialLink
                    const linkHTML = `
                    <div class="col-5">
                        <a href="${actualLink}" id="link1">${linkName}</a>
                    </div>`

                    $('#insertLink').append(linkHTML)


                    break
                case 2:
                    for (let i = 0; i <data.length; i++){
                        let linkName = data[i].name
                        let actualLink = data[i].SocialLink
                        const linkHTML = `
                        <div class="col-6">
                            <a href="${actualLink}" id="link1">${linkName}</a>
                        </div>`

                        $('#insertLink').append(linkHTML)
                    }
                    break
                case 3:
                    for (let i = 0; i <data.length; i++){
                        let linkName = data[i].name
                        let actualLink = data[i].SocialLink
                        const linkHTML = `
                        <div class="col-4">
                            <a href="${actualLink}" id="link1">${linkName}</a>
                        </div>`

                        $('#insertLink').append(linkHTML)
                    }
                    break
                case 4: 
                    for (let i = 0; i <data.length; i++){
                        let linkName = data[i].name
                        let actualLink = data[i].SocialLink
                        const linkHTML = `
                        <div class="col-3">
                            <a href="${actualLink}" id="link1">${linkName}</a>
                        </div>`
    
                        $('#insertLink').append(linkHTML)
                    }
                    
                    break
            }
        })

    }
    else{
        alert(response.statusText)
    }
}


const getUsers = async () =>{
    const response = await fetch('/projects/groupUsers/' + part,{
        method: "GET"
    })
    if (response.ok){
        response.json().then(function(data){
            for (let i = 0; i < data.length; i++){
                let usersName = data[i].Username
                const userHTML = `<a class="list-group-item list-group-item-action boxTextColor midBg" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab">${usersName}</a>`

                $('#insertUsers').append(userHTML)
            }
        })
    }
    else{
        alert(response.statusText)
    }
}

const getTechInUse = async () =>{
    const response = await fetch('/projects/inUse/' + part,{
        method: "GET"
    })
    if (response.ok){
        response.json().then(function(data){
            var newProp = data
            newProp.disc = 'inUse'
            projectInfo.push(newProp)
            for (let i = 0; i < data.length; i++){
                let tech = data[i].Tech
                const techIUHTML = `<a class="list-group-item list-group-item-action boxTextColor midBg" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab">${tech}</a>`

                $('#insertTechInUse').append(techIUHTML)
            }
        })
    }
    else{
        alert(response.statusText)
    }
}

const getTechNeeded = async () =>{
    const response = await fetch('/projects/needed/' + part,{
        method: "GET"
    })
    if (response.ok){
        response.json().then(function(data){
            var newProp = data
            newProp.disc = 'needed'
            projectInfo.push(newProp)
            for (let i = 0; i < data.length; i++){
                let tech = data[i].Tech
                const userHTML = `<a class="list-group-item list-group-item-action boxTextColor midBg" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab">${tech}</a>`

                $('#insertTechNeeded').append(userHTML)
            }
        })
    }
    else{
        alert(response.statusText)
    }
}
function editGroup(){

}

getCurrUser = async()=>{
    console.log(projectInfo)
    const response = await fetch('/projects/user',{
        method: "GET"
    })
    if (response.ok){
        response.json().then(function(data){
            if (data != null){ //user is logged in
                if (data.id == groupAdmin){
                    const adminButton = `<button class = "btn bodyButtons" onclick="editGroup()">Edit Group</button>`
                    $('#insertEdit').append(adminButton)
                }
            }
            else{ //user is not logged in

            }
        })

    }
    else{
        alert(response.statusText)
    }
}

getGroupPosts()

getGroupInfo()

getSocialLinks()

getUsers()

getTechInUse()

getTechNeeded()

getCurrUser()

function editGroup(){

    console.log(projectInfo)

    for (let i = 0; i < projectInfo.length; i++){
        if (projectInfo[i].disc == 'groupInfo'){
            groupName2.placeholder = projectInfo[i].name
            groupDisc.placeholder = projectInfo[i].description
            groupDifficulty.value = projectInfo[i].difficulty
        }
        else if (projectInfo[i].disc == 'links'){
            const linkarr = projectInfo[i]
            if(typeof linkarr[0] === 'object'){
                link1Name.placeholder = linkarr[0].name
                link1Link.placeholder = linkarr[0].SocialLink
            }
            
            if(typeof linkarr[1] === 'object'){
                link2Name.placeholder = linkarr[1].name
                link2Link.placeholder = linkarr[1].SocialLink
            }

            if(typeof linkarr[2] === 'object'){
                link3Name.placeholder = linkarr[2].name
                link3Link.placeholder = linkarr[2].SocialLink
            }

            if(typeof linkarr[3] === 'object'){
                link4Name.placeholder = linkarr[3].name
                link4Link.placeholder = linkarr[3].SocialLink
            }
        }
        else if (projectInfo[i].disc == 'inUse'){
            
        }
        else if (projectInfo[i].disc == 'needed'){

        }
    }
    


    document.getElementById('createGroup').style = "display: block;"
}

function closeMod(){
    document.getElementById('createGroup').style = "display: none;"
}

function saveChanges(){

}

xMod.addEventListener('click', closeMod)
botClose.addEventListener('click', closeMod)
modCreate.addEventListener('click', saveChanges)