const view = {

}

view.setScreen = function(content,loadEvent) {
    document.getElementById("app").innerHTML = content;
    if (loadEvent != undefined) {
        loadEvent();
    }
}

export default view;