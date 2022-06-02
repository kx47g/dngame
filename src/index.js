window.addEventListener('load', function(){

    document.getElementById("Newgame").addEventListener('click', function(){
        location.href = 'world_option.html';
    });
    document.getElementById("Loadgame").addEventListener('click', function(){
        console.log("Loadgame");
    });
    document.getElementById("Option").addEventListener('click', function(){
        console.log("Option");
    });
});