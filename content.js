document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.keyCode === 83) {
    e.preventDefault();
    return false;
  }
});
