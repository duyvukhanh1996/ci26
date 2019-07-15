import login from "../views/auth/login.js" 
// import registerScreen from "../views/auth/register.js"
import view from "../views/view.js"



window.onload = function() {
    view.setScreen(login.view,login.onload)
}