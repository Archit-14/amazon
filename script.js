const images = document.querySelectorAll('.header_slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n=0;

function changeSlide(){
    for(let i=0; i < images.length; i++){
        images[i].style.display='none';
    }
    images[n].style.display='block';

}
changeSlide();

prev_btn.addEventListener('click' , (e)=>{
    if(n>0){
        n--;
    }else{
        n = images.length - 1;
    }
    changeSlide();
})



next_btn.onclick = (e)=>{
    if(n < images.length-1){
        n++;
    }
    else{
        n =0;
    }
    changeSlide();
}

const scrollcontainer = document.querySelectorAll('.products');
for (const item of scrollContainer) {
    Item.addEventListener('wheel', (evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}


 