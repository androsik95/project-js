let data = [];

const Lists=document.querySelectorAll ('.List')
const button=document.querySelector('.button')
const btn=document.querySelector('.add__btn')
    const addbtn=document.querySelector('.add__item-btn')
    const cancelbtn=document.querySelector('.cancel__item-btn')
    const textarea=document.querySelector('.textarea')
    const form=document.querySelector('.form')
    const titles= document.querySelectorAll('.title')
    let value
    let draggedItem=null
    

    btn.addEventListener('click',()=> { 
        form.style.display='block'
        btn.style.display='none'
        addbtn.style.display='none'

        textarea.addEventListener('input', e=> {
            value=e.target.value
            if (value)
            addbtn.style.display='block'
            else{addbtn.style.display='none'}
        })

    })

    cancelbtn.addEventListener('click',()=> { 
        textarea.value=''
        value=''
        form.style.display='none'
        btn.style.display='flex'
        
    }) 

    addbtn.addEventListener('click',()=> { 
        const newItem= document.createElement('div')
        newItem.classList.add('List__item')
        newItem.draggable=true
        newItem.textContent=value
     Lists[0].append(newItem)

        textarea.value=''
        value=''
        form.style.display='none'
        btn.style.display='flex'
        dargNdrop() 

    }) 



const addBoard = function () {
const boards= document.querySelector('.boards')
const board= document.createElement('div')
board.classList.add ('boards__item')
board.innerHTML=`
<span contenteditable="true" class="title"> Введите название </span>
<div class="List"></div>`
boards.append(board)
changeTitle ()
dargNdrop() 
 
};
button.addEventListener( 'click', addBoard)

const changeTitle = function () {
       titles.forEach (title => { 
        title.addEventListener('click',e=>e.target.textContent='')
       })
       }
       changeTitle ()
       
     



       const dargNdrop = function () {
        const ListItems=document.querySelectorAll ('.List__item')
           const Lists=document.querySelectorAll ('.List')
       
           for ( let i=0; i < ListItems.length; i++ ) {
               const item=ListItems[i]
               
               item.addEventListener( 'dragstart', () => { 
                   draggedItem=item
                  setTimeout ( ()=> {
                   item.style.display='none'
                  },0)
               })
               item.addEventListener( 'dragend', () => { 
                   setTimeout ( ()=> {
                       item.style.display='block'
                       draggedItem=null
                      },0)
                   
               })
               item.addEventListener( 'dblclick', () => { 
                 item.remove()
               })
               for ( let j=0; j < Lists.length; j++) {
                   const List=Lists[j]
                   List.addEventListener( 'dragover', e =>e.preventDefault())
       
                   List.addEventListener ( 'dragenter', function (e) {
                       e.preventDefault()
                       this.style.backgroundColor ='rgba (0,0,0,.3)'
                   })
                   List.addEventListener ( 'dragleave', function (e) {
                       this.style.backgroundColor ='rgba (0,0,0, 0)'
                   })
                   List.addEventListener ( 'drop', function (e) {
                       this.style.backgroundColor ='rgba (0,0,0, 0)'
                       this.append(draggedItem)
                   })
               }
           }
       
       
           }