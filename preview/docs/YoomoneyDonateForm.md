
## 📖 Detailed overview

Форма поможет собрать деньги на кошелек Yoomoney. 

## 🎬 Live Demo

[Live demo link]()

## ⚙️ Usage

Добавьте компонент на страницу и посмотрите как он работает в режиме превью.

### Как начать
Чтобы начать, нужно ввести новер кошелька Yoomoney в свойство `«account»`.

### Текст на кнопке
В стандартной форме Yoomoney достпуно только 4 варианта текста на кнопке: "Перевести", "Отправить", "Подарить", "Пожертвовать". Выбрать их можно с помощью свойства `«buttonText»`, используя их ID.
- 11 - "Перевести"
- 12 - "Отправить"
- 13 - "Подарить"
- 14 - "Пожертвовать"
<!-- Здесь можно будет сослаться на кастомную форму  -->

### Сбор информации во время перевода
Во время перевода можно попросить у отправителя (ФИО, эл.почта, мобильный телефон, адрес). 
Чтобы запросить всё это, нужно включить соответстующие свойства из категории `«INFO»` (`«fio»`, `«email»`, `«address»`, `«comment»`).


## 🧩 Components and Props

### YoomoneyDonateForm

| Props name    | Type      | Description                               | Default        | Example          |
| ------------- | --------- | ----------------------------------------- | -------------- | ---------------- |
| account       | `string`  | Идентификатор кошелька Yoomoney (обязательное поле)                       | undefined      | 412345678998765 |
| targets       | `string`  | Назначение перевода                       | Помочь проекту | На хостинг сайта  |
| buttonText    | `enum`    | Текст кнопки { 11: Перевести, 12: Отправить, 13: Подарить, 14: Пожертвовать }                      | 11             | 14 |
| fixedTarget   | `boolean` | Фиксированная цель перевода                      | true           | true             |
| sum           | `string`  | Cумма перевода                           | 0              | 250 |
| fio           | `boolean` | Запрашивать имя в момент перевода | false          | true             |
| email         | `boolean` | Запрашивать email в момент перевода     | false          | true             |
| phone         | `boolean` | Запрашивать телефон в момент перевода     | false          | true             |
| address       | `boolean` | Запрашивать адрес в момент перевода   | false          | true             |
| comment       | `boolean` | Запрашивать комментарий в момент перевода   | false          | true             |
| hint          | `string`  | Подсказка для комментария   |                | Ваши пожелания и предложения |
| successURL    | `string`  | Ссылка для редиректа                  |                | https://google.com |
| payment       | `boolean` | Возможность перевода через баноквскую карту                       | false          | true             |
| mobilePayment | `boolean` | Возможность перевода чере cчет телефона Билайн, МТС, Tele2                    | false          | true             |

## 🗓 Changelog

- 12/04/2021 (v1.0)
  - Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you can’t stand missing. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://feedback.quarkly.io/communities/1-quarkly-forum/categories/7-components/topics)
[We're on Discord](https://discord.gg/f9KhSMGX)
[Our Twitter](https://twitter.com/quarklyapp)
[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](./LICENSE).

