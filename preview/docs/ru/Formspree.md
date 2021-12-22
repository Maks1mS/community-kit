## 📖 Подробный обзор

Компонент для встраивания виджета с формой сервиса Formspree.
    
## ⚙️ Использование

1. Зарегистрируйтесь на сайте [Formspree](https://formspree.io/)
2. Создайте новую форму и в разделе `Integration` вашей формы скопируйте `Endpoint`
3. Добавьте компонент на страницу
4. Вставьте скопированный `Endpoint` на панели Props
5. Посмотрите как компонент работает в режиме превью

**Внимание:**

-   Для работы этого компонента необходимо указать `Endpoint`

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств               |      По умолчанию      |                Пример                 |
| :----------------------------- | :--------------------: | :-----------------------------------: |
| Endpoint                       |          `-`           |        `Endpoint вашей формы`         |
| Сообщение об успешной отправке |       `Success`        | `Ваше сообщение об успешной отправке` |
| Сообщение в случае ошибки      | `Something went wrong` |   `Ваше сообщение в случае ошибки`    |

### В коде (для разработчиков)

| Названия свойств               | Название в коде |   Тип    |      По умолчанию      |                Пример                 |
| :----------------------------- | :-------------: | :------: | :--------------------: | :-----------------------------------: |
| Endpoint                       |   `endpoint`    | `string` |          `-`           |        `Endpoint вашей формы`         |
| Сообщение об успешной отправке | `completeText`  | `string` |       `Success`        | `Ваше сообщение об успешной отправке` |
| Сообщение в случае ошибки      | `errorMessage`  | `string` | `Something went wrong` |   `Ваше сообщение в случае ошибки`    |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/blob/master/src/Formspree.js)

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
