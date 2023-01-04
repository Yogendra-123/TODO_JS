document.getElementById('pop-up').style.display = "none"
document.getElementById('pop-up-add-2').style.display = "none"

function popupopen() {
    document.getElementById('pop-up').style.display = "block"
    document.getElementById('main-container').style.filter = "blur(7px)"
}
function popupclose() {
    document.getElementById('pop-up').style.display = "none"
    document.getElementById('main-container').style.filter = "blur(0px)"
}


function addcard() {
    document.getElementById('pop-up').style.display = "none"
    document.getElementById('main-container').style.filter = "blur(0px)"
    document.getElementById('my-para').style.display = "none"
    maindisplay = document.getElementById('adding-list')

    inputvalue = document.getElementById('input-box').value
    var createitem = document.createElement('div')
    createitem.setAttribute('class', 'item-1')

    var createddiv = document.createElement('div')
    createddiv.setAttribute('id', 'para-list')

    createheading = document.createElement('h1')
    createheading.setAttribute('id', 'adding-item')

    createhr = document.createElement('hr')

    createicondiv = document.createElement('div')
    createicondiv.setAttribute('class', 'delete-add')


    createbuttondelete = document.createElement('i')
    createbuttondelete.setAttribute('id', 'delete-icon')
    createbuttondelete.setAttribute('class', 'fa-solid fa-trash-can')
    // createbuttondelete.setAttribute('onclick', 'deletebyicon()')


    var createbuttonplus = document.createElement('i')
    createbuttonplus.setAttribute('id', 'below-plus-icon')
    createbuttonplus.setAttribute('class', 'fa-solid fa-circle-plus')

    maindisplay.appendChild(createitem)

    createitem.appendChild(createddiv)
    createitem.appendChild(createicondiv)

    createddiv.appendChild(createheading)
    createddiv.appendChild(createhr)

    createicondiv.appendChild(createbuttondelete)
    createicondiv.appendChild(createbuttonplus)


    createheading.textContent = inputvalue

    createbuttondelete.addEventListener('click', function removeCardFunction() {
        console.log('hello');

        createitem.remove()

    })

    // <div class="para-list">
    //             <h1 id="adding-item">${inputvalue}</h1>
    //              <hr>


    //           </div>
    //           <div class="delete-add">
    //            <i id="delete-icon" class="fa-solid fa-trash-can"></i>
    //            <i id="below-plus-icon" class="fa-solid fa-circle-plus"></i>
    //           </div>

    createbuttonplus.addEventListener('click', function addparapopup() {

        document.getElementById('pop-up').style.display = "none"
        document.getElementById('pop-up-add-2').style.display = "block"
        document.getElementById('main-container').style.filter = "blur(7px)"
       


    })

    
}

document.getElementById('add-2').addEventListener('click', function addpara() {
    document.getElementById('pop-up-add-2').style.display = "none"
    document.getElementById('main-container').style.filter = "blur(0px)"
  

    inputbox2 = document.getElementById('input-box-2').value

    let createpara = document.createElement('p')
    document.getElementById('para-list').appendChild(createpara)
    
    createmarkdone = document.createElement('span')
    createmarkdone.setAttribute('id','mark-done')
    document.getElementById('para-list').appendChild(createmarkdone)
    
    
    
    createpara.textContent = inputbox2
    createmarkdone.textContent = "Mark Done"
    
    createmarkdone.addEventListener('click', function marked(){
        createpara.style.textDecoration = "line-through"
        createpara.style.color = "red"
        createmarkdone.style.visibility = "hidden"
        })
        
})