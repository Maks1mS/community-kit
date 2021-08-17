## 📖 Подробный обзор

Кнопка «Поделиться» позволяет посетителям сайта быстро переходить на ваш аккаунт или группу в социальных сетях.

## ⚙️ Использование

1. Добавьте компонент на страницу.
2. Выберите `Cервис`, на который будет выполнен перехот.
3. Укажите `Cсылку на сайт`, `Заголовок сайта` и `Описание`.
4. Проверьте работу в режиме превью.

**Внимание**: Открывая ссылку в попапе, вы можете указать его ширишу и высоту. Однако, некоторые сервисы могут изменить размер и положение попапа при загрузке.

### Список доступных сервисов:

-   Facebook
-   Twitter
-   Telegram
-   WhatsApp
-   LinkedIn
-   VK
-   Odnoklassniki
-   Reddit
-   Tumblr
-   Viber
-   Line
-   Weibo
-   Pocket

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств   |                   По умолчанию                   |                 Пример                  |
| :----------------- | :----------------------------------------------: | :-------------------------------------: |
| Ссылка на сайт     |              `https://quarkly.io/`               |       `https://www.instagram.com`       |
| Заголовок сайта    |                    `Quarkly`                     |               `Instagram`               |
| Описание           | `Design tool for creating websites and web apps` | `Capture, edit & share photos & videos` |
| Комментарий        |                       `–`                        |        `Follow me on Instagram`         |
| Хештег             |                       `–`                        |              `#instagram`               |
| Сервис             |                    `Facebook`                    |               `Instagram`               |
| Ширина             |                      `640`                       |                 `1280`                  |
| Высота             |                      `640`                       |                  `720`                  |
| Открывать в попапе |                   `Не отмечен`                   |                `Отмечен`                |

### В коде (для разработчиков)

| Названия свойств   | Название в коде |    Тип    |                   По умолчанию                   |                 Пример                  |
| :----------------- | :-------------: | :-------: | :----------------------------------------------: | :-------------------------------------: |
| Ссылка на сайт     |      `url`      | `string`  |              `https://quarkly.io/`               |       `https://www.instagram.com`       |
| Заголовок сайта    |     `title`     | `string`  |                    `Quarkly`                     |               `Instagram`               |
| Описание           |  `description`  | `string`  | `Design tool for creating websites and web apps` | `Capture, edit & share photos & videos` |
| Комментарий        |     `quote`     | `string`  |                       `–`                        |        `Follow me on Instagram`         |
| Хештег             |    `hashtag`    | `string`  |                       `–`                        |              `#instagram`               |
| Сервис             |    `service`    |  `enum`   |                     `light`                      |                 `dark`                  |
| Ширина             |  `windowWidth`  | `number`  |                      `640`                       |                 `1280`                  |
| Высота             | `windowHeight`  | `number`  |                      `640`                       |                  `720`                  |
| Открывать в попапе |     `popup`     | `boolean` |                     `false`                      |                 `true`                  |

#### Значения свойства 'Сервис'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Facebook                  |   `Facebook`    |

Значения свойства `Сервис` полностью совпадают с их пользовательскими названиями.

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
