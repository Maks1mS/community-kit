## 📖 Detailed overview

Компонент для добавления нескольких медиа-ресурсов. Является дочерним компонентом для `Audio`, `Video` и `Picture`.
Позволяет браузеру выбрать один из предложенных, в зависимости от того какой он кодек или носитель он поддерживает.

## 🎬 Live Demo

[Live demo link](https://quarkly-catalog.netlify.app/source/)

## ⚙️ Usage

1.  Добавьте внутрь компонента `Audio`, `Video` или `Picture`
2.  Укажите `Ссылку на аудио или видео файл` или `Источники изображений` на панели Props
3.  Посмотрите как он работает в режиме превью

### Источники изображений и размеры контейнера

Свойства `Источники изображений` и `Размеры контейнера` позволяют явно определить изображение и его размер, которые должны быть использованы, в зависимости от условий `Медиа запроса для вывода изображения`. Подробнее об этом можно прочитать здесь: [developer.mozilla.org](https://developer.mozilla.org/ru/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

## 🧩 Components and Props

| Названия свойств                    |   Type   | Default |
| :---------------------------------- | :------: | :-----: |
| Ссылка на аудио или видео файл      | `string` |   `-`   |
| MIME-тип аудио или видео контента   |  `enum`  | `none`  |
| Аудио и видео кодеки                | `string` | `none`  |
| Источники изображений               | `string` | `none`  |
| Размеры контейнера                  | `string` | `none`  |
| Категория устройства                |  `enum`  |  `all`  |
| Медиа запрос для вывода изображения | `string` | `none`  |
| MIME-тип изображения                |  `enum`  | `none`  |

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

Licensed under the [MIT License](./LICENSE).
