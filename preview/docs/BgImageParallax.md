## 📖 Detailed overview

Компонент для создания эффекта «параллакс».

## 🎬 Live Demo

[Live demo link](https://quarkly-ui-components.netlify.app/bgimageparallax/)

## ⚙️ Usage

Добавьте компонент на страницу. Отмечу, что при добавлении компонент визуально не отобразится. Чтобы проверить работоспособность компонента в конструкторе, задайте сверху в параметрах холста ограничение по высоте. Также, вы можете опубликовать сайт и проверить там.

### Принудительный показ кнопки

Свойство `Show Button Always` отвечает за принудительный показ кнопки всегда. Свойство может понадобится при редактировании кнопки.

## 🧩 Components and Props

| Props Name               |   Type    |   Default   | Description                                                          |
| :----------------------- | :-------: | :---------: | :------------------------------------------------------------------- |
| Ссылка на изображение    | `number ` |   `none`    | Прямая ссылка на изображение                                         |
| Размер изображения       | `string`  |   `cover`   | Размер изображения                                                   |
| Выравнивание изображения |  `enum`   |   `left`    | Выравнивание изображения (left, center, right)                       |
| Выравнивание изображения |  `enum`   | `no-repeat` | Повторять изображения по вертикали и горизонтали (repeat, no-repeat) |
| Повтор изображения       |  `bool`   |   `false`   | Показывать кнопку всегда                                             |
| Скорость прокрутки       |  `bool`   |    `0.5`    | Скорость прокрутки изображения                                       |
| Инерция прокрутки        |  `bool`   |     `1`     | Прокрутка, после остановки                                           |

## 🗓 Changelog

    - 09/04/2021 (v1.0)
    - Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you can’t stand missing. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://feedback.quarkly.io/communities/1-quarkly-forum/categories/7-components/topics)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](./LICENSE).
