// Unlike throttling, debouncing is a technique of keeping the trigger rate at
// exactly 0 until a period of calm, and then triggering the listener exactly once.

// Debouncing is used when you don’t need to track every move user makes as long as
// you can make a timely response. A common example is a widget that reacts to user typing.
// We normally assume that users will not care about what goes on the screen while
// they are typing, but want to see the result as soon as they are done. This assumption is
// (ab)used to, for example, reduce the number of AJAX requests we make to obtain autocompletion
// candidates and thus conserve server resources.

const debounce = (delay, callback) => {
  let timerId;
  return (...args) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      callback(...args);
      timerId = null;
    }, delay);
  };
};

window.addEventListener('balh', debounce(delay, callback))
