let thispage
let maxPage
let home = true
const chekBox = document.getElementById('searchQuery')
const searchGroup = document.getElementById('searchGroup')
let searchVar
let difficulty
let groupTableTech = []
let finalGroupResult = []

function viewGroup(e){
    window.location = window.location + "projects/" + e[0].id
}

function addBottomBar(groupLength){
    document.getElementById('navGroup').innerHTML = ""
    if (groupLength > 6){
        const amtOfPages = Math.floor( groupLength / 5 )
        let pages = `<li class="page-item"><a class="page-link" onclick='nextPage(${1})' >${1}</a></li>
        `
        for (let i = 1; i < amtOfPages + 1; i++){
            pages = pages +  `<li class="page-item"><a class="page-link" onclick='nextPage(${i + 1})'>${i + 1}</a></li>
            `
        }
        const pagination = `<nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center" >
            <li class="page-item"><a class="page-link" onclick='nextPage("Previous")'>Previous</a></li>
            ${pages}
            <li class="page-item"><a class="page-link" onclick='nextPage("Next")'>Next</a></li>
        </ul>
        </nav>`
        $('#navGroup').append(pagination)
        maxPage = amtOfPages + 1
        }
}

const getTech = async(thisID, groupDesc, groupDiff, groupName, groupLength, index, cap, lastPage, GroupId) =>{
    let techNeededArr = []
    const response = await fetch("/api/projects/search",{
        method: "GET"
    })
    if (response.ok){
        response.json().then(function(data){
            
            for (let i = 0; i <data.length; i++){
                if (data[i].GroupId == thisID){
                    console.log(data[i].Tech)
                    techNeededArr.push(data[i].Tech.toString())
                    console.log(techNeededArr)
                }
            }
            const groupPost = 
            `<div class = "d-flex flex-column align-items-center">
            <section class = "border m-4" style="width: 90%;">
            <div class = "d-flex align-items-start flex-column m-3">
                <h3 class="boxTextColor">${groupName}</h3>
                <p class="boxTextColor">${groupDesc}</p>
                <p class="boxTextColor">Difficulty: ${groupDiff}<p>
            </div>

            <!-- bottom of sub-box -->
            <div class = "d-flex justify-content-between m-3">
                <div>
                    <h6 class="boxTextColor">Needs: ${techNeededArr}</h6>
                    <!-- iconHolder -->
                    <a></a>
                </div>
                <button class = "btn bodyButtons " id="${GroupId}" onclick = "viewGroup($(this))" >View Group</button>
            </div>
            </section>
            </div>`
            $('#postGroup').append(groupPost)

            if (lastPage == false){
                if (index == cap + 4){
                    addBottomBar(groupLength)
                }
            }
            else{
                console.log(index, cap)
                if (index == cap +1){
                    console.log('bruh')
                    addBottomBar(groupLength)
                }
            }
            
        
        })
        
    }
    else{
        alert(response.statusText)
    }
}

