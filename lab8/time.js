function showTime(){
    let today=new Date();
    let currenTime=today.toLocaleTimeString('ru-Ru');
    document.getElementById('time').innerHTML=currenTime;

    let seconds=today.getSeconds();
    document.getElementById('time1').innerHTML=seconds;
    
}

setInterval(showTime,1000);
