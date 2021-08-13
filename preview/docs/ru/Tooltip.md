## 📖 Подробный обзор

Компонент-контейнер показывает текстовую подсказку при наведении курсора на содержимое.

## ⚙️ Использование

Добавьте компонент на страницу и поместите в него любой другой компонент, например, `Text`. Затем, посмотрите как он работает в режиме превью.

### Автоматическая смена положения

Если свойство `Автоматическая смена положения` активно, всплывающая подсказка автоматически будет менять свое положение в случае нехватки места. При этом будут учитываться все имеющиеся отступы.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств               | По умолчанию |    Пример    |
| :----------------------------- | :----------: | :----------: |
| Показывать Tooltip             |   `Всегда`   |   `Всегда`   |
| Положение Tooltip              |   `Сверху`   |   `Снизу`    |
| Отступ от краев                |     `0`      |    `2px`     |
| Отступ от контента             |    `4px`     |    `8px`     |
| Цвет фона Tooltip              |  `#000000`   |  `#ffffff`   |
| Показать стрелочку             |  `Отмечен`   | `Не отмечен` |
| Размер стрелочки (px)          |    `8px`     |    `12px`    |
| Автоматическая смена положения |  `Отмечен`   | `Не отмечен` |

### В коде (для разработчиков)

| Названия свойств               |     Название в коде     |    Тип    | По умолчанию |  Пример   |
| :----------------------------- | :---------------------: | :-------: | :----------: | :-------: |
| Показывать Tooltip             |   `tooltipStatusProp`   |  `enum`   |   `always`   |  `hover`  |
| Положение Tooltip              |  `tooltipPositionProp`  |  `enum`   |    `top`     | `bottom`  |
| Отступ от краев                |   `tooltipOffsetProp`   | `string`  |     `0`      |   `2px`   |
| Отступ от контента             |   `contentOffsetProp`   | `string`  |    `4px`     |   `8px`   |
| Цвет фона Tooltip              |   `tooltipColorProp`    | `string`  |  `#000000`   | `#ffffff` |
| Показать стрелочку             |    `arrowStatusProp`    | `boolean` |    `true`    |  `false`  |
| Размер стрелочки (px)          |     `arrowSizeProp`     | `string`  |    `8px`     |  `12px`   |
| Автоматическая смена положения | `tooltipAutoChangeProp` | `boolean` |    `true`    |  `false`  |

#### Значения свойства 'Показывать Tooltip'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Всегда                    |    `always`     |
| При наведении             |     `hover`     |

#### Значения свойства 'Положение Tooltip'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Сверху                    |      `top`      |
| Справа                    |     `right`     |
| Снизу                     |    `bottom`     |
| Слева                     |     `left`      |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/tree/master/src/Tooltip)

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
