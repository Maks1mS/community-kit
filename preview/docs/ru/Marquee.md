## 📖 Подробный обзор

Компонент для создания на странице бегущей строки.

## ⚙️ Использование

1. Добавьте компонент на страницу.
2. Перетащите в него любой компонент.
3. Посмотрите как он работает в режиме превью.

### Расстояние между компонентами

Расстояние между компонентами регулируется с помощью изменения ширины и отступов Container.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств    | По умолчанию |  Пример   |
| :------------------ | :----------: | :-------: |
| Задержка            |     `0s`     |   `1s`    |
| Скорость            |     `50`     |   `300`   |
| Направление         |   `Влево`    | `Вправо`  |
| Пауза при наведении | `Не отмечен` | `Отмечен` |
| Пауза при клике     | `Не отмечен` | `Отмечен` |

### В коде (для разработчиков)

| Названия свойств    | Название в коде |    Тип    | По умолчанию | Пример  |
| :------------------ | :-------------: | :-------: | :----------: | :-----: |
| Задержка            |     `delay`     | `string`  |     `0s`     |  `1s`   |
| Скорость            |     `speed`     | `number`  |     `50`     |  `300`  |
| Направление         |   `direction`   |  `enum`   |    `left`    | `right` |
| Пауза при наведении | `pauseOnHover`  | `boolean` |   `false`    | `true`  |
| Пауза при клике     | `pauseOnClick`  | `boolean` |   `false`    | `true`  |

#### Значения свойства 'Направление'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Влево                     |     `left`      |
| Вправо                    |     `right`     |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/tree/master/src/Marquee)

## 🗓 Changelog

-   26/01/2022 (v1.0)
-   Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](./LICENSE).
