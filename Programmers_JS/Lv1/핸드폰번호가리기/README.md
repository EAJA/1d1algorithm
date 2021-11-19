```js
const solution = (n) => n.split('').splice(0,n.length-4).map(a => '*').join('')+n.slice(-4);
```