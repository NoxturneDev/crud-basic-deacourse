const btnAdd = document.getElementById('btnAdd')
const addForm = document.getElementById('addForm')
const alertDialog = document.querySelector(".alertDialog")
const confirmBtn = document.getElementById('btnConfirm')
const cancelBtn = document.getElementById('btnCancel')


function submitForm(){
    addForm.submit()
}

function confirm(){
    // alertDialog.classList.add('hidden')

    // send data
    addForm.submit()
}

function cancel(){
    alertDialog.classList.add('hidden')
    console.log("CANCEL")
}

btnAdd.addEventListener('click', e => {
    e.preventDefault()
    alertDialog.classList.toggle('hidden')
    alertDialog.classList.toggle('flex')

    // setTimeout(() => {
    //     addForm.submit()
    // }, 2000)
})

confirmBtn.addEventListener('click', confirm)
cancelBtn.addEventListener('click', cancel)

