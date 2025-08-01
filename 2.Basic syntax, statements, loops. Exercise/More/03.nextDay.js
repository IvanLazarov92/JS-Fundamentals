function solve(year, month, day) {
  // Създаваме обект Date с подадените стойности (месеците са от 0 до 11)
  let date = new Date(year, month - 1, day);

  // Увеличаваме датата с 1 ден
  date.setDate(date.getDate() + 1);

  // Вземаме новите стойности
  let nextYear = date.getFullYear();
  let nextMonth = date.getMonth() + 1; // Добавяме 1, защото getMonth() връща от 0 до 11
  let nextDay = date.getDate();

  // Печатаме резултата във формат YYYY-M-D
  console.log(`${nextYear}-${nextMonth}-${nextDay}`);
}

// Пример:
solve(2016, 9, 30); // Извежда: 2016-10-1
