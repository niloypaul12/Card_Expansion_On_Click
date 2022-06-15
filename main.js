const boxes = document.querySelectorAll('.box')//get all the element with box class

//loop through the box class items 
boxes.forEach((box) => {
    box.addEventListener('click', () => {

        removePreviousClicked()//whenever click on one active status from others removed first

        box.classList.add('active')//add active class to the clicked box
    })
} )
// function to remove active from the previously selected class

function removePreviousClicked(){
    boxes.forEach((box) => {
        box.classList.remove('active')
    })
}