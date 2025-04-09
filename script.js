// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = true;
  }
}



// Theme Changer 

// function click(){
//     let input = document.getElementById("first").value;
//     document.body.style.background=input;
// }

// document.body.addEventListener("click",click);





// dark mode   

let button =document.getElementById("toggle")
button.addEventListener('click', function(){
  document.body.classList.toggle('dark-mode');
});

 let btn2 =document.getElementById("first")
 btn2.addEventListener('click', function(){

   let input2 = document.getElementById("second").value;  
   document.body.style.background=input2;
});



function changeBackgroundColor(event) {
  document.body.style.backgroundColor = event.target.value;
}