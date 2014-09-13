var el = document.getElementsByTagName('img')

 diffWidth = el.width - window.innerWidth;

Velocity(el[0], {translateX: -diffWidth}, {duration: 20000});

Velocity(el[0], "reverse");
