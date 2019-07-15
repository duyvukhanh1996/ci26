import login from './login.js'
import view from '../view.js'

const registerScreen = `
    


    <div class="container">
        <div class="row">
            <div class="col-sm">
                
            </div>
            <div class="col-sm">
                <form>
                    <h2> Register </h2>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                        <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                    </div>
                        <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <button id="js-btn-MoveToLoginPage" type="button" class="btn btn-secondary">Back to login page</button>

                </form>
            </div>
            <div class="col-sm">
                
            </div>
        </div>
    </div>

    
`

function onload() {
    const btnMoveToLoginPage = document.getElementById('js-btn-MoveToLoginPage');
    btnMoveToLoginPage.addEventListener('click',function() {
        view.setScreen(login.view,login.onload)
    })
}


const register = {
    view: registerScreen,
    onload : onload
}
export default register;