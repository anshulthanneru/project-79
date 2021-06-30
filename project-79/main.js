menu_list_array = ["Veg Margherita Pizza","Chicken Tandoori Pizza","Veg Supreme Pizza","Paneer Tikka Pizza","Deluxe Veggie Pizza","Veg Extravaganza Pizza"];
    
function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menu_list_array.length;i++){

        htmldata=htmldata+'<div class="card">' +'<img src="images/pizzaImg.png"/>' + menu_list_array[i] + '</div>'
    }
      htmldata=htmldata+"</section>"
     document.getElementById("display_addedmenu").innerHTML = htmldata;
    
}

function show_menu(){
    document.getElementById("add_item").style.display="inline-block"
    document.getElementById("add_btn").style.display="inline-block"
}

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}
