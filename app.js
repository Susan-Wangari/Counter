//set inital count
let count = 0;
//selecting elements
//value
const value = document.getElementById('value');
//buttons
const buttons  = document.querySelectorAll('.btn');
//iterating through the buttons
buttons.forEach(function(item) {
  item.addEventListener('click',function(e) {
      const styles = e.currentTarget.classList;
      if(styles.contains('decrease')) {
          count --;
      } else if(styles.contains('increase')) {
        count++
      } else {
        count = 0;
      }
      if(count > 0) {
          value.style.color="purple"
      }
      if(count < 0) {
          value.style.color ="red";
      }
      if(count === 0) {
          value.style.color ="black";
      }
      value.textContent = count;
  });
}); 
// console.log(buttons);
