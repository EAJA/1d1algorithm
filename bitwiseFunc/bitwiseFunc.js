function bitwiseAND(n1, n2) {
	let stringN1 = String(n1.toString(2));
	let stringN2 = String(n2.toString(2));
  let smallN = Math.abs(stringN1.length-stringN2.length)
  let resultBitwiseAND = '';
	if(stringN1.length<stringN2.length){
    for(let zeroLoop = 0 ; zeroLoop < smallN ; zeroLoop++){
      stringN1 = '0' + stringN1;
    }
  }
  else if(stringN1.length>stringN2.length){
    for(let zeroLoop = 0 ; zeroLoop < smallN ; zeroLoop++){
      stringN2 = '0' + stringN2;
    }
  }
  else {};

  for(let i = 0 ; i < stringN1.length ; i++){
    if(stringN1[i]==='1' && stringN2[i]==='1'){
      resultBitwiseAND = resultBitwiseAND + '1';
    } else {
      resultBitwiseAND = resultBitwiseAND + '0';
    }
  }
  return parseInt(resultBitwiseAND,2);
}

function bitwiseOR(n1, n2) {
	let stringN1 = String(n1.toString(2));
	let stringN2 = String(n2.toString(2));
  let smallN = Math.abs(stringN1.length-stringN2.length)
  let resultBitwiseOR = '';
	if(stringN1.length<stringN2.length){
    for(let zeroLoop = 0 ; zeroLoop < smallN ; zeroLoop++){
      stringN1 = '0' + stringN1;
    }
  }
  else if(stringN1.length>stringN2.length){
    for(let zeroLoop = 0 ; zeroLoop < smallN ; zeroLoop++){
      stringN2 = '0' + stringN2;
    }
  }
  else {};
  for(let i = 0 ; i < stringN1.length ; i++){
    if(stringN1[i]==='1' || stringN2[i]==='1'){
      resultBitwiseOR = resultBitwiseOR + '1';
    } else{
      resultBitwiseOR = resultBitwiseOR + '0';
    }
  }
  return parseInt(resultBitwiseOR,2);
}

function bitwiseXOR(n1, n2) {
	let stringN1 = String(n1.toString(2));
	let stringN2 = String(n2.toString(2));
  let smallN = Math.abs(stringN1.length-stringN2.length)
  let resultBitwiseXOR = '';
	if(stringN1.length<stringN2.length){
    for(let zeroLoop = 0 ; zeroLoop < smallN ; zeroLoop++){
      stringN1 = '0' + stringN1;
    }
  }
  else if(stringN1.length>stringN2.length){
    for(let zeroLoop = 0 ; zeroLoop < smallN ; zeroLoop++){
      stringN2 = '0' + stringN2;
    }
  }
  else {};
  for(let i = 0 ; i < stringN1.length ; i++){
    if(stringN1[i]!==stringN2[i]){
      resultBitwiseXOR = resultBitwiseXOR + '1';
    } else {
      resultBitwiseXOR = resultBitwiseXOR + '0';
    }
  }

  return parseInt(resultBitwiseXOR,2);
}
// & | ^ 차이 확인