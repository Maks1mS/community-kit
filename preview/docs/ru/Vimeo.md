## 📖 Detailed overview

Компонент для встраивания видеопроигрывателя сервиса Vimeo.

## 🎬 Live Demo

[Live demo link](https://quarkly-catalog.netlify.app/vimeo/)

## ⚙️ Usage

1.  Добавьте компонент на страницу
2.  Укажите `Ссылку или идентификатор видео` на панели Props
3.  Посмотрите как он работает в режиме превью

### Воспроизведение в фоновом режиме

Если активно свойство `Воспроизведение в фоновом режиме`, то видео будет воспроизводиться в фоновом режиме.
В этом случае скрываются все элементы управления, включается автоматическое воспроизведение и видео зацикливается.

## 🧩 Components and Props

| Названия свойств                 |   Type    |  Default   | Description                                                   |
| :------------------------------- | :-------: | :--------: | :------------------------------------------------------------ |
| Ссылка или идентификатор видео   | `string`  | `12345678` | Ссылка или идентификатор видео из Vimeo                       |
| Начало воспроизведения (в сек.)  | `number`  |   `none`   | Время в секундах, с которого начать воспроизведение видео     |
| Автоматическое воспроизведение   | `boolean` |  `false`   | Автоматическое воспроизведение видео при загрузке страницы    |
| Автоматическая пауза             | `boolean` |   `true`   | Автоматически останавливать видео при воспроизведении другого |
| Показывать элементы управления   | `boolean` |   `true`   |                                                               |
| Цвет элементов управления        | `string`  | `#00ADEF`  |                                                               |
| Зациклить воспроизведение        | `boolean` |  `false`   |                                                               |
| Показывать название видео        | `boolean` |   `true`   |                                                               |
| Показывать превью видео          | `boolean` |   `true`   |                                                               |
| Показывать имя владельца         | `boolean` |   `true`   |                                                               |
| Громкость звука (от 0 до 1)      | `number`  |    `1`     |                                                               |
| Отключить звук                   | `boolean` |  `false`   |                                                               |
| Воспроизведение в фоновом режиме | `boolean` |  `false`   |                                                               |
| По ширине родителя               | `boolean` |   `true`   |                                                               |

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
