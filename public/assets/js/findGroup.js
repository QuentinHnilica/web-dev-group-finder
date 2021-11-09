let thispage
let maxPage
let home = true
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
    
                document.getElementById('postGroup').innerHTML = ""
    
                if (currPage != null){
                    index = (currPage -1) * 5
                }
                for (index; index < data.length; index++){
                    if (first == false ){
                        first = true
                        i1 = index
                    }
                    if (index == i1 + 5 ){
                        break;
                    }
                    //description is an object value
                    testVar = data[index].description
                    const groupPost = 
                    `<div class = "d-flex flex-column align-items-center">
                    <section class = "border m-4" style="width: 90%;">
                    <div class = "d-flex align-items-start flex-column m-3">
                        <h3 class="boxTextColor">Group name</h3>
                        <p class="boxTextColor">${testVar}</p>
                    </div>

                    <!-- bottom of sub-box -->
                    <div class = "d-flex justify-content-between m-3">
                        <div>
                            <h6 class="boxTextColor">Needs:</h6>
                            <!-- iconHolder -->
                            <a></a>
                        </div>
                        <button class = "btn bodyButtons">View Group</button>
                    </div>
                    </section>
                    </div>`
                    $('#postGroup').append(groupPost)
                }
                if (data.length > 6){
                    const amtOfPages = Math.floor( data.length / 5 )
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
            alert(response.statusText);
        }
    
        let testVar = "Hello World"
        
        const insertPost = document.getElementById('postGroup')
            
                <button class = "btn bodyButtons" formaction="/projects/${data[i].id}>View Group</button>
                </div>
                </section>
                </div>`
                $('#postGroup').append(groupPost)
            }
        })
    }
    else{
        alert(response.statusText);
    }
    else{ //Search Logic

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
            console.log("Fuck you")
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