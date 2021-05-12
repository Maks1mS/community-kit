## 📖 Detailed overview

This component is a counter that increases or decreases to a certain value.

## 🎬 Live Demo

[Live demo link](https://quarkly-catalog.netlify.app/counter/)

## ⚙️ Usage

Add the component to the page and see how it works in the preview mode.

### Start and end values

The values in `Start value` and `End value` can be set and can be either positive or negative. It's important that the start value is smaller than the end value. If a countdown is required, select `Decrease` in the `Count direction` property, then the start value becomes the end value and the end value becomes the start value.

### Counter start

The counter will start automatically when it becomes visible in the window.

## 🧩 Components and Props

| Prop name         |   Type   | Default  | Example |
| :---------------- | :------: | :------: | :-----: |
| Start value       | `number` |   `0`    |  `-43`  |
| End value         | `number` |  `100`   |  `300`  |
| Count direction   |  `enum`  | `normal` | `true`  |
| Count duration    | `number` |  `2000`  | `3000`  |
| Text after value  | `string` |   `-`    |   `%`   |
| Text before value | `string` |   `-`    |   `$`   |

## 🗓 Changelog

-   21/04/2021 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](./LICENSE).
