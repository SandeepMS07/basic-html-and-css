 let myImg = document.querySelector('img');
 myImg.onclick = function() {
     let mySrc = myImg.getAttribute('src');
     if(mySrc == 'to-do-list-apps-1400x1050.png') {
         myImg.setAttribute('src','google.png');
     }else {
         myImg.setAttribute('src','to-do-list-apps-1400x1050.png');
     }
 }