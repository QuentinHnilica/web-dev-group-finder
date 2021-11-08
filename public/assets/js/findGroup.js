let testVar = "Hello World"

const insertPost = document.getElementById('postGroup')



function loadPosts(){
    

    for (let i = 0; i < 5; i++){
        if (i == 1){
            testVar = "Hello World"
        }
        else if (i == 2){
            testVar = "I can't believe this works"
        }
        else{
            testVar = "Yessir!"
        }


        const groupPost = `<div class = "d-flex flex-column align-items-center">
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
}

loadPosts()
