## 📖 Подробный обзор

Контейнер для скрытия меню или любого другого контента в мобильной версии сайта.
Чтобы показать контент, необходимо нажать на кнопку меню.

## ⚙️ Использование

1.  Добавьте компонент на страницу
2.  Поместите в него любой другой компонент
3.  Выберите breakpoint для переключения в мобильный вид
4.  Проверьте работу в режиме превью на выбранном breakpoint

### Положение панели

Cвойство `Положение панели в мобильном виде` позволяет выбрать положение панели относительно viewport или кнопки меню.
Можно выбрать одно из следующих значений:

-   full - На весь экран;
-   left - По левому краю экрана;
-   right - По правому краю экрана;
-   near - Слева от кнопки;
-   nearRight - Справа от кнопки.

### Управление состоянием из своего компонента

Вы можете получить состояние компонента MobileSidePanel и методы для его обновления в своём, дочернем компоненте.

Вам доступна переменная `isOpen`, а также методы `openPanel`, `closePanel` и `togglePanel` для открытия и закрытия MobileSidePanel.

Для этого:

1. Импортируйте объект контекста из компонента:

    `import { MobileSidePanelContext } from './QuarklycommunityKitMobileSidePanel';`

2. Получите значение импортированного контекста:

    `const context = useContext(MobileSidePanelContext);`

3. Используйте значения и методы в вашем компоненте:

    `<Button onClick={context.closePanel} />`

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств                        | По умолчанию |  Пример   |
| :-------------------------------------- | :----------: | :-------: |
| Переключать мобильный вид на breakpoint |     `md`     |   `sm`    |
| Положение панели в мобильном виде       |    `near`    |  `left`   |
| Функция сглаживания анимации            |    `ease`    | `ease-in` |
| Длительность появления и скрытия        |    `0.3s`    |  `0.5s`   |

### В коде (для разработчиков)

| Названия свойств                        | Название в коде |   Тип    | По умолчанию |  Пример   |
| :-------------------------------------- | :-------------: | :------: | :----------: | :-------: |
| Переключать мобильный вид на breakpoint |  `breakpoint`   | `string` |     `md`     |   `sm`    |
| Положение панели в мобильном виде       | `menuPosition`  |  `enum`  |    `near`    |  `left`   |
| Функция сглаживания анимации            | `animDuration`  | `string` |    `ease`    | `ease-in` |
| Длительность появления и скрытия        | `animFunction`  | `string` |    `0.3s`    |  `0.5s`   |

#### Значения свойства 'Положение панели в мобильном виде'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| На весь экран             |     `full`      |
| По левому краю экрана     |     `left`      |
| По правому краю экрана    |     `right`     |
| Слева от кнопки           |     `near`      |
| Справа от кнопки          |   `nearRight`   |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/tree/master/src/MobileSidePanel)

## 🗓 Changelog

-   21/04/2021 (v1.0)
-   Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you can’t stand missing. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
