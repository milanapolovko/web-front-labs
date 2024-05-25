function showDate(){
    let outRU=document.getElementById('current-dateRU');
    let outSP=document.getElementById('current-dateSP');
    let outZH=document.getElementById('current-dateZH');
    let outEN=document.getElementById('current-dateEN');
    let outFR=document.getElementById('current-dateFR');
    let outAR=document.getElementById('current-dateAR');
    

    let year=document.getElementById('current-year');
    let month=document.getElementById('current-month');
    let date=document.getElementById('current-date');
    let weekDay=document.getElementById('current-weekDay');

    let today=new Date();

    const weekDays=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
    let dayNumber=today.getDay();
    
    outRU.innerHTML='Дата и время для русской локали: '+today.toLocaleString('ru-RU');
    outSP.innerHTML='Дата и время для сербской локали: '+today.toLocaleString('sr-SP');
    outZH.innerHTML='Дата и время для китайской локали: '+today.toLocaleString('zh-CN');
    outEN.innerHTML='Дата и время для австралийской локали: '+today.toLocaleString('en-AU');
    outFR.innerHTML='Дата и время для бельгийской локали: '+today.toLocaleString('fr-BE');
    outAR.innerHTML='Дата и время для локали Бахрейн: '+today.toLocaleString('ar-BH');
    
    year.innerHTML='Текущий год: '+today.getFullYear();
    month.innerHTML='Текущий месяц: '+today.getMonth();
    date.innerHTML='Текущая дата: '+today.getDate();
    weekDay.innerHTML='День недели: '+ weekDays[dayNumber];
}
function showDayofWeek(){
    let inputYear=document.getElementById('year');
    let inputMonth=document.getElementById('month');
    let inputDate=document.getElementById('date');

    let a=parseInt(inputYear.value);
    let b=parseInt(inputMonth.value);
    let c=parseInt(inputDate.value);
    let out=new Date(a,b,c);
    const weekDays=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
    let Day=out.getDay();
    let inputDay=document.getElementById('day');
    if(a!="" &&  a>0 && b!="" && b>0  && c!="" && c>0){
        inputDay.innerHTML=weekDays[Day];}
}
