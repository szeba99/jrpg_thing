var enemies=
[
    { //first enemy defined
        x:2,
        y:4,

        units:
        {
            sanyi:
            {
                health:10,
                skills:
                {
                    tackle:
                    {
                        damage:1
                    }
                }
            }
        }
    }
]

//render enemy

var enemymapx = enemies[0].x*64;
var enemymapy = enemies[0].y*64;

document.getElementById("TheMap").innerHTML += '<div id="enemy" onclick="Fight()"></div>';
document.getElementById('enemy').style=`position:absolute; left:${enemymapx}px; top:${enemymapy}px;`;





function Fight()
{
    for (var i in surroundings)
    {
        if (enemies[0].x === surroundings[i][0] && enemies[0].y === surroundings[i][1]) //stupid javascript
        {
            document.getElementById("TheMap").hidden=true;
            document.getElementById("TheBattle").hidden=false;
            document.getElementById("musicc2").play();
            document.getElementById("musicc2").hidden=false;
            document.getElementById("musicc").pause();
            document.getElementById("musicc").hidden=true;
        }
    }
}
