## 📖 Detailed overview

Компонент-контейнер показывает текстовую подсказку при наведении курсора на содержимое. Подойдет, например для расшифровки терминов или краткого описания частей иллюстрации.

## 🎬 Live Demo

[Live demo link](https://quarkly-ui-components.netlify.app/tooltip/)

## ⚙️ Usage

Добавьте компонент на страницу и посмотрите как он работает в режиме превью.

### Поменять направление

Свойство `Положение Tooltip` отвечает за положение где будет всплывать подсказка.

### Автоматическая смена положения

Если свойство `Автоматическая смена положения` активно, то всплывающая подсказка автоматически будет менять свое положение в случае нехватки места. При этом будут учитываться все имеющиеся отступы.

## 🧩 Components and Props

| Props Name                     |   Type   |    Default     | Description                                                                   |
| :----------------------------- | :------: | :------------: | :---------------------------------------------------------------------------- |
| Размер стрелочки               | `string` |     `8px`      | Размер стрелочки                                                              |
| Отступ стрелочки               |  `bool`  |     `4px`      | Отступ стрелочки от блока с контентом                                         |
| ArroowStatusProp               |  `bool`  |     `true`     | Показать / Скрыть стрелочку                                                   |
| Положение Tooltip              |  `enum`  |     `top`      | Положение стрелочки относительно блока с контентом (top, bottom, left, right) |
| Цвет Tooltip                   | `string` | `--color-dark` | Цвет фона Tooltip и цвет стрелочки                                            |
| Отступ от краев                | `string` |      `0`       | Минимальное расстояние между Tooltip до любого края окна                      |
| Показать Tooltip               |  `enum`  |    `always`    | Способ отображения (always, hover)                                            |
| Автоматическая смена положения |  `bool`  |     `true`     | Изменять положение Tooltip при нехватке места.                                |

## 🗓 Changelog

    - 09/04/2021 (v1.0)
    - Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://feedback.quarkly.io/communities/1-quarkly-forum/categories/7-components/topics)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](./LICENSE).
