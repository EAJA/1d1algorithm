function decryptCaesarCipher(str, secret) {
    // TODO: 여기에 코드를 작성합니다.
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