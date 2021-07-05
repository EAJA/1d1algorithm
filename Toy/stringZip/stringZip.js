function compressString(str) {
    let zipStr = new Array();
    let i = 0;
    while(str.length > 0){
        if(str[i] !== str[i+1]){

            if(str.slice(0,i+1).length >= 3){
                zipStr.push(str.slice(0,i+1).length + str[0])
            }else zipStr.push(str.slice(0,i+1));

            str = str.slice(i+1);
            i = 0;
            continue;
        }
        i++;
    }
    return zipStr.join('');
}