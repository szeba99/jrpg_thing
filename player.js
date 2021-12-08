var player = 
{
    x:4,
    y:9,

    health:10,

    units:
    {
        monster:
        {
            health:10,
            skills:
            {
                tackle:
                {
                    damage:10
                }
            }
        }
    }
};

var playermapx = player.x*64;
var playermapy = player.y*64;

document.getElementById("TheMap").innerHTML += '<div id="player"></div>';
document.getElementById('player').style=`position:absolute; left:${playermapx}px; top:${playermapy}px;`;

function Go(x,y)
{
    var surroundings =
    [
        [player.x, player.y-1],
        [player.x+1,player.y-1],
        [player.x+1,player.y],
        [player.x+1,player.y+1],
        [player.x,player.y+1],
        [player.x-1,player.y+1],
        [player.x-1,player.y],
        [player.x-1,player.y-1]
    ];

    var destination = [x,y];
    for (var i in surroundings)
    {
        if (destination[0] === surroundings[i][0] && destination[1] === surroundings[i][1]) //stupid javascript
        {

            player.x = x;
            player.y = y;

            playermapx = player.x*64;
            playermapy = player.y*64;

            document.getElementById('player').style=`position:absolute; left:${playermapx}px; top:${playermapy}px;`;
        }
    }
    //check for enemy
    for (var i in enemies)
    {
        if (enemy[i].x === player.x && enemy[i].y === player.y)
        {
            //do something...
            //maybe start battle scene
        }
    }
    //
}