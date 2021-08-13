## 📖 Подробный обзор

Компонент для добавления нескольких медиа-ресурсов. Является дочерним компонентом для `Audio`, `Video` и `Picture`.
Позволяет браузеру выбрать один из предложенных, в зависимости от того какой он кодек или носитель он поддерживает.

## ⚙️ Использование

1.  Добавьте внутрь компонента `Audio`, `Video` или `Picture`
2.  Укажите `Ссылку на аудио или видео файл` или `Источники изображений` на панели Props
3.  Посмотрите как он работает в режиме превью

### Источники изображений и размеры контейнера

Свойства `Источники изображений` и `Размеры контейнера` позволяют явно определить изображение и его размер, которые должны быть использованы, в зависимости от условий `Медиа запроса для вывода изображения`. Подробнее об этом можно прочитать здесь: [developer.mozilla.org](https://developer.mozilla.org/ru/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств                    | По умолчанию |          Пример           |
| :---------------------------------- | :----------: | :-----------------------: |
| Ссылка на аудио или видео файл      |     `-`      |            `-`            |
| MIME-тип аудио или видео контента   |     `-`      |       `video/webm`        |
| Аудио и видео кодеки                |     `-`      |       `vp8, vorbis`       |
| Источники изображений               |     `-`      |        `image.png`        |
| Размеры контейнера                  |     `-`      | `(min-width: 768px) 50vw` |
| Категория устройства                |    `all`     |         `screen`          |
| Медиа запрос для вывода изображения |     `-`      |   `(min-width: 768px)`    |
| MIME-тип изображения                |     `-`      |        `image/png`        |

### В коде (для разработчиков)

| Названия свойств                    | Название в коде |   Тип    | По умолчанию |          Пример           |
| :---------------------------------- | :-------------: | :------: | :----------: | :-----------------------: |
| Ссылка на аудио или видео файл      |      `src`      | `string` |     `-`      |            `-`            |
| MIME-тип аудио или видео контента   |   `typeMedia`   |  `enum`  |     `-`      |       `video/webm`        |
| Аудио и видео кодеки                |    `codecs`     | `string` |     `-`      |       `vp8, vorbis`       |
| Источники изображений               |    `srcSet`     | `string` |     `-`      |        `image.png`        |
| Размеры контейнера                  |     `sizes`     | `string` |     `-`      | `(min-width: 768px) 50vw` |
| Категория устройства                |  `mediaSelect`  |  `enum`  |    `all`     |         `screen`          |
| Медиа запрос для вывода изображения |  `mediaInput`   | `string` |     `-`      |   `(min-width: 768px)`    |
| MIME-тип изображения                |  `typePicture`  |  `enum`  |     `-`      |        `image/png`        |

#### Значения свойства 'Категория устройства'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Все                       |      `all`      |
| Печать                    |     `print`     |
| Экран                     |    `screen`     |
| Речь                      |    `speech`     |

#### Значения свойства 'MIME-тип аудио или видео контента'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| video/mp4                 |   `video/mp4`   |

Значения свойства `MIME-тип аудио или видео контента` полностью совпадают с их пользовательскими названиями.

#### Значения свойства 'MIME-тип изображения'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| image/webp                |  `image/webp`   |

Значения свойства `MIME-тип изображения` полностью совпадают с их пользовательскими названиями.

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/blob/master/src/Source.js)

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
