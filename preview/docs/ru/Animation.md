## 📖 Подробный обзор

Компонент для анимирования одного или нескольких элементов.

## ⚙️ Использование

Добавьте компонент на страницу и поместите в него любой другой компонент, который необходимо анимировать.

### Включить анимацию

Если активировать свойство `Включить анимацию принудительно`, анимация будет проигрываться автоматически.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств                 |  По умолчанию  |   Пример   |
| :------------------------------- | :------------: | :--------: |
| Триггер анимации                 | `При загрузке` | `По клику` |
| Тип анимации                     |   `Fade Out`   | `Fade In`  |
| Количество итераций              |  `Бесконечно`  | `Один раз` |
| Функция сглаживания анимации     |    `linear`    |   `ease`   |
| Длительность появления и скрытия |      `1s`      |    `3s`    |
| Задержка перед началом анимации  |      `0s`      |    `1s`    |
| Включить анимацию принудительно  |  `Не отмечен`  | `Отмечен`  |

### В коде (для разработчиков)

| Названия свойств                 | Название в коде  |    Тип    | По умолчанию |  Пример   |
| :------------------------------- | :--------------: | :-------: | :----------: | :-------: |
| Триггер анимации                 |    `trigger`     |  `enum`   |   `onload`   |  `click`  |
| Тип анимации                     |   `animation`    |  `enum`   |  `Fade Out`  | `Fade In` |
| Количество итераций              |   `iteration`    |  `enum`   |  `infinity`  |  `once`   |
| Функция сглаживания анимации     | `timingFunction` | `string`  |   `linear`   |  `ease`   |
| Длительность появления и скрытия |    `duration`    | `string`  |     `1s`     |   `3s`    |
| Задержка перед началом анимации  |     `delay`      | `string`  |     `0s`     |   `1s`    |
| Включить анимацию принудительно  |      `test`      | `boolean` |   `false`    |  `true`   |

#### Значения свойства 'Триггер анимации':

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| При загрузке              |    `onload`     |
| По клику                  |     `click`     |
| По наведению              |     `hover`     |
| Появление сверху          |     `above`     |
| Появление снизу           |     `below`     |

#### Значения свойства 'Тип анимации':

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Fade Out                  |   `Fade Out`    |

Значения свойства `animation` полностью совпадают с их пользовательскими названиями.

#### Значения свойства 'Количество итераций':

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Один раз                  |     `once`      |
| Бесконечно                |   `infinite`    |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/tree/master/src/Animation)

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
