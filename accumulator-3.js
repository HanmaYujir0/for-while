let arr = ['Джабраил', 'Дени', 'Имран', 'Исраил', 'Асхьаб', 'Халид', 'Тамерлан', 'Мохьмад', 'Амирхан', 'Висхан',];
let accumulator = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > 3 ) {
    accumulator.push(arr[i])
}
}
console.log(accumulator);