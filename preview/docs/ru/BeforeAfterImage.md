## 📖 Подробный обзор

Компонент позволяет легко выделить различия между двумя изображениями 'до' и 'после' простым перемещением по ним.
Например, можно показать автомобиль до и после покраски, комнату до и после ремонта, мебель до и после восстановления, и т.д.

## ⚙️ Использование

Добавьте компонент на страницу и посмотрите как он работает в режиме превью.

### Изменение изображений

Чтобы добавить своё изображение, выберете соответствующее в компоненте и укажите на панели `Props` значение для свойства `src`.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств      |  По умолчанию  |      Пример       |
| :-------------------- | :------------: | :---------------: |
| Соотношение сторон    |     `4:3`      |      `16:9`       |
| Способ взаимодействия | `При движении` | `При перемещении` |

### В коде (для разработчиков)

| Названия свойств      |  Название в коде  |  Тип   | По умолчанию |  Пример  |
| :-------------------- | :---------------: | :----: | :----------: | :------: |
| Соотношение сторон    |   `AspectRatio`   | `enum` |    `4:3`     |  `16:9`  |
| Способ взаимодействия | `activationTypea` | `enum` |   `onDrag`   | `onMove` |

#### Значения свойства 'Соотношение сторон'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| 16:9                      |     `16:9`      |

Значения свойства `Соотношение сторон` полностью совпадают с их пользовательскими названиями.

#### Значения свойства 'Способ взаимодействия'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| При перемещении           |    `onDrag`     |
| При движении              |    `onMove`     |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/blob/master/src/BeforeAfterImage.js)

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
