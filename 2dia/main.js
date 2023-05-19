let click = true;
const lines = ["one", "two", "three"];
const contentHamburguer = document.querySelector('.content-Hamburguer')

contentHamburguer.addEventListener('click', () => {
   if (click) {

      for (const number of lines) {
         document
            .getElementById(`line-${number}`)
            .classList.add(`line-${number}`);
         document
            .getElementById(`line-${number}`)
            .classList.remove(`line-reverse-${number}`);
      }
   } else {
      for (const number of lines) {
         document
        .getElementById(`line-${number}`)
        .classList.add(`line-reverse-${number}`);
      document
        .getElementById(`line-${number}`)
        .classList.remove(`line-${number}`);
      }
   }
   click = !click;
})
