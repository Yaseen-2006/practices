function NewCard(videoLink, duration, about, Cname, views, MonthsOld){
    let viewNum
    if(views < 999){
        viewNum = views
    }
    else if(views < 999999){
        viewNum = views/1000 + "k"
    }
    else{
        viewNum = views/1000000 + "M"
    }
    let html = `<div class="container">
        <div class="image">
            <img src="${videoLink}"
                alt="">
                <div class="time">
                    ${duration}
                </div>
        </div>
        <div class="information">

        <p class="para1">${about}</p>
        <p class="para2"> ${Cname} . ${viewNum} views . ${MonthsOld} months old</p>
        </div>
    </div>`
    document.querySelector(".cards").innerHTML = document.querySelector(".cards").innerHTML + html
}

NewCard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA", "3:40", "this is inserted video of CodeWithHarry | tutorial #42", "CodeWithHarry", "100000000", "3")
NewCard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA", "31:40", "this is inserted video of CodeWithHarry | tutorial #42", "CodeWithHarry", "100000000", "3")
