## 📖 Подробный обзор

Компонент для добавления lightweight and scalable Lottie animations for your website.

## ⚙️ Использование

Добавьте компонент на страницу, укажите ссылку на файл с анимацией и посмотрите как он работает непосредственно в конструкторе.

По умолчанию, `Путь к файлу` имеет значение `https://assets2.lottiefiles.com/packages/lf20_ah1zbzo1.json`.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств          | По умолчанию |    Пример    |
| :------------------------ | :----------: | :----------: |
| Путь к файлу              |     `-`      |   `123456`   |
| Отображение               |    `SVG`     |   `Canvas`   |
| Первый кадр               |     `-`      |     `10`     |
| Последний кадр            |     `-`      |     `50`     |
| Принудительное обновление |  `Отмечен`   | `Не отмечен` |
| Зациклить анимацию        |  `Отмечен`   | `Не отмечен` |
| Приостановить анимацию    | `Не отмечен` |  `Отмечен`   |
| Остановить анимацию       | `Не отмечен` |  `Отмечен`   |
| Скорость анимации         |     `1`      |    `0.5`     |

### В коде (для разработчиков)

| Названия свойств          | Название в коде |    Тип    | По умолчанию |              Пример               |
| :------------------------ | :-------------: | :-------: | :----------: | :-------------------------------: |
| Путь к файлу              |     `path`      | `string`  |     `-`      | `https://assets2.lottiefiles.com` |
| Отображение               |   `renderer`    |  `enum`   |    `SVG`     |             `Canvas`              |
| Первый кадр               |  `firstFrame`   | `string`  |     `-`      |               `10`                |
| Последний кадр            |   `lastFrame`   | `string`  |     `-`      |               `50`                |
| Принудительное обновление |  `forceUpdate`  | `boolean` |    `true`    |              `false`              |
| Зациклить анимацию        |     `loop`      | `boolean` |    `true`    |              `false`              |
| Приостановить анимацию    |   `isPaused`    | `boolean` |   `false`    |              `true`               |
| Остановить анимацию       |   `isStopped`   | `boolean` |   `false`    |              `true`               |
| Скорость анимации         |     `speed`     | `string`  |     `1`      |               `0.5`               |

#### Значения свойства 'Отображение'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| SVG (Рекомендуется)       |      `svg`      |
| Canvas                    |    `canvas`     |
| HTML                      |     `html`      |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/tree/master/src/Lottie)

## 🗓 Changelog

-   30/06/2021 (v1.0)
-   Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](./LICENSE).
