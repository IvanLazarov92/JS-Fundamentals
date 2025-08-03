// function solve(year, month, day) {
//   // Създаваме обект Date с подадените стойности (месеците са от 0 до 11)
//   let date = new Date(year, month - 1, day);

//   // Увеличаваме датата с 1 ден
//   date.setDate(date.getDate() + 1);

//   // Вземаме новите стойности
//   let nextYear = date.getFullYear();
//   let nextMonth = date.getMonth() + 1; // Добавяме 1, защото getMonth() връща от 0 до 11
//   let nextDay = date.getDate();

//   // Печатаме резултата във формат YYYY-M-D
//   console.log(`${nextYear}-${nextMonth}-${nextDay}`);
// }

// // Пример:
// solve(2016, 9, 30); // Извежда: 2016-10-1

function solve(year, month, day) {
  let daysInMonth;

  // Определяме колко дни има в текущия месец
  if (month === 2) {
    // Проверка за високосна година (само тук вътре)
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      daysInMonth = 29;
    } else {
      daysInMonth = 28;
    }
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    daysInMonth = 30;
  } else {
    daysInMonth = 31;
  }

  // Увеличаваме деня
  day++;

  // Проверка дали сме минали края на месеца
  if (day > daysInMonth) {
    day = 1;
    month++;

    // Ако месецът стане 13 → нова година
    if (month > 12) {
      month = 1;
      year++;
    }
  }

  // Извеждаме резултата
  console.log(`${year}-${month}-${day}`);
}
