var id =0

function likebtn() {
    id++;
    var template1 = id + ' ' + 'person likes this!';
    document.getElementById('likednumbers').innerHTML = template1;
}

function showcomments(id) {
    var template2 = '<p style="background: white;padding: 10px;margin-inline: 10px;">'+id.value+'</p>'
    document.getElementById('backgrounddiv').style.background = 'lightgray';
    document.getElementsByClassName('Commentsection')[0].innerHTML += template2;
}

function editablecontent() {
    var templateedit2 = '<i class="fa-solid fa-floppy-disk"></i>'
    document.getElementsByClassName('Editbtn')[0].innerText = 'Save';
    document.getElementsByClassName('Editbtn')[0].innerHTML = "Save"+ ' ' +templateedit2;
    document.getElementsByClassName('Editbtn')[0].setAttribute("class","Savebtn");
    document.getElementsByClassName('Savebtn')[0].setAttribute("onclick","Savecontent()");
    document.getElementById('Post1').style.border = 'solid';
    document.getElementById('Post1').style.borderColor = 'pink';
    document.getElementsByClassName('Mainpost')[0].setAttribute("contentEditable", true);
    document.getElementById('Post1').setAttribute("contentEditable", true);
    document.getElementsByClassName('Mainpost')[0].style.border = 'solid';
    document.getElementsByClassName('Mainpost')[0].style.borderColor = 'pink';
    
}

function Savecontent() {
    var templateedit = '<i class="fa-solid fa-pen-to-square"></i>'
    document.getElementsByClassName("Savebtn")[0].innerText = "Edit";
    document.getElementsByClassName('Savebtn')[0].setAttribute("class","Editbtn");
    document.getElementsByClassName('Editbtn')[0].innerHTML = "Edit"+ ' ' +templateedit;
    document.getElementById('Post1').setAttribute("style","border","none");
    document.getElementById('Post1').removeAttribute("contenteditable");
    document.getElementsByClassName('Mainpost')[0].setAttribute("style","border","none");
    document.getElementsByClassName('Mainpost')[0].removeAttribute("contenteditable");
    document.getElementById("updatemessage1").innerHTML = "UPDATED:";
    document.getElementById("updatemessage2").innerHTML = "UPDATED:";
}