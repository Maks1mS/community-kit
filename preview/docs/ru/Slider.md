## 📖 Подробный обзор

Ползунок для выбора числа из промежутка между нижней и верхней границами.

## ⚙️ Использование

Добавьте компонент на страницу и посмотрите как он работает в режиме превью.

### Управление состоянием из своего компонента

Вы можете использовать компонент как [управляемый](https://ru.reactjs.org/docs/forms.html#controlled-components). Для этого используйте событие `onChange` и атрибут `value`.

### Изменение отображения надписей

Для изменения отображения текста надписей можно передать функцию через параметр `labelRenderer`.

Пример:

```jsx
const myLabelRenderer = (value, { isHandleTooltip }) => {
    // Если это надпись - подсказка под ручкой (маркером) ползунка
    if (isHandleTooltip) {
        return `${value}$`
    }

    return value
}

return <Slider labelRenderer={myLabelRenderer}>
```

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств             | По умолчанию |  Пример   |
| :--------------------------- | :----------: | :-------: |
| Имя input элемента           |   `range`    |  `count`  |
| Минимальное значение         |     `0`      |  `-100`   |
| Максимальное значение        |     `10`     |  `50.55`  |
| Вертикальное отображение     | `Не отмечен` | `Отмечен` |
| Размер шага                  |    `0.1`     |  `0.01`   |
| Размер шага надписей         |     `5`      |    `3`    |
| Точность отображения надписи |     `1`      |    `0`    |
| Значения надписей            |     `-`      |  `1,2,3`  |
| Значение по умолчанию        |     `5`      |    `0`    |

### В коде (для разработчиков)

| Названия свойств             | Название в коде  |    Тип     | По умолчанию |                    Пример                     |
| :--------------------------- | :--------------: | :--------: | :----------: | :-------------------------------------------: |
| Имя input элемента           |      `name`      |  `string`  |   `range`    |                    `count`                    |
| Минимальное значение         |      `min`       |  `number`  |     `0`      |                    `-100`                     |
| Максимальное значение        |      `max`       |  `number`  |     `10`     |                    `50.55`                    |
| Вертикальное отображение     |    `vertical`    | `boolean`  |   `false`    |                    `true`                     |
| Размер шага                  |    `stepSize`    |  `number`  |    `0.1`     |                    `0.01`                     |
| Размер шага надписей         | `labelStepSize`  |  `number`  |     `5`      |                      `3`                      |
| Точность отображения надписи | `labelPrecision` |  `number`  |     `1`      |                      `0`                      |
| Значения надписей            |  `labelValues`   |  `string`  |     `-`      |                    `1,2,3`                    |
| Значение по умолчанию        |  `defaultValue`  |  `number`  |     `5`      |                    `0.05`                     |
| -                            | `labelRenderer`  | `function` |     `-`      | `(value, { isHandleTooltip }) => '$' + value` |
| -                            |     `value`      |  `number`  |     `-`      |                      `5`                      |
| -                            |    `onChange`    | `function` |     `-`      |         `(value) => setValue(value)`          |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/blob/master/src/Slider)

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
