var path = this.pathname || window.location.pathname;
var part = path.split('/').pop(); //groupNumber
let groupAdmin 
let projectInfo  = []
let thisUser

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

const submitPost = document.getElementById('submitPost')

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
                thisUser = data.id
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
        else if (projectInfo[i].disc ==  'needed'){
            var neededTable = projectInfo[i]
            for (let i = 0; i < neededTable.length; i++){
                let input = document.getElementById(neededTable[i].Tech)
                input.checked = true
            }
        }
    }
    


    document.getElementById('createGroup').style = "display: block;"
}

function closeMod(){
    document.getElementById('createGroup').style = "display: none;"
}

const updateGroupLinks = async () =>{
    let updatedGroupLinks = []
    let link1 = {GroupId: part}
    let link2 = {GroupId: part}
    let link3 = {GroupId: part}
    let link4 = {GroupId: part}

    
    if (link1Name.value == ''){
        link1.name = link1Name.placeholder
    }
    else{
        link1.name = link1Name.value
    }

    if (link1Link.value == ''){
        link1.SocialLink = link1Link.placeholder
    }
    else{
        link1.SocialLink = link1Link.value
    }


    if (link2Name.value == ''){
        link2.name = link2Name.placeholder
    }
    else{
        link2.name = link2Name.value
    }

    if (link2Link.value == ''){
        link2.SocialLink = link2Link.placeholder
    }
    else{
        link2.SocialLink = link2Link.value
    }


    if (link3Name.value == ''){
        link3.name = link3Name.placeholder
    }
    else{
        link3.name = link3Name.value
    }

    if (link3Link.value == ''){
        link3.SocialLink = link3Link.placeholder
    }
    else{
        link3.SocialLink = link3Link.value
    }


    if (link4Name.value == ''){
        link4.name = link4Name.placeholder
    }
    else{
        link4.name = link4Name.value
    }

    if (link4Link.value == ''){
        link4.SocialLink = link4Link.placeholder
    }
    else{
        link4.SocialLink = link4Link.value
    }

    updatedGroupLinks.push(link1)
    updatedGroupLinks.push(link2)
    updatedGroupLinks.push(link3)
    updatedGroupLinks.push(link4)

    for (let i = 0; i < updatedGroupLinks.length; i++){
        if (updatedGroupLinks[i].name != ''){
            const response = await fetch('/projects/updateLinks',{
                method: "POST",
                body: JSON.stringify(updatedGroupLinks[i]),
                headers: { 'Content-Type': 'application/json' },
            } )
            if (response.ok){
                console.log("Fin")
            }
            else{
                alert(response.statusText)
            }
            console.log(updatedGroupLinks[i])
        }
        
    }
    window.location.reload()
}

const destroyLinks = async () => {
    const response = await fetch('/projects/removeLinks/' + part,{
        method: "DELETE"
    })
    if (response.ok){
        console.log("deleted")
    }
    else{
        alert(response.statusText)
    }

    updateGroupLinks()
}

const updateGroupInfo = async () =>{
    let updatedGroupInfo = {}

    if (groupName2.value == ''){
        updatedGroupInfo.name = groupName2.placeholder
    }
    else{
        updatedGroupInfo.name = groupName2.value
    }

    updatedGroupInfo.id = part

    updatedGroupInfo.difficulty = groupDifficulty.value

    if (groupDisc.value == ''){
        updatedGroupInfo.description = groupDisc.placeholder
    }
    else{
        updatedGroupInfo.description = groupDisc.value
    }

    updatedGroupInfo.adminID = groupAdmin

    

    const response = await fetch('/projects/remakeGroup',{
        method: "POST",
        body: JSON.stringify(updatedGroupInfo),
        headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok){
        console.log("group Created")
    }
    else{
        alert(response.statusText)
    }

    destroyLinks()
}

const deleteGroup = async () => {
    const response = await fetch('/projects/removeGroup/' + part,{
        method: "DELETE"
    })
    if (response.ok){
        console.log("deleted")
    }
    else{
        alert(response.statusText)
    }
    updateGroupInfo()
}

const saveLinks = async () =>{
    const row1 = groupTechNeed.children[0]
    const row2 = groupTechNeed.children[1]
    let updatedTechNeeded = []
    
    for (let i = 0; i < row1.children.length; i++){
        if (row1.children[i].children[1].checked){
            const newNeeded = {
                GroupId: part,
                Tech: row1.children[i].children[1].id
            }
            updatedTechNeeded.push(newNeeded)
        }
    }

    for (let i = 0; i < row2.children.length; i++){
        if (row2.children[i].children[1].checked){
            const newNeeded = {
                GroupId: part,
                Tech: row2.children[i].children[1].id
            }
            updatedTechNeeded.push(newNeeded)
        }
    }

    console.log(updatedTechNeeded)

    for (let i = 0; i < updatedTechNeeded.length; i++){
        const response = await fetch('/projects/updateNeed/' + part,{
            method: "POST",
            body: JSON.stringify(updatedTechNeeded[i]),
            headers: { 'Content-Type': 'application/json' },
        })
    }
    

    deleteGroup()
}

const saveChanges = async () =>{
    const response = await fetch('/projects/removeTech/' + part,{
        method: "DELETE"
    })
    if (response.ok){
        console.log("deleted")
    }
    else{
        alert(response.statusText)
    }
    saveLinks()
}

const postTime = async (e) =>{
    console.log()
    let newPost = {
        GroupId: part,
        UsersID: thisUser,
        PostContent: $('#yourPost')[0].value

    }
    const response = await fetch('/projects/addPost', {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok){
        console.log("Posted")
    }
    else{
        alert(response.statusText)
    }
    window.location.reload()
}


submitPost.addEventListener('click', postTime)
xMod.addEventListener('click', closeMod)
botClose.addEventListener('click', closeMod)
modCreate.addEventListener('click', saveChanges)