var itemlist = [];

var addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList); 

function addList() {
    var item = document.querySelector("#item").value;
    if (item != "") {
        itemlist.unshift(item); 
        
        document.querySelector("#item").value = "";
        document.querySelector("#item").focus();
    }
    showList();
}

function showList() {
    var list = "<ul>";
    for (var i=0; i < itemlist.length; i++) {
        list += "<li>" + itemlist[i] + "<span class='close' id='" + i + "'> 삭제 </span></li>";
    }
    list += "</ul>";

    document.querySelector("#itemlist").innerHTML = list;

    var remove = document.querySelectorAll(".close");
    for (var i=0; i < remove.length; i++) {
        remove[i].addEventListener("click", removeList);
    }
}

function removeList() {
    var id = this.getAttribute("id");
    var deletedItem = itemlist[id];
    itemlist.splice(id, 1);
    
    alert("[" + deletedItem + "] 항목이 삭제되었습니다");
    
    showList();
}