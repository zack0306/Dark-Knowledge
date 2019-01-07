// Throttling is a straightforward reduction of the trigger rate. It will cause the event listener
// to ignore some portion of the events while still firing the listeners at a constant (but reduced) rate.

// Throttling is used when you want to track the user’s activity, but you can’t keep up with a
// high trigger rate because you’re doing some heavy-lifting each time the event is triggered. One very
// common example is scrolling where you want your interface to react in response to the scroll
// position (e.g., real and fake parallax effects, sticky menus, etc).

const throttle = (delay, callback) => {
  let lastCall = 0;
  return (...args) => {
    const now = (new Date).getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return callback(...args);
  }
}

window.addEventListener('balh', throttle( delay, callback))
