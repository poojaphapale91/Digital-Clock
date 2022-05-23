let hour=document.getElementById("hour");
let minute=document.getElementById("minute");
let second=document.getElementById("second");


    function showTime(){
        let date_now = new Date();
        let hr= date_now.getHours();
        let mint=date_now.getMinutes();
        let sec = date_now.getSeconds();
        
        if(hr==0){
            hr=12;
        }
       
        
        console.log(hr);
        
        if(mint<10){
            mint="0" + mint;
        }

        if(sec<10){
            sec="0" + sec;
        }

        if(hr<10){
            hr ="0" + hr;
        }

        if(hr>12){
            hr=hr-12;
        }
        console.log(hr);

        
        let time= hr + ":" + mint + ":" + sec; 
        document.getElementById("clock").innerHTML=time;


    }

    setInterval(showTime,1000);
    

