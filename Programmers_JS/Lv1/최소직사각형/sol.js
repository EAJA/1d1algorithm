function solution(sizes) {
  let [w,h] = [0,0];

  sizes.forEach(e => {
    if(e[0] > e[1]) {
      w = Math.max(e[0],w);
      h = Math.max(e[1],h);
    } else {
      w = Math.max(e[1],w);
      h = Math.max(e[0],h);
    }
  });

  return w * h;
}