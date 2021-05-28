## 📖 Detailed overview

Многоуровневое меню, в котором вложенные страницы объединяются в именованную группу.

## 🎬 Live Demo

[Live demo link](https://quarkly-catalog.netlify.app/mobilesidepanel/)

## ⚙️ Usage

Добавьте компонент на страницу и измените значение свойство `Максимальная вложенность` при необходимости.

### Изменение корневой страницы

Cвойство `ID корневой страницы` позволяет указать страницу, для которой будет формироваться меню.
ID текущей страницы можно скопировать из адресной строки.
Например, для URL-адреса `https://quarkly.io/project/12345/page/67890`, ID страницы указан в конце и равен `67890`.

## 🧩 Components and Props

| Названия свойств             |   Type   |    Default     |   Example   |
| :--------------------------- | :------: | :------------: | :---------: |
| Максимальная вложенность     | `number` |      `10`      |     `5`     |
| ID корневой страницы         | `string` |     `root`     |   `67890`   |
| Состояние групп по умолчанию |  `enum`  | `expandActive` | `expandAll` |

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

Licensed under the [MIT License](./LICENSE).
