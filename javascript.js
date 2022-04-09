let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit', formHandler)
const alertDOM = document.querySelector('#alert')

const alertFunction = (tittle, message, className="warning") =>
`<div class="alert alert-${className} alert-dismissible fade show" role="alert">
    <strong>${tittle}</strong> ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")
    let text = ""
    if(SCORE.value >=0 && SCORE.value <=100) 
    {
        if(USER_NAME.value && SCORE.value) 
        {
            if(SCORE.value >= 90) {
                text = "AA"
            }
            else if(SCORE.value >= 80) {
                text = "BA"
            }
            else if(SCORE.value >= 75) {
                text = "BB"
            }
            else if(SCORE.value >= 70) {
                text = "CB"
            }
            else if(SCORE.value >= 60) {
                text = "CC"
            }
            else if(SCORE.value >= 55) {
                text = "DC"
            }
            else if(SCORE.value >= 50) {
                text = "DD"
            }
            else if(SCORE.value >= 45) {
                text = "FD"
            }
            else if(SCORE.value < 45) {
                text = "FF"
            }
            addItem(USER_NAME.value, text)
            USER_NAME.value = ""
            SCORE.value = ""
        } 
        else
        {
            alertDOM.innerHTML = alertFunction(
                "Error!",
                "Missing İnformation",
                "danger"
            )
        }
    } 
    else {
            alertDOM.innerHTML = alertFunction(
                "Error!", 
                "İncorret İnformation",
                "danger"
            )
        }
}

let userListDOM = document.querySelector('#userList')

const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = 
        `${userName}
        <span class="badge bg-primary rounded-pill">${score}</span>`
    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'
    )
    userListDOM.append(liDOM)
}