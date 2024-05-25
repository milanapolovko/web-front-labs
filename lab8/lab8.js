function showDate(){
    let outRU=document.getElementById('current-dateRU');
    let outSP=document.getElementById('current-dateSP');
    let outZH=document.getElementById('current-dateZH');
    let outEN=document.getElementById('current-dateEN');
    let outFR=document.getElementById('current-dateFR');
    let outAR=document.getElementById('current-dateAR');
    

    let year=document.getElementById('year');
    let month=document.getElementById('month');
    let date=document.getElementById('date');
    let weekDay=document.getElementById('weekDay');
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

