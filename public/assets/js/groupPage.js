var path = this.pathname || window.location.pathname;
var part = path.split('/').pop(); //groupNumber

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

getCurrUser = async()=>{
    const response = await fetch('/projects/user',{
        method: "GET"
    })
    if (response.ok){
        response.json().then(function(data){
            if (data != null){ //user is logged in
                console.log(data)
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