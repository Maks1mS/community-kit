## 📖 Подробный обзор

Компонент для создания простых SVG фигур.

## ⚙️ Использование

Добавьте компонент на страницу и посмотрите как он работает.

### Тип фигуры

В свойствах компонента можно изменить тип фигуры:

-   Прямоугольник
-   Линия
-   Эллипс
-   Круг
-   Квадрат

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств     |   По умолчанию    |  Пример   |
| :------------------- | :---------------: | :-------: |
| Тип формы            |    `rectangle`    | `square`  |
| Цвет обводки         |     `#000000`     | `#ffffff` |
| Толщина обводки      |        `1`        |    `0`    |
| Прозрачность обводки |        `1`        |    `0`    |
| Форма обводки        |      `round`      |  `butt`   |
| Пунктирная обводка   |        `-`        |    `-`    |
| Цвет фигуры          | `--color-primary` |  `#000`   |
| Прозрачность фигуры  |        `1`        |    `0`    |

### В коде (для разработчиков)

| Названия свойств     |  Название в коде  |   Тип    |   По умолчанию    |  Пример   |
| :------------------- | :---------------: | :------: | :---------------: | :-------: |
| Тип формы            |      `type`       |  `enum`  |    `rectangle`    | `square`  |
| Цвет обводки         |     `stroke`      | `string` |     `#000000`     | `#ffffff` |
| Толщина обводки      |   `strokeWidth`   | `string` |        `1`        |    `0`    |
| Прозрачность обводки |  `strokeOpacity`  | `string` |        `1`        |    `0`    |
| Форма обводки        |  `strokeLinecap`  |  `enum`  |      `round`      |  `butt`   |
| Пунктирная обводка   | `strokeDasharray` | `string` |        `-`        |    `-`    |
| Цвет фигуры          |      `fill`       | `string` | `--color-primary` |  `#000`   |
| Прозрачность фигуры  |   `fillOpacity`   | `string` |        `1`        |    `0`    |

#### Значения свойства 'Тип формы'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Линия                     |     `line`      |
| Овал                      |    `ellipse`    |
| Круг                      |    `circle`     |
| Прямоугольник             |   `rectangle`   |
| Квадрат                   |    `square`     |

#### Значения свойства 'Форма обводки'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Задняя                    |     `butt`      |
| Круглая                   |     `round`     |
| Квадратная                |    `square`     |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/blob/master/src/SvgShape.js)

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
