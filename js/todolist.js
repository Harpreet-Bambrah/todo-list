  
        let localdata = localStorage.getItem('inputstoreval')
        let localdata1 = JSON.parse(localdata)
        
 let inputval1 = [];
       for(let a=0;a<localdata1.length;a++){
           inputval1.push(localdata1[a])

       }
        let htmlcode = "";
        
       for(let a=0;a<inputval1.length;a++){
         
                           
               htmlcode+=`<br><input type='checkbox' ${localdata1[a].checkval ? "checked" : ""} onclick='readout(${a})'><span ${localdata1[a].checkval ? "style='text-decoration: line-through;'" : ""}>${localdata1[a].name}</span><button onclick='removeval(${localdata1[a].id})'>x</button><hr>`;
         
         document.getElementById('task-container').innerHTML=htmlcode;
      
       }
       
       // if(localdata1[a].checkval){
       //     "checked"
       // }else{
       //     ""
       // }
    
      
       // let inputlen = document.getElementsByTagName('input').length-1;
       // for(let b=0; b<inputlen;b++){
       //     if(localdata1[b].checkval==true){
       //     document.getElementsByTagName('input')[b+1].checked=true
       //     document.getElementsByTagName('span')[b].style.opacity=".5";
       // }else{
       //     document.getElementsByTagName('input')[b+1].checked=false
       //     document.getElementsByTagName('span')[b].style.opacity="1";
       // }
       // }





       function taskrec(){
           
           let inputval = document.getElementsByTagName('input')[0].value;

           let newenter = {
               id:Date.now(),
               name:inputval,
               checkval:false
           }

       inputval1.push(newenter);
       let inputvaluesnew = JSON.stringify(inputval1)
            
        localStorage.setItem('inputstoreval',inputvaluesnew)
        let localdata = localStorage.getItem('inputstoreval')
        let localdata1 = JSON.parse(localdata)
        let htmlcode = "";
       for(let a=0;a<inputval1.length;a++){

               

           htmlcode+=`<br><input type='checkbox' ${localdata1[a].checkval ? "checked" : ""} onclick='readout(${a})'><span ${localdata1[a].checkval ? "style='text-decoration: line-through;'" : ""}>${localdata1[a].name}</span><button onclick='removeval(${localdata1[a].id})'>x</button><hr>`;
         document.getElementById('task-container').innerHTML=htmlcode;
     
   }

   
       // let inputlen1 = document.getElementsByTagName('input').length-1
       // for(let b=0; b<inputlen1;b++){
       //     if(localdata1[b].checkval==true){
       //     document.getElementsByTagName('input')[b+1].checked=true
       //     document.getElementsByTagName('span')[b].style.opacity=".5";
       // }else{
       //     document.getElementsByTagName('input')[b+1].checked=false
       //     document.getElementsByTagName('span')[b].style.opacity="1";
       // }
       // }
      
}





       function readout(a){
                   
           let localdata1 = JSON.parse( localStorage.getItem('inputstoreval'))
           
           if(localdata1[a].checkval==false){
           
               localdata1[a].checkval=true 
               inputval1[a].checkval=true 

               localStorage.setItem('inputstoreval',JSON.stringify(localdata1))
               // document.getElementsByTagName('input')[a+1].checked=true
               document.getElementsByTagName('span')[a].style.opacity=".5";
               document.getElementsByTagName('span')[a].style.textDecoration="line-through";
               document.getElementsByTagName('span')[a].innerHTML = inputval1[a].name;
           

           }else{
               localdata1[a].checkval=false
               inputval1[a].checkval=false

               localStorage.setItem('inputstoreval',JSON.stringify(localdata1))
               // document.getElementsByTagName('input')[a+1].checked=false
               document.getElementsByTagName('span')[a].style.opacity="1";
               document.getElementsByTagName('span')[a].style.textDecoration="none";
               document.getElementsByTagName('span')[a].innerHTML = inputval1[a].name;
           }
       }




       function removeval(c){
               
           // let localdata1 = JSON.parse( localStorage.getItem('inputstoreval'))
           
           // if(localdata1[a].checkval==true){
               inputval1 =inputval1.filter((b)=>{
                   return b.id!=c
               })
       
                        localStorage.setItem('inputstoreval',JSON.stringify(inputval1))
           

           let localdata = localStorage.getItem('inputstoreval')
                   let localdata1 = JSON.parse(localdata)
                   let htmlcode = "";
                   for(let a=0;a<localdata1.length;a++){
                           
                       htmlcode+=`<br><input type='checkbox' ${localdata1[a].checkval ? "checked" : ""} onclick='readout(${a})'><span>
                           ${localdata1[a].checkval ? "<del>" : ""}
                           ${localdata1[a].name}
                           ${localdata1[a].checkval ? "</del>" : ""}
                           </span><button onclick='removeval(${localdata1[a].id})'>x</button><hr>`;
                       // htmlcode+=`<br><input type='checkbox' ${localdata1[a].checkval ? "checked" : ""} onclick='readout(${a})'><span ${localdata1[a].checkval ? "style='text-decoration: line-through;'" : ""}>${localdata1[a].name}</span><button onclick='removeval(${localdata1[a].id})'>x</button><hr>`;
         document.getElementById('task-container').innerHTML=htmlcode

                   }
                       

                   document.getElementById('task-container').innerHTML=htmlcode; 
                   // if(localdata1.length==0){

                   // }else{

                   // let inputlen2 = document.getElementsByTagName('input').length-1
                   // for(let b=0; b<inputlen2;b++){
                   //     if(localdata1[b].checkval==true){
                   //     document.getElementsByTagName('input')[b+1].checked=true
                   //     document.getElementsByTagName('span')[b].style.opacity=".5";
                   // }else{
                   //     document.getElementsByTagName('input')[b+1].checked=false
                   //     document.getElementsByTagName('span')[b].style.opacity="1";
                   // }
                   // }
               // }
                
                     
                  
           }

       // }