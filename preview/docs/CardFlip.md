## 📖 Detailed overview

Вращающаяся карточка с изображением. Вращается по клику или наведению курсора.
На обратную сторону можно добавить любые другие компоненты.

## 🎬 Live Demo

[Live demo link](https://quarkly-catalog.netlify.app/cardflip/)

## ⚙️ Usage

Добавьте компонент на страницу и посмотрите как он работает в режиме превью.

### Поменять изображение карточки

Чтобы изменить изображение карточки, выберите встроенный компонент `Image` и измените ссылку в параметре `Src`.

### Соотношение сторон изображения

Если выбрать значение `auto` в свойстве `Соотношение сторон`, размер изображения будет равен размеру (высоте и ширине) компонента.

## 🧩 Components and Props

| Названия свойств             |   Type    | Description                                            |     Default    |  Example  |
| :--------------------------- | :-------: | :----------------------------------------------------- | :------------: | :-------: |
| Триггер переворота           |  `enum`   | Действие, вызывающее переворот [click, hover]          |     `click`    |  `hover`  |
| Напраление переворота        |  `enum`   | Направление переворота [toRight, toLeft, ToUp, toDown] |    `toRight`   |  `toDown` |
| Соотношение сторон           |  `enum`   | Сохранять пропорции [auto, 16:9, 4:3, 1:1, 3:4, 9:16 ] |     `auto`     |   `1:1`   |
| Функция сглаживания анимации | `string`  | Функция сглаживания анимации                           | `cubic-bezier` | `ease-in` |
| Длительность анимации        | `number`  | Продолжительность анимации                             |     `1000`     |  `2000`   |
| Перевернуть карточку         | `boolean` | Принудительно перевернуть карточку для тестирования    |     `false`    |  `true`   |

## 🗓 Changelog

 - 21/04/2021 (v1.0)
 - Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you can’t stand missing. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](./LICENSE).
