document.addEventListener("keydown", (e) => {
  if (
    // This regex should be good enough.
    !/\..+(\/*)?$/g.test(location.pathname) &&
    e.ctrlKey &&
    e.keyCode === 83
  ) {
    e.preventDefault();
    return false;
  }
});
