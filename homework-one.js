var userInfo={}, retiree, ageAfterFiveYears;
const DAYS_IN_YEAR = 365;
userInfo.lastName = prompt('Введите фамилию:','Иванов');
userInfo.firstName = prompt('Введите имя:','Иван');
userInfo.patronymicName = prompt('Введите отчество:','Иванович');
userInfo.age = parseInt(prompt('Введите возраст:','18'));

// проверка, является ли введённый возраст числом, если нет - берём значение по умолчанию
if(isNaN(userInfo.age)) {
    userInfo.age = 18;
}

// определяем пол
userInfo.gender = confirm('Ваш пол - мужской?');
userInfo.sex = (userInfo.gender !== false) ? 'мужской' : 'женский';

// определяем, находится ли пользователь на пенсии
if (userInfo.age >= 63 || userInfo.age >= 58 && userInfo.sex === 'женский') {
    retiree = 'да';
} else {
    retiree = 'нет';
}

// считаем количество лет через 5 лет
ageAfterFiveYears = userInfo.age + 5;

// выводим полученную информацию
alert('ваше ФИО: ' + checktype(userInfo.lastName) + ' ' + checktype(userInfo.firstName) + ' ' + checktype(userInfo.patronymicName) + '\n' +
    'ваш возраст в годах: ' + userInfo.age + '\n' +
    'ваш возраст в днях: ' + (DAYS_IN_YEAR * userInfo.age) + '\n' +
    'через 5 лет вам будет: ' + (userInfo.age + 5) + '\n' +
    'ваш пол: ' + userInfo.sex + '\n' +
    'вы на пенсии: ' + retiree);

// проверка ввода ФИО пользователя
function checktype(a) {
    if (!!a == false) {
        return a = ('Нет данных!');
    } else {
        return a;
    }
}