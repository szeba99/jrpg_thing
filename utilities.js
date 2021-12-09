function LoadHTML(page,targetID)
{
    var request = new XMLHttpRequest();

    request.open('GET', '/'+page, true);

    request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
        var resp = request.responseText;

        document.getElementById(targetID).innerHTML = resp;
    }
    };

    request.send();

}