## 📖 Подробный обзор

Компонент для добавления формы комментариев Facebook.

## ⚙️ Использование

1.  Добавьте компонент на страницу
2.  Укажите ID вашего приложения Facebook
3.  Укажите ссылку на комментарии

### Приложение FaceBook

Для работы компонента требуется создание приложения FaceBook. Сделать это можно по этой ссылке: [FaceBook APP](https://developers.facebook.com/apps)

### Изменение свойств в конструкторе

При изменении свойств компонента в конструкторе может потребоваться обновление холста или всей страницы.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств             | По умолчанию |                             Пример                             |
| :--------------------------- | :----------: | :------------------------------------------------------------: |
| ID приложения Facebook       |     `-`      | [`ID вашего приложения`](https://developers.facebook.com/apps) |
| Ссылка на комментарии        |     `-`      |                    `Ссылка на комментарии`                     |
| Язык загружаемого компонента |  `English`   |                           `Русский`                            |

### В коде (для разработчиков)

| Названия свойств             | Название в коде |   Тип    | По умолчанию |                             Пример                             |
| :--------------------------- | :-------------: | :------: | :----------: | :------------------------------------------------------------: |
| ID приложения Facebook       |     `appId`     | `string` |     `-`      | [`ID вашего приложения`](https://developers.facebook.com/apps) |
| Ссылка на комментарии        |     `href`      | `string` |     `-`      |                    `Ссылка на комментарии`                     |
| Язык загружаемого компонента |   `language`    |  `enum`  |   `en_US`    |                            `ru_RU`                             |

#### Значения свойства 'Язык загружаемого компонента'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| English                   |     `en_US`     |
| Русский                   |     `ru_RU`     |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/blob/master/src/FbComment.js)

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
