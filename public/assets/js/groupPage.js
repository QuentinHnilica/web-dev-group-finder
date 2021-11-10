const getGroupPosts = async () =>{
    const response = await fetch('/projects/posts/1',{
        method: "GET"
    })
    if (response.ok){
        response.json().then(function(data){
            console.log(data)
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

getGroupPosts()