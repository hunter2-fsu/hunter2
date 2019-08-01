function encode(inOne, inTwo, inThree, allowedSpecials = '@#*()-_+={};,./?~') {
  if (inOne === "" && inTwo === "" && inThree === "") {
    console.error('You need at least one term input');
    return;
  }

  //concatenate inputs INPUTS GO HERE
  var PWlength = 13
  const tempSalt = 3706501850
  let concat = `${inOne}:${inTwo}:${inThree}:${tempSalt}`;

  //console.log(concat);
  //create master lists
  masterUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  masterLower = 'abcdefghijklmnopqrstuvwxyz';
  masterNumber = '0123456789';
  masterList = `${masterUpper}${masterLower}${masterNumber}${allowedSpecials}`;

  var hash = sha256(concat)

  //change from hex to binary
  let hashBin = '', hashBinTotal = '';
  for (let i = 0; i < hash.length; i++) {
    hashBin = parseInt(hash[i], 16).toString(2)
    hashBinTotal += '0000'.substr(hashBin.length) + hashBin
  }

  //split into 13 pieces of 7 bits

  var binChar = new Array(PWlength)
  var place = 0
  var termin = place + 7
  for(var i=0; i < PWlength; i++){
    binChar[i] = hashBinTotal.slice(place, termin)
    place += 7
    termin += 7
  }

  //assign characters to binary array spots
  var tenBase = new Array(PWlength)
  finalPass = new Array(PWlength)
  for(var i = 0; i < PWlength; i++){
    tenBase[i] = parseInt(binChar[i], 2)
    tenBase[i] = tenBase[i].toString(10)
  }

  for(var i=0; i<PWlength; i++){
    if(tenBase[i]<masterList.length){
    finalPass[i]=masterList[tenBase[i]]
  }
  
  if(tenBase[i]>=masterList.length){
    picker = tenBase[i] % 7
    switch(picker){
      case 0:
        pass = (tempSalt + tenBase[i-1]) % masterUpper.length
        finalPass[i] = masterUpper[pass]
        break;
      case 1:
        pass = (tempSalt + tenBase[i-1]) % masterLower.length
        finalPass[i] = masterLower[pass]
        break;
      case 2:
      case 4:
      case 6:
        pass = (tempSalt + tenBase[i-1]) % masterNumber.length
        finalPass[i]= masterNumber[pass]
        break;
      case 3:
      case 5:
      case 7:
        pass = (tempSalt + tenBase[i-1]) % allowedSpecials.length
        finalPass[i] = allowedSpecials[pass]
        break;
    }
}
}
finalPass = finalPass.join("")

console.log(`Generated Password: ${finalPass}`)
}
