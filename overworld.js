var MAP01 =
[
    ["G","G","G","G","G","G","D","G","G","G",],
    ["W","W","G","G","G","G","D","G","T","G",],
    ["G","W","W","W","G","G","D","D","G","G",],
    ["G","G","G","W","W","G","T","D","G","G",],
    ["G","T","G","G","W","W","D","D","G","G",],
    ["G","T","G","G","G","W","D","G","T","G",],
    ["G","G","T","G","G","W","W","W","G","G",],
    ["T","T","G","G","D","D","D","W","W","G",],
    ["T","T","G","T","D","G","G","G","W","W",],
    ["T","T","G","G","D","G","G","G","G","G",],
];

//var music = new Audio("music/overworld.mp3");
//music.play();
//music.loop=true;

function RenderMap()
{
    var MAP = "";
    for (var i in MAP01)
    {
        MAP += "<div id='line'>";
        for (var j in MAP01[i])
        {
            if (MAP01[i][j] === "G")
            {
                
                MAP += `<div id='grass' onclick='Go(${j},${i})'></div>`;
            }
            if (MAP01[i][j] === "D")
            {
                
                MAP += `<div id='dirt' onclick='Go(${j},${i})'></div>`;
            }
            if (MAP01[i][j] === "W")
            {
                
                MAP += "<div id='water'></div>";
            }
            if (MAP01[i][j] === "T")
            {
                
                MAP += `<div id='trees' onclick='Go(${j},${i})'></div>`;
            }
            
        }
        MAP += "</div>";
    }

    document.getElementById("TheMap").innerHTML = MAP;
}

RenderMap();