const finalGroupHandler = async(currPage) =>{
    finalGroupResult = []
    const resProj = await fetch("/api/projects/",{
        method: "GET"
    })
    if (resProj.ok){
        resProj.json().then(function(proj){
            for (let i = 0; i < proj.length; i++){
                groupTableTech.forEach(element => {
                    if (element.GroupId == proj[i].id){
                        if (proj[i].difficulty == difficulty){
                            finalGroupResult.push(proj[i])
                        }
                        else if(proj[i].difficulty == difficulty - 1){
                            finalGroupResult.push(proj[i])
                        }
                        else if (proj[i].difficulty == difficulty + 1){
                            finalGroupResult.push(proj[i])
                        }
                        
                    }
                });
            }
            console.log(finalGroupResult)







            var first = false
            var i1
            let index = 0

            document.getElementById('postGroup').innerHTML = ""

            if (currPage != null){
                index = (currPage -1) * 5
            }
            for (index; index < finalGroupResult.length; index++){
                if (first == false ){
                    first = true
                    i1 = index
                }
                if (index == i1 + 5 ){
                    break;
                }
                //description is an object value
                let groupDesc = finalGroupResult[index].description
                    let groupDiff = finalGroupResult[index].difficulty
                    let groupName = finalGroupResult[index].name
                    let GroupId = finalGroupResult[index].id
                const groupPost = 
                `<div class = "d-flex flex-column align-items-center">
                <section class = "border m-4" style="width: 90%;">
                <div class = "d-flex align-items-start flex-column m-3">
                <h3 class="boxTextColor">${groupName}</h3>
                <p class="boxTextColor">${groupDesc}</p>
                <p class="boxTextColor">Difficulty: ${groupDiff}<p>
                </div>

                <!-- bottom of sub-box -->
                <div class = "d-flex justify-content-between m-3">
                    <div>
                        <h6 class="boxTextColor">Needs:</h6>
                        <!-- iconHolder -->
                        <a></a>
                    </div>
                    <button class = "btn bodyButtons " id="${GroupId}" onclick = "viewGroup($(this))" >View Group</button>
                </div>
                </section>
                </div>`
                $('#postGroup').append(groupPost)
            }
            if (finalGroupResult.length > 6){
                const amtOfPages = Math.floor( finalGroupResult.length / 5 )
                let pages = `<li class="page-item"><a class="page-link" onclick='nextPage(${1})' >${1}</a></li>
                `
                for (let i = 1; i < amtOfPages + 1; i++){
                    pages = pages +  `<li class="page-item"><a class="page-link" onclick='nextPage(${i + 1})'>${i + 1}</a></li>
                    `
                }
                console.log(pages)
                const pagination = `<nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center" >
                    <li class="page-item"><a class="page-link" onclick='nextPage("Previous")'>Previous</a></li>
                    ${pages}
                    <li class="page-item"><a class="page-link" onclick='nextPage("Next")'>Next</a></li>
                </ul>
                </nav>`
                $('#postGroup').append(pagination)
                maxPage = amtOfPages + 1
            }

















        })
    }
    else{
        alert(resProj.statusText)
    }
}

const findGroupHandler = async (currPage) =>{
    if (home){ // defalt homepage logic
        let groupInfo
        const response = await fetch("/api/projects/", {
            method: "GET"
        })
        if (response.ok) {
            response.json().then(function(data){
                //data is the json file
                var first = false
                var i1
                let index = 0
                let lastPage = false
    
                document.getElementById('postGroup').innerHTML = ""
    
                if (currPage != null){
                    index = (currPage -1) * 5
                }
                for (index; index < data.length; index++){
                    if (first == false ){
                        first = true
                        i1 = index
                        if (data.length - index < 5 ){
                            il = data.length
                            lastPage = true
                        }
                    }
                    if (index == i1 + 5 ){
                        break;
                    }
                    //description is an object value
                    let groupDesc = data[index].description
                    let groupDiff = data[index].difficulty
                    let groupName = data[index].name
                    let groupID = data[index].id
                    getTech(data[index].id, groupDesc, groupDiff, groupName, data.length, index, i1,lastPage, groupID)
                    
                }
                
            })
            
        }
        else{
            alert(response.statusText);
        }
    
        
        const insertPost = document.getElementById('postGroup')
            
            //     <button class = "btn bodyButtons" formaction="/projects/${data[i].id}>View Group</button>
            //     </div>
            //     </section>
            //     </div>`
            //     $('#postGroup').append(groupPost)
            // }
       //})
    }
    else{ //Search Logic
        groupTableTech = []
        const response = await fetch("/api/projects/search", {
            method: "GET"
        })
        if (response.ok){
            response.json().then(function(data){
                for(let i = 0; i < data.length; i++){
                    if (data[i].Tech == searchVar){
                        groupTableTech.push(data[i])
                    }
                }
                console.log(groupTableTech)
                finalGroupHandler(currPage)
            })
        }
        else{
            alert(response.statusText)
        }
    }
    
}
findGroupHandler()

function nextPage(num){
    if (!isNaN(num)){
        thispage = num
    }
    else{
        if (num === 'Next'){
            if (thispage == null){
                thispage = 2
            }
            else{
                if (thispage < maxPage){
                    thispage +=1
                }
               
            }
        }
        else{
            if (thispage == null){
                return
            }
            else{
                if (thispage >1)
                thispage -= 1
            }
        }
    }
    
    findGroupHandler(thispage)
}

function searchForGroups(){
    home = false
    for (let i = 0; i < document.querySelectorAll('#theBox').length; i++){
        if ( document.querySelectorAll('#theBox')[i].checked == true){
            //console.log(document.querySelectorAll('#theBox')[i].parentNode)
            searchVar = document.querySelectorAll('#theBox')[i].parentNode.childNodes[3].id
            console.log(searchVar)
        }
    }
    difficulty = parseInt( document.querySelector('#difficulty').value )
    
    findGroupHandler()
}




searchGroup.addEventListener('click', searchForGroups)

