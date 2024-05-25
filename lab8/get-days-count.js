function showDaysCount(){
    let today=new Date();
    let inputDate=document.querySelector('input[type=date]');
    let birthday=new Date(inputDate.value);
    let daysCount=(today-birthday)/1000/60/60/24;
    daysCount=Math.floor(daysCount);
    let days=document.getElementById('date');
    days.innerHTML='Количество дней с даты рождения: '+ daysCount;
}
function Delete(){
    let dateInput=document.querySelector('input[type=date]');
    let daysElement=document.getElementById('date');
    dateInput.value="";
    daysElement.innerHTML="";
}