## 📖 Подробный обзор

Компонент для создания эффекта «параллакс» фонового изображения.

## ⚙️ Использование

1.  Добавьте компонент на страницу
2.  Зафиксируйте высоту страницы в конструкторе
3.  Посмотрите как он работает в режиме превью

### Отображение в конструкторе

Для правильной работы компонента в конструкторе необходимо зафиксировать высоту страницы, указав в параметрах ограничение по высоте.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств              |    По умолчанию    |     Пример     |
| :---------------------------- | :----------------: | :------------: |
| Изображение                   |        `-`         |      `-`       |
| Размер изображения            |      `cover`       |     `100%`     |
| Выравнивание изображения      | `По левой стороне` | `Отцентровано` |
| Повтор изображения            |   `Не повторять`   |  `Повторять`   |
| Скорость прокрутки            |       `0.5`        |      `1`       |
| Использовать банковскую карту |        `1`         |      `2`       |

### В коде (для разработчиков)

| Названия свойств         |   Название в коде   |    Тип    | По умолчанию |  Пример  |
| :----------------------- | :-----------------: | :-------: | :----------: | :------: |
| Изображение              |     `imageURL`      | `string`  |     `-`      |   `-`    |
| Размер изображения       |     `imageSize`     | `string`  |   `cover`    |  `100%`  |
| Выравнивание изображения |   `imagePosition`   |  `enum`   |    `left`    | `center` |
| Повтор изображения       |    `imageRepeat`    |  `enum`   | `no-repeat`  | `repeat` |
| Скорость прокрутки       |  `scrollSpeedProp`  | `boolean` |    `0.5`     |   `1`    |
| Инерция прокрутки        | `scrollInertiaProp` | `boolean` |     `1`      |   `2`    |

#### Значения свойства 'Выравнивание изображения'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| По левой стороне          |     `left`      |
| Отцентровано              |    `center`     |
| По правой стороне         |     `right`     |

#### Значения свойства 'Повтор изображения'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Повторять                 |    `repeat`     |
| Не повторять              |   `no-repeat`   |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/blob/master/src/BgImageParallax.js)

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
