
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('senang bisa mengenalmu dinda!').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 75); // 250ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 250);
};
