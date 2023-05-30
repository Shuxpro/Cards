# Cards
get cards, filter cards


Техническое задание

Представим, что у нас есть api, которое лежит по адресу https://example.ru/api и
имеет один метод getCards, который просто возвращает следующие данные:
{
success: true,
result: [
{
 card_id: 123,
 reviewer_id: 2,
 name: ‘Помыть посуду’,
 reward: 1000,
 photo_required: true,
 video_required: false,
 schedule: [true, false, true, true, false, false, false],
 period_start: ‘2023-04-17 10:00:00’,
 period_stop: null,
type: ‘ALL’
},
…
],
}

В result бекенд, также, не вернул нам следующие поля:

description (строка)

every_month (массив чисел)

Некоторые поля могут принимать null (description, schedule, every_month, 
period_start, period_stop)

Поле type может принимать следующие значения: «ALL», «TASKS», «CORSES»

Используемый стек:

Fetch/Axios
TypeScript
Functional Components
React-Navigation


Задание:

Сделайте type/interface для данных с бека.

Создайте переменную filteredTasks, которая будет фильтровать, пришедшие
данные с бека, по следующему условию: у каждого item поле type должно быть
«TASKS».

Напишите простой экран, только при открытии которого, мы будет делать
каждые 10 секунд запрос на бек, получать данные и хранить их где-то в стейте. 
Для рендеринга списка карточек, используйте данные с переменной
filteredTasks. При рендере item, используйте условный компонент карточки
товара (дочерний компонент, например, будет Card, его писать не нужно, его
props соответствуют полям из result).

Кол-во товаров, пришедших с бека ~ 40 шт.

Компонент Card будет иметь проп-функцию onCardPress -> void. Нужно, чтобы
при нажатии на конкретный товар, мы выводили его name и description 
(например, в Алерт) и передавали item данного товара в другую функцию
(условно, addCard).

Логику функции addCard писать не нужно.

Функция addCard принимает те же данные, что приходят нам в result, но без
некоторых полей: card_id, photo_required, schedule.

Функцию addCard вынесите в отдельный файл.В файле основного компонента при импорте addCard, можете написать любой
путь до файла addCard
