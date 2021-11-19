function solution(relation) {
  const len = relation.length;
  const keys = new Array();

  let forComb = "";
  for (let i = 0; i < relation[0].length; i++) {
    forComb += i;
  }

  // Get all Comb
  const allComb = function (str) {
    let result = new Array();

    const arr = str.split('');

    const nCr = (now, arr) => {
      if (arr.length === 0) return;
      arr.forEach((el, idx, cArr) => {
        let cur = now + el;
        result.push(cur);
        if (idx + 1 <= cArr.length) {
          let newArr = cArr.slice(idx + 1);
          nCr(cur, newArr);
        }
      });
    }

    nCr('', arr);
    return result.sort((a, b) => a.length - b.length);
  };

  let comb = allComb(forComb);

  for (let i = 0; i < comb.length; i++) {
    const el = comb[i].split('');

    const cur = new Array();
    // input cur
    for (let j = 0; j < len; j++) {
      let curStr = "";
      for (let k = 0; k < el.length; k++) {
        curStr += relation[j][el[k]];
      }
      cur.push(curStr);
    }

    /*
    최소성(minimality) : 
    유일성을 가진 키를 구성하는 속성(Attribute) 중 하나라도
    제외하는 경우 유일성이 깨지는 것을 의미한다.
    즉, 릴레이션의 모든 튜플을 유일하게 식별하는 데 꼭 필요한 속성들로만 구성되어야 한다.
    */
    const vLen = new Set(cur);
    if (cur.length === vLen.size) {
      const curComb = allComb(comb[i]);
      let v = true;
      for (let a of keys) {
        if (curComb.includes(a)) {
          v = !v;
          break;
        }
      }
      if (v) {
        keys.push(comb[i]);
      }
    }
  }

  // 후보 키의 개수
  return keys.length;
}