## 📖 Подробный обзор

Компонент состоит из кнопки, которая расположена в правом нижнем углу экрана. При нажатии на нее, страница автоматически прокрутится в самое начало.

## ⚙️ Использование

Добавьте компонент на страницу. Отмечу, что при добавлении компонент визуально не отобразится. Чтобы проверить работоспособность компонента в конструкторе, задайте сверху в параметрах холста ограничение по высоте. Также, вы можете опубликовать сайт и проверить там.

### Принудительный показ кнопки

Свойство `Show Button Always` отвечает за принудительный показ кнопки всегда. Свойство может понадобится при редактировании кнопки.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств             |  По умолчанию   |   Пример   |
| :--------------------------- | :-------------: | :--------: |
| Показать кнопку через (в px) |      `100`      |   `200`    |
| Показывать кнопку всегда     |  `Не отмечено`  | `Отмечено` |
| Продолжительность анимации   |     `1000`      |  `15000`   |
| Функция сглаживания анимации | `easeInOutQuad` |  `linear`  |

### В коде (для разработчиков)

| Названия свойств             | Название в коде |    Тип    |  По умолчанию   |  Пример  |
| :--------------------------- | :-------------: | :-------: | :-------------: | :------: |
| Показать кнопку через (в px) |   `showAfter`   | `string`  |      `100`      |  `200`   |
| Показывать кнопку всегда     |  `showAlways`   | `boolean` |     `false`     |  `true`  |
| Продолжительность анимации   |   `duration`    | `string`  |     `1000`      | `15000`  |
| Функция сглаживания анимации | `easingPreset`  | `string`  | `easeInOutQuad` | `linear` |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/blob/master/src/BackToTop.js)

## 🗓 Changelog

-   16/03/2021 (v1.0)
-   Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you can’t stand missing. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://feedback.quarkly.io/communities/1-quarkly-forum/categories/7-components/topics)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
