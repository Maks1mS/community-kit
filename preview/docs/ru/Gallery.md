## 📖 Detailed overview

Этот компонент содержит несколько изображений. Его можно использовать для демонстрации портфолио, для иллюстрации услуг и товаров.

## 🎬 Live Demo

[Live demo link](https://quarkly-catalog.netlify.app/gallery/)

## ⚙️ Usage

1.  Добавьте компонент на страницу
2.  Укажите `Количество изображений` на панели Props
3.  Укажите каждому изображению ссылку на превью и lightbox (по необходимости)
4.  Посмотрите как он работает в режиме превью

### Свободные места

Если изображения имеют разные соотношения сторон и занимают разное количество ячеек, в сетке галереи могут появиться свободные места.
Свойство `Автоматически заполнять свободные места` позволяет заполнять свободные места изображениями, которые туда помещаются, незначительно изменив их очередность.

### Загрузка изображений

Свойство `Варианты загрузки изображений` отличается для конструктора и опубликованного проекта.

На опубликованном проекте:

-   `Все сразу` - загружаются сразу все имеющиеся изображения
-   `При скроле` - загружается часть изображений. При прокрутке подгружаются остальные
-   `По клику` - загружается часть изображений. Снизу появляется кнопка `Загрузить еще`

В конструкторе:

-   `Все сразу` и `При скроле` - загружаются сразу все имеющиеся изображения
-   `По клику` - загружается часть изображений. Снизу появляется кнопка `Загрузить еще`

## 🧩 Components and Props

| Props Name                              |   Type    |   Default   |
| :-------------------------------------- | :-------: | :---------: |
| Количество изображений                  | `number`  |     `8`     |
| Коичество столбцов                      | `number`  |     `4`     |
| Ширина отступов                         | `string`  |    `10`     |
| Автоматически заполнять свободные места | `boolean` |   `true`    |
| Загрузка изображений                    |  `enum`   | `Все сразу` |
| Соотношение сторон изображений          |  `enum`   |   `auto`    |
| Минимальная ширина изображений          | `string`  |    `80`     |
| Максимальная ширина изображений         | `string`  |    `1fr`    |
| Отключить лоадер для превью             | `boolean` |   `false`   |
| Отключить прокрутку                     | `string`  |   `true`    |
| Отключить лоадер для лайтбокса          | `boolean` |   `false`   |

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
