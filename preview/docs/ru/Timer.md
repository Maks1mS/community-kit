## 📖 Detailed overview

Счетчик обратного отсчета проинформирует посетителя об оставшемся времени до начала или окончания события.
В настройках вы можете задать дату, время и текст по завершении отсчёта.

## 🎬 Live Demo

[Live demo link](https://quarkly-catalog.netlify.app/timer/)

## ⚙️ Usage

Добавьте компонент на страницу и посмотрите как он работает в режиме превью.

### Дата окончания

В свойстве `Дата окончания` можно указывать дату в следующих форматах:

-   05.06.2021
-   05/06/2021
-   05-06-2021

### Сообщение по завершении отсчёта

Параметр `Когда показывать сообщение` позволяет выбрать, когда необходимо показыать сообщение об окончании таймера.
Допустимы следующие варианты:

-   `always` - Сообщение отображается всегда
-   `complete` - Сообщение отобразится, когда время таймера закончится
-   `never` - Сообщение не отображается никогда

## 🧩 Components and Props

| Названия свойств           |   Type    |     Default     | Description                                   |
| :------------------------- | :-------: | :-------------: | :-------------------------------------------- |
| Дата окончания             | `string`  |       `-`       | Дата окончания таймера (в формате дд.мм.гггг) |
| Время окончания            | `string`  |       `-`       | Время окончания таймера (в формате чч:мм)     |
| Показать 'Дни'             | `boolean` |     `true`      |                                               |
| Показать 'Часы'            | `boolean` |     `true`      |                                               |
| Показать 'Минуты'          | `boolean` |     `true`      |                                               |
| Показать 'Секунды'         | `boolean` |     `true`      |                                               |
| Когда показывать сообщение |  `enum`   | `По завершении` |                                               |

## 🗓 Changelog

-   21/04/2021 (v1.0)
-   Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
