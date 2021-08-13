## 📖 Подробный обзор

Компонент для добавления кнопки «Нравится» Facebook.

## ⚙️ Использование

1.  Добавьте компонент на страницу
2.  Укажите ID вашего приложения Facebook
3.  Укажите ссылку на вашу страницу

### Приложение FaceBook

Для работы компонента требуется создание приложения FaceBook. Сделать это можно по этой ссылке: [FaceBook APP](https://developers.facebook.com/apps)

### Контент для детей

Если ваш веб-сайт или онлайн-сервис содержит контент для детей до 13 лет, активируйте параметр `Сайт для детей`.
Подробнее об этом можно почитать на странице [FaceBook Kid](https://developers.facebook.com/docs/plugins/restrictions).

### UTM-метка

Название UTM-метки должно:

-   иметь длину не более 50 символов;
-   состоять из буквенно-цифровых символов
-   содержать только символы +/=-.:\_

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств             |   По умолчанию    |          Пример           |
| :--------------------------- | :---------------: | :-----------------------: |
| ID приложения Facebook       |        `-`        |         `123456`          |
| Ссылка на страницу           |        `-`        | `https://yourdomain.name` |
| Язык загружаемого компонента |     `English`     |         `Русский`         |
| Цветовая схема               |      `Light`      |          `Dark`           |
| Кнопка "Поделиться"          |      `Hide`       |          `Show`           |
| Макет                        | `Стандартный вид` |     `Простая кнопка`      |
| Размер кнопки                |      `Small`      |          `Large`          |
| Действие по клику            |      `Like`       |        `Recommend`        |
| Сайт для детей               |   `Не отмечен`    |         `Отмечен`         |
| UTM-метка                    |        `-`        |        `utm12345`         |

### В коде (для разработчиков)

| Названия свойств             |  Название в коде  |    Тип    |   По умолчанию    |          Пример           |
| :--------------------------- | :---------------: | :-------: | :---------------: | :-----------------------: |
| ID приложения Facebook       |      `appId`      | `string`  |        `-`        |         `123456`          |
| Ссылка на страницу           |      `href`       | `string`  |        `-`        | `https://yourdomain.name` |
| Язык загружаемого компонента |    `language`     |  `enum`   |      `en_US`      |          `ru_RU`          |
| Цветовая схема               |   `colorScheme`   |  `enum`   |      `Light`      |          `Dark`           |
| Кнопка "Поделиться"          |    `showShare`    |  `enum`   |      `Hide`       |          `Show`           |
| Макет                        |     `layout`      |  `enum`   | `Стандартный вид` |     `Простая кнопка`      |
| Размер кнопки                |      `size`       |  `enum`   |      `Small`      |          `Large`          |
| Действие по клику            |     `action`      |  `enum`   |      `Like`       |        `Recommend`        |
| Сайт для детей               | `kidDirectedSite` | `boolean` |      `false`      |          `true`           |
| UTM-метка                    |    `referral`     | `string`  |        `-`        |        `utm12345`         |

#### Значения свойства 'Язык загружаемого компонента'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| English                   |     `en_US`     |
| Русский                   |     `ru_RU`     |

#### Значения свойства 'Цветовая схема'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Светлая                   |     `light`     |
| Тёмная                    |     `dark`      |

#### Значения свойства 'Кнопка "Поделиться"'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Показать                  |     `show`      |
| Скрыть                    |     `hide`      |

#### Значения свойства 'Макет'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Стандартный вид           |   `standard`    |
| Контейнер со счётчиком    |   `box_count`   |
| Кнопка со счётчиком       | `button_count`  |
| Простая кнопка            |    `button`     |

#### Значения свойства 'Размер кнопки'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Маленькая                 |     `small`     |
| Большая                   |     `large`     |

#### Значения свойства 'Действие по клику'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Like                      |     `like`      |
| Recommend                 |   `recommend`   |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/blob/master/src/FbLike.js)

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
