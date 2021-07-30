유니코드를  
secret 만큼 증가이동시키기  
소문자만 가능  
  
```js
function charcode_moving(str, secret) {
    
    let arr = str.split('').map(a => a.charCodeAt());

    arr = arr.map(a => {
        if(a === 32){
            return String.fromCharCode(a);
        }else if(a - secret < 97){
            return String.fromCharCode(a - secret + 26);
        }else return String.fromCharCode(a - secret);
    })

    return arr.join('');
}
```