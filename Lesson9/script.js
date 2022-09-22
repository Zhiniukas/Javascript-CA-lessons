/*JS lesson 9.1
   document.querySelector('h1').addEventListener('click', (eventdo) => {
       eventdo.target.style.textAlign = "center";
       eventdo.target.style.fontSize = "4rem";
       eventdo.target.style.color = "green";
   })
*/


/*JS lesson 9.2
   const button = document.querySelector('button');
   button.style.cssText = 'position:absolute; top:0; left:0;';

   let isInInitialPosition = true;
   function changePosition() {
       event.target.style.cssText = isInInitialPosition ? 'position:absolute; bottom:0; right:0;' : 'position:absolute; top:0; left:0;';
       isInInitialPosition = !isInInitialPosition;
   }

   button.addEventListener('click', changePosition);
*/


/* JS lesson 9.3
   const button = document.querySelector('button');
   button.style.cssText = 'position:absolute; top:0; left:0;';

   let setPosition = 0;
   function changePosition() {
       switch (setPosition) {
           case 0:
               event.target.style.cssText = 'position:absolute; top:0; right:0;';
               setPosition++;
               break;

           case 1:
               event.target.style.cssText = 'position:absolute; bottom:0; right:0;';
               setPosition++;
               break;

           case 2:
               event.target.style.cssText = 'position:absolute; bottom:0; left:0;';
               setPosition++;
               break;

           case 3:
               event.target.style.cssText = 'position:absolute; top:0; left:0;';
               setPosition = 0;
               break;

           default:
               setPosition = 0;
       }
   }

   button.addEventListener('click', changePosition);
*/

/* JS lesson 9.4
     document.getElementById('vardas').addEventListener('input', event => {
         const vardas = event.target.value;
         document.body.style.backgroundColor = vardas.length < 3 ? 'red' : 'green';
     });
*/


// JS lesson 9.5
const buttonColor = ["red", "green", "blue", "yellow"]
document.querySelector('button').addEventListener('click', event => {
    const randomIndex = Math.round(Math.random() * 4);
    event.target.style.backgroundColor = buttonColor[randomIndex];
});


// JS lesson 9.6