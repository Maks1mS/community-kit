## 📖 Detailed overview

This is a calendar component for selecting a date range.

If you need a text field to select a date range (for a form), use `DateRangeInput`.

## 🧩 Components and Props

Use `onChange` and `value` to control the component.

### Date formats

In the `Minimum date`, `Maximum date`, and `Dates` properties, you can specify the date in the following formats:

-   05.06.2021
-   05/06/2021
-   05-06-2021
-   2021-06-05

In the `Initial month`, you can set the date in the following formats:

-   06.2021
-   06/2021
-   06-2021
-   2021.06
-   2021/06
-   2021-06

### In the interface

| Prop names             |    Default     |   Example    |
| :--------------------- | :------------: | :----------: |
| Locale                 | `English (US)` |  `Русский`   |
| Minimum date           |  `1900-01-01`  | `05.06.2021` |
| Maximum date           |  `2100-01-01`  | `2025-01-01` |
| Initial month          |      `-`       |  `2021-09`   |
| Display only one month |  `Unchecked`   |  `Checked`   |

### In the code (for developers)

| Prop names             | Name in the code  |    Type    |   Default    |                 Example                  |
| :--------------------- | :---------------: | :--------: | :----------: | :--------------------------------------: |
| -                      |      `value`      |   `Date`   |     `-`      | `[new Date(2021, 0), new Date(2021, 1)]` |
| -                      |    `onChange`     | `function` |     `-`      |                `() => {}`                |
| Locale                 |     `locale`      |   `enum`   |    `enUS`    |                   `ru`                   |
| Minimum date           |     `minDate`     |  `string`  | `1900-01-01` |                `2021-03`                 |
| Maximum date           |     `maxDate`     |  `string`  | `2100-01-01` |               `2025-01-01`               |
| Initial month          |  `initialMonth`   |  `string`  |     `-`      |                `2021-09`                 |
| Display only one month | `singleMonthOnly` | `boolean`  |   `false`    |                  `true`                  |

#### The 'Locale' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| English (US)       |      `enUS`      |
| Русский            |       `ru`       |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/tree/master/src/DateRangePicker)

## 🗓 Changelog

-   29/09/2021 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re developing all the time, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we'd **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
