## 📖 Подробный обзор

reCAPTCHA is a free service that protects your site from spam and abuse. It uses advanced risk analysis techniques to tell humans and bots apart.

## ⚙️ Использование

1. [Зарегистрируйте ключи reCAPTCHAv2 API](https://www.google.com/recaptcha/admin/create). Во время регистрации обязательно нужно выбрать 'Тип reCAPTCHA': `reCAPTCHA v2`.
2. В поле домены добавьте `quarkly.io` и свой домен, который будет использован при публикации сайта. Позже, домены можно будет изменить.
3. Скопируйте ПЕРВЫЙ (публичный) API ключ.
4. Добавьте ключ в свойство `sitekey`.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств | По умолчанию |                             Пример                              |
| :--------------- | :----------: | :-------------------------------------------------------------: |
| API Ключ         |     `-`      | [`Ваш API Ключ`](https://www.google.com/recaptcha/admin/create) |
| Тема             |  `Светлая`   |                            `Темная`                             |
| Размер           |  `Обычный`   |                          `Компактный`                           |

### В коде (для разработчиков)

| Названия свойств | Название в коде |   Тип    | По умолчанию |                             Пример                              |
| :--------------- | :-------------: | :------: | :----------: | :-------------------------------------------------------------: |
| API Ключ         |    `sitekey`    | `string` |     `-`      | [`Ваш API Ключ`](https://www.google.com/recaptcha/admin/create) |
| Тема             |     `theme`     |  `enum`  |   `light`    |                             `dark`                              |
| Размер           |     `size`      |  `enum`  |   `normal`   |                            `compact`                            |

#### Значения свойства 'Тема'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Светлая                   |     `light`     |
| Темная                    |     `dark`      |

#### Значения свойства 'Размер'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Обычный                   |    `normal`     |
| Компактный                |    `compact`    |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/tree/master/src/ReCaptcha)

## 🗓 Changelog

-   06.08.2021 (v1.0)
-   Some changes

## 📮 Feedback

If you want to see some new features added or found an issue, please contact us! And, of course, we're excited to see your creations based on tis component. So, send us those, too!

Find me on Twitter: @author
[author@contact.mail](mailto:author@contact.mail)

## 📝 License

Licensed under the [MIT License](./LICENSE).
