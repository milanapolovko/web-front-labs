function showTime(){
    let today=new Date();
    let currenTime=today.toLocaleTimeString('ru-Ru');
    document.getElementById('time1').innerHTML=currenTime;

    let seconds=today.getSeconds();
    document.getElementById('time2').innerHTML=seconds;
    
}

function Clock(){
    document.getElementById('time').style.transform=`rotate(${new Date().getSeconds()*6-180}deg) translate(0,50px)`;
   
}
setInterval(showTime,1000);
setInterval(Clock,1000);


