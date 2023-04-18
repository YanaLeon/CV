function consoleText(words) {
    let letterCount = 0;
    let target = document.getElementById('text')
    target.setAttribute('style', 'color:'+ '#89caaa')
    let timer = setInterval(compose, 120);
    function compose () {
          target.innerHTML = words[0].substring(0, letterCount);
          letterCount++;
      if (letterCount > words[0].length) {
          clearInterval(timer);
          console.log(1, timer)
      }
     }
}
window.addEventListener('load', () => {
    consoleText(['Hello there, I am frontend developer. Welcome to my portfolio'])});