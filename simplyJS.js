var blogObj = [];

function addBlog()
{
    var data = read();
    blogObj.push(data);
    localStorage.setItem("key", blogObj);
    addBlock();
    reset();
}

function read()
{
    var obj = {};
    obj.title = document.getElementById("title").value;
    obj.article = document.getElementById("article").value;
    obj.imagePath = document.getElementById("imageFile").value;
    console.log(obj);
    return obj;
}

function reset()
{
    document.getElementById("title").value = "";
    document.getElementById("article").value = "";
    document.getElementById("imageFile").value = "";
}

function addBlock()
{
    let div = document.createElement('div');
    div.setAttribute("id", "block");
    for(var i = 0; i < blogObj.length; i++)
    {
        
        var imagePath = imageExt(blogObj[i]);
        div.setAttribute("class", "col");
        div.setAttribute("style", "background-image: url(\"" + imagePath + "\"); background-size: cover;");
        div.setAttribute("onclick", "openBlog("+i+");")
        div.innerText = blogObj[i].title;
        document.body.appendChild(div);
        
    }
}

function imageExt(obj)
{
    var str = obj.imagePath;
    var index = str.lastIndexOf("\\");
    return str.substring(index+1);
}

function openBlog(index)
{
    var win = window.open();
    win.document.write("<link rel=\"stylesheet\" href =\"style.css\"/>");
    win.document.write("<h2 id =\"blogTitle\">" + blogObj[index].title +"</h2>");
    win.document.write("<p id =\"blogArticle\">" + blogObj[index].article + "</p>");
}