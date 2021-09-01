## 📖 Подробный обзор

Виджет для таймлайна Twitter – это простой способ встроить твиты из учетной записи на ваш веб-сайт в компактном, линейном виде.

## ⚙️ Использование

Добавьте компонент на страницу и укажите `Имя или ссылку на страницу пользователя`.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств                        | По умолчанию  |   Пример    |
| :-------------------------------------- | :-----------: | :---------: |
| Имя или ссылка на страницу пользователя | `@quarklyapp` | `@username` |
| Ограничить количество твитов (1-20)     |      `1`      |    `20`     |
| Убрать шапку                            | `Не отмечен`  |  `Отмечен`  |
| Убрать подвал                           | `Не отмечен`  |  `Отмечен`  |
| Убрать границы виджета                  | `Не отмечен`  |  `Отмечен`  |
| Убрать фон виджета                      | `Не отмечен`  |  `Отмечен`  |
| Убрать полосу прокрутки                 | `Не отмечен`  |  `Отмечен`  |
| Цвет границы твитов (только #HEX)       |      `-`      |  `#000000`  |
| ARIA live politeness                    |   `polite`    | `assertive` |

### В коде (для разработчиков)

| Названия свойств                        | Название в коде |    Тип    | По умолчанию  |   Пример    |
| :-------------------------------------- | :-------------: | :-------: | :-----------: | :---------: |
| Имя или ссылка на страницу пользователя | `dataProvider`  | `string`  | `@quarklyapp` | `@username` |
| Ограничить количество твитов (1-20)     |  `tweetLimit`   | `string`  |      `1`      |    `20`     |
| Убрать шапку                            |   `noheader`    | `boolean` |    `false`    |   `true`    |
| Убрать подвал                           |   `nofooter`    | `boolean` |    `false`    |   `true`    |
| Убрать границы виджета                  |   `noborders`   | `boolean` |    `false`    |   `true`    |
| Убрать фон виджета                      |  `transparent`  | `boolean` |    `false`    |   `true`    |
| Убрать полосу прокрутки                 |  `noscrollbar`  | `boolean` |    `false`    |   `true`    |
| Цвет границы твитов (только #HEX)       |  `tweetBorder`  | `string`  |      `-`      |  `#000000`  |
| ARIA live politeness                    |  `ariaPolite`   |  `enum`   |   `polite`    | `assertive` |

#### Значения свойства 'ARIA live politeness'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Polite                    |    `polite`     |
| Assertive                 |   `assertive`   |
| Rude                      |     `rude`      |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/tree/master/src/TwitterFeed)

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
