
         var interval,count=0;
         var clock=0;

         //handle start/stop event
        function start()
        {
          count++;
          if(count<=1)
          {
              interval=setInterval(function(){
                clock=clock+.01;
                document.getElementById('resp').innerHTML=clock.toFixed(2); 
              },100);
          }
          else{
              clearInterval(interval);
              count=0;
          }
         }

         //reset functionbality
         function reset()
         {
            clearInterval(interval);
            clock=0;
            count=0;
            document.getElementById('resp').innerHTML=0;
            document.getElementById('pasttime').innerHTML="";
         }
         function record()
         {
             var lis=document.createElement("li");
             var mylist=document.getElementById("pasttime");
             lis.innerHTML=clock.toFixed(2);
             mylist.appendChild(lis);
         }
          //record functibnality iusing keypress or record
         document.onkeypress =handlekeypress;
          
         function handlekeypress(event)
         {
             var mykey=event.key
             if(mykey==='s')
             start();
             else if(mykey==='t')
             record()
             else if(mykey==='r')
             reset();
        }
         setTimeout(function(){
            alert("whoo!! you can use keyboard keys s,r,t to start/stop ,reset or record time  ");
        },2000);