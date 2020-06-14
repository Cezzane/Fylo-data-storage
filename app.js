
// function boostBar(){
// var bar_width=document.querySelector('storage__bar').style.width;
//  var id=setInterval(frame,5);
//     function frame(){
//     while(bar_width<80%){

//     }
// }
var bar=document.querySelector('.storage_process');
var tooltip=document.querySelector('.storage__toolkit');
document.addEventListener("DOMContentLoaded", function(event) {
    console.log('app works!');
    var progress=bar.offsetWidth;
    console.log(progress);
    var id=setInterval(frame,5 );
    function frame(){
    if(progress==283){
        clearInterval(id);
        tooltip.style.opacity=1;
    }else{
        progress++;
        var progrssPx=progress+"px";
        bar.style.width=progrssPx;
    }
    }
  },
);



