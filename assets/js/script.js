const open = document.getElementById('open')
const close = document.getElementById('close')
open.addEventListener('click',function(){
    close.classList.toggle('hidden')
})
