//todo можно заменить на двумерный массив, искать в каждом "ключи", и после отдавать рандомный(не считая "ключа") из массива.
const twinsCharacters = {
    'а': '\u0061', //ру-англ
    'А': '\u0041',
    'В':'\u0042',
    'г': '\u1d26',
    'Г': '\u0393',
    'е': 'e', //ру-англ
    '\u043a': "\u03ba",
    'м': '\u1D0D',// ru-latin
    'М': 'M', //ру-анго
    'н': '\u029C',
    'о': '\u006f', //ру-англ
    'р': 'p',//ру-англ
    'с': 'c',//ру-англ
    'х': 'x', //ру-англ
}

export const confuseSymbol = (ch) =>{
    return  twinsCharacters[ch] ? twinsCharacters[ch] : ch
}

export const confuse = (str) => {
    let res = []
   for(let i = 0; i < str.length; i++){
       res[i] = confuseSymbol(str[i])
   }

   return res.join('').toString()
}

