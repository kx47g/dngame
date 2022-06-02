window.addEventListener('load', function(){
    let locate = "";
    let difficult = "";
    var locateText = document.getElementById("lo");
    var difficultText = document.getElementById("di");
    locateText.innerHTML = locate;
    difficultText.innerHTML = difficult;

    document.getElementById("Back").addEventListener('click', function(){
        location.href = 'index.html';
        console.log("Back");
    });

    function download_txt(file_name, data) {
 
        const blob = new Blob([data], {type: 'text/plain'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.download = file_name;
        a.href = url;
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
     
    }

    document.getElementById("Next").addEventListener('click', function(){
        let array = [
            String(location),
            String(difficult),
            ];
            download_txt("savedata.txt",String(location,difficult))
    });

    document.getElementById("Desert").addEventListener('click', function(){
        locate="Desert";
        console.log(locate);
        locateText.innerHTML = "砂漠";
    });
    document.getElementById("Wetland").addEventListener('click', function(){
        locate="Wetland";
        console.log(locate);
        locateText.innerHTML = "湿地";
    });
    document.getElementById("Grassland").addEventListener('click', function(){
        locate="Grassland";
        console.log(locate);
        locateText.innerHTML = "草原";
    });

    document.getElementById("Easy").addEventListener('click', function(){
        difficult="Easy";
        console.log(difficult);
        difficultText.innerHTML = "イージー";
    });
    document.getElementById("Normal").addEventListener('click', function(){
        difficult="Normal";
        console.log(difficult);
        difficultText.innerHTML = "ノーマル";
    });
    document.getElementById("Hard").addEventListener('click', function(){
        difficult="Hard";
        console.log(difficult);
        difficultText.innerHTML = "ハード";
    });
});