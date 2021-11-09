const findGroupHandler = async (event) =>{
    let groupInfo
    const response = await fetch("/api/projects/", {
        method: "GET"
    })
    if (response.ok) {
        response.json().then(function(data){
            //data is the json file
            for (let i = 0; i < data.length; i++){
                if (i == 6 ){
                    break;
                }
                //description is an object value
                testVar = data[i].description
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

let testVar = "Hello World"

const insertPost = document.getElementById('postGroup')

}
findGroupHandler()