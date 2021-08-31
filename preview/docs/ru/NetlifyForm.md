## 📖 Подробный обзор

Компонент для добавления формы Netlify и отправки её в [Netlify Forms](https://www.netlify.com/products/forms/).

## ⚙️ Использование

1. Зарегистрируйтесь в [Netlify](https://app.netlify.com/signup), если не сделали этого ранее;
2. Добавьте компонент на страницу;
3. Наполните форму. Для этого добавьте в неё компоненты `Button` и минимум один `Input`.
4. Укажите `Название формы` на панели Props;
5. Опубликуйте проект на `Netlify`;
6. Посмотрите как он работает на опубликованном сайте.

**Внимание:**

-   Для работы этого компонента необходимо опубликовать проект на [Netlify](https://www.netlify.com/)
-   Компонент работает только на опубликованном сайте.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств               |      По умолчанию      |                Пример                 |
| :----------------------------- | :--------------------: | :-----------------------------------: |
| Название формы                 |       `my-form`        |        `Название вашей формы`         |
| Сообщение об успешной отправке |       `Success`        | `Ваше сообщение об успешной отправке` |
| Сообщение в случае ошибки      | `Something went wrong` |   `Ваше сообщение в случае ошибки`    |

### В коде (для разработчиков)

| Названия свойств               | Название в коде  |   Тип    |      По умолчанию      |                Пример                 |
| :----------------------------- | :--------------: | :------: | :--------------------: | :-----------------------------------: |
| Название формы                 |    `formName`    | `string` |       `my-form`        |        `Название вашей формы`         |
| Сообщение об успешной отправке | `successMessage` | `string` |       `Success`        | `Ваше сообщение об успешной отправке` |
| Сообщение в случае ошибки      |  `errorMessage`  | `string` | `Something went wrong` |   `Ваше сообщение в случае ошибки`    |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/tree/master/src/NetlifyForm)

## 🗓 Changelog

-   16/06/2021 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/SuF9vCMJGW)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](./LICENSE).
