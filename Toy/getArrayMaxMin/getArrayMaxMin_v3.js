Math.min.apply(null, arr); 
Math.max.apply(null, arr);

// ===

Math.min(...arr.filter(a => typeof a === 'number'))
Math.max(...arr.filter(a => typeof a === 'number'))