let arr = ['Джабраил', 'Дени', 'Имран', 'Исраил', 'Асхьаб', 'Халид', 'Тамерлан', 'Мохьмад', 'Амирхан', 'Висхан',]
let accumulator = '';
for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] === 'А' ) {
    accumulator.push(arr[i])
}
}console.log(accumulator);