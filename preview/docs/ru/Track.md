## 📖 Подробный обзор

Компонент для добавления синхронизированной текстовой дорожки. Является дочерним компонентом для `Audio` и `Video`.
Текстовая дорожка обычно содержит субтитры на разных языках, комментарии, заголовки и т.д.

## ⚙️ Использование

1.  Добавьте внутрь компонента `Audio` или `Video`
2.  Укажите `Ссылку на файл` на панели Props
3.  Посмотрите как он работает в режиме превью

### Расширение файла

Файл с текстовой дорожкой должен иметь расширение `.vtt`

### Дорожка по умолчанию

Свойство `Использовать по умолчанию` указывает, что текущая дорожка предпочтительна.
Только для одной дорожки можно применить это свойство.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств          | По умолчанию |   Пример   |
| :------------------------ | :----------: | :--------: |
| Ссылка на файл            |     `-`      |    `-`     |
| Использовать по умолчанию | `Не отмечен` | `Отмечен`  |
| Язык дорожки              |     `en`     |    `de`    |
| Назначение дорожки        | `subtitles`  | `captions` |
| Отображаемое название     |     `-`      |   `text`   |

### В коде (для разработчиков)

| Названия свойств          | Название в коде |    Тип    | По умолчанию |   Пример   |
| :------------------------ | :-------------: | :-------: | :----------: | :--------: |
| Ссылка на файл            |      `src`      | `string`  |     `-`      |    `-`     |
| Использовать по умолчанию |   `isDefault`   | `boolean` |   `false`    |   `true`   |
| Язык дорожки              |    `srclang`    | `string`  |     `en`     |    `de`    |
| Назначение дорожки        |     `kind`      |  `enum`   | `subtitles`  | `captions` |
| Отображаемое название     |     `label`     | `string`  |     `-`      |   `text`   |

#### Значения свойства 'Назначение дорожки'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Субтитры                  |   `subtitles`   |
| Подписи                   |   `captions`    |
| Описания                  | `descriptions`  |
| Главы                     |   `chapters`    |
| Метаданные                |   `metadata`    |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/blob/master/src/Track.js)

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
