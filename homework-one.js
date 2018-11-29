var firstName, lastName, patronymicName, age, gender, ageAfterFiveYears, retiree, sex;
const DAYS_IN_YEAR = 365;
lastName = prompt('Введите фамилию:','Иванов');
firstName = prompt('Введите имя:','Иван');
patronymicName = prompt('Введите отчество:','Иванович');
age = parseInt(prompt('Введите возраст:','18'));

// проверка, является ли введённый возраст числом, если нет - берём значение по умолчанию
if(isNaN(age)) {
    age = 18;
}

// определяем пол
gender = confirm('Ваш пол - мужской?');
sex = (gender !== false) ? 'мужской' : 'женский';


// определяем, находится ли пользователь на пенсии
if (age >= 63 || age >= 58 && sex === 'женский') {
    retiree = 'да';
} else {
    retiree = 'нет';
}

// проверка ввода ФИО пользователя
function checktype(a) {
    if (a === false) {
        return a = ('Нет данных!');
    } else {
        return a;
    }
}

// считаем количество лет через 5 лет
ageAfterFiveYears = age + 5;

alert('ваше ФИО: ' + checktype(lastName) + ' ' + checktype(firstName) + ' ' + checktype(patronymicName) + '\n' +
    'ваш возраст в годах: ' + age + '\n' +
    'ваш возраст в днях: ' + (DAYS_IN_YEAR * age) + '\n' +
    'через 5 лет вам будет: ' + (age + 5) + '\n' +
    'ваш пол: ' + sex + '\n' +
    'вы на пенсии: ' + retiree);
