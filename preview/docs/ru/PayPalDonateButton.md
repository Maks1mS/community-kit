## 📖 Подробный обзор

Простая кнопка для сбора пожертвований на счёт PayPal.

## ⚙️ Использование

1.  Добавьте компонент на страницу
2.  Укажите `Ваш PayPal ID или адрес эл. почты`
3.  Добавьте `ID отслеживания` и `Стоимость товара или услуги`
4.  Проверьте работу на опубликованном сайте

**Внимание:** отправка формы и переход на сайт PayPal доступны только на опубликованном сайте.

По умолчанию, `Ссылка на изображение кнопки` имеет значение `https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif`.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств                          |          По умолчанию           |    Пример    |
| :---------------------------------------- | :-----------------------------: | :----------: |
| Открывать в новом окне                    |            `Отмечен`            | `Не отмечен` |
| Ссылка на изображение кнопки              | `https://www.paypalobjects.com` |     `-`      |
| Ваш PayPal ID или адрес электронной почты |               `-`               |     `-`      |
| Описание товара                           |               `-`               |     `-`      |
| ID для отслеживания                       |               `-`               |     `-`      |
| Цена или количество продукта / услуги     |               `-`               |     `-`      |
| Код валюты                                |              `USD`              |    `RUB`     |

### В коде (для разработчиков)

| Названия свойств                          | Название в коде |    Тип    |          По умолчанию           | Пример  |
| :---------------------------------------- | :-------------: | :-------: | :-----------------------------: | :-----: |
| Открывать в новом окне                    |    `newTab`     | `boolean` |             `true`              | `false` |
| Ссылка на изображение кнопки              |  `buttonImage`  |  `image`  | `https://www.paypalobjects.com` |   `-`   |
| Ваш PayPal ID или адрес электронной почты |   `business`    | `string`  |               `-`               |   `-`   |
| Описание товара                           |   `itemName`    | `string`  |               `-`               |   `-`   |
| ID для отслеживания                       |  `itemNumber`   | `string`  |               `-`               |   `-`   |
| Цена или количество продукта / услуги     |    `amount`     | `string`  |               `-`               |   `-`   |
| Код валюты                                | `currencyCode`  | `string`  |              `USD`              |  `RUB`  |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/tree/master/src/PayPalDonateButton)

## 🗓 Changelog

-   16/06/2021 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/SuF9vCMJGW)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](./LICENSE).
