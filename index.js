const element = document.getElementById("myBtn");
element.addEventListener("click", function () {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://api.github.com/users", true);
    xhttp.onload = function () {
        if (this.status == 200) {
            const user = JSON.parse(this.responseText);
            let output = "";
            console.log(user);
            for (let i in user) {
                output += `<div class = "row  text-dark"> 
                    <div class = "col-6">
                    <img src="${user[i].avatar_url} style="height=200px width=300px" class="border border-dark rounded-circle mb-2 mx-3 mt-2" >
                    </div>
                    <div class = "col-6 mt-5 font-weight-bolder fs-5">
                      <p>ID:-> ${user[i].id}</p>
                    <p>NAME:-> ${user[i].login}</p>
                    <p>URL:-> ${user[i].avatar_url}</p>
                </div>
                </div>`;
                document.getElementById("user").innerHTML = output;
            }

        }
    }
    xhttp.send();
});