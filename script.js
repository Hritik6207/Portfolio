document.querySelector('.close').style.display='none';
document.querySelector('.hamberger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('remsidebar');
    if(document.querySelector('.sidebar').classList.contains('remsidebar')){
        document.querySelector('.close').style.display='none';
        document.querySelector('.ham').style.display='inline';

    }
    else{
        document.querySelector('.ham').style.display='none';
        setTimeout(()=>{
            document.querySelector('.close').style.display='inline'
        },300);
    }
})