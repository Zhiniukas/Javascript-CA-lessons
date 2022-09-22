/*JS lesson 9.1
   document.querySelector('h1').addEventListener('click', (eventdo) => {
       eventdo.target.style.textAlign = "center";
       eventdo.target.style.fontSize = "4rem";
       eventdo.target.style.color = "green";
   })
*/


/*JS lesson 9.1
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

// JS lesson 9.4
const button = document.querySelector('input');



// JS lesson 9.1
// JS lesson 9.1