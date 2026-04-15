
//変数の宣言
let num = 30

//もし変数numが3と5の倍数ならば “3と5の倍数です”と出力する
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
}

//もし変数numが3の倍数ならば “3の倍数です”と出力する
else if (num % 3 === 0) {
  console.log('3の倍数です');
}

//もし変数numが5の倍数ならば “5の倍数です”と出力する
else if (num % 5 === 0) {
  console.log('5の倍数です');
}

//それ以外の場合は “num”と出力する
else {
  console.log(num);
}
