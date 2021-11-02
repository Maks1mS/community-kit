## 📖 Detailed overview

This component helps you add a multi-line text input field to a form.

## ⚙️ Usage

1.  Add the Form component to the page
2.  Add the Textarea component to the Form component
3.  Specify the `name` and other properties if necessary
4.  See how it works in the preview mode

## 🧩 Components and Props

### In the interface

| Prop Name     |            Default            |    Example     |
| :------------ | :---------------------------: | :------------: |
| Name          |              `-`              |     `name`     |
| Placeholder   |              `-`              |  `Your name`   |
| Default value |              `-`              |     `John`     |
| Resize        | `Horizontally and vertically` | `Don't change` |
| AutoFocus     |          `Unchecked`          |   `Checked`    |
| Required      |          `Unchecked`          |   `Checked`    |
| Disabled      |          `Unchecked`          |   `Checked`    |
| Max length    |              `-`              |      `10`      |

### In the code (for developers)

| Prop Name     | Name in the code |   Type    | Default |   Example   |
| :------------ | :--------------: | :-------: | :-----: | :---------: |
| Name          |     `title`      | `string`  |   `-`   |   `name`    |
| Placeholder   |  `placeholder`   | `string`  |   `-`   | `Your name` |
| Default value |  `defaultValue`  | `string`  |   `-`   |   `John`    |
| Resize        |     `resize`     |  `enum`   | `both`  |   `none`    |
| AutoFocus     |   `autoFocus`    | `boolean` | `false` |   `true`    |
| Required      |    `required`    | `boolean` | `false` |   `true`    |
| Disabled      |    `disabled`    | `boolean` | `false` |   `true`    |
| Max length    |   `maxlength`    | `number`  |   `-`   |    `10`     |

#### The 'Resize' property values

| User-friendly name          | Name in the code |
| :-------------------------- | :--------------: |
| Horizontally and vertically |      `both`      |
| Only horizontally           |   `horizontal`   |
| Only vertically             |    `vertical`    |
| Don't change                |      `none`      |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/blob/master/src/Textarea/Textarea.js)

## 🗓 Changelog

-   21/04/2021 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we'd **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
