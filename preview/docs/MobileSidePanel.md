## 📖 Detailed overview

This component is a container for hiding the menu or any other content in the mobile version of the site. To show content, click the menu button.

## ⚙️ Usage

1.  Add the component to the page
2.  Add any other component inside it
3.  Select breakpoint to switch to the mobile view
4.  Check how it works in the preview mode on the chosen breakpoint

### Panel position

The `Panel position in mobile view` prop allows you to customize the panel position relative to the viewport or menu button. You can choose one of the following values:

-   full - Fullscreen;
-   left - To the left of the screen;
-   right - To the right of the screen;
-   near - To the left of the button;
-   nearRight - To the right of the button.

## 🧩 Components and Props

### In the interface

| Prop name                        | Default |  Example  |
| :------------------------------- | :-----: | :-------: |
| Switch mobile view on breakpoint |  `md`   |   `sm`    |
| Panel position in mobile view    | `near`  |  `left`   |
| Smooth animation                 | `ease`  | `ease-in` |
| Hide/show animation duration     | `0.3s`  |  `0.5s`   |

### In the code (for developers)

| Prop name                        | Name in the code |   Type   | Default |  Example  |
| :------------------------------- | :--------------: | :------: | :-----: | :-------: |
| Switch mobile view on breakpoint |   `breakpoint`   | `string` |  `md`   |   `sm`    |
| Panel position in mobile view    |  `menuPosition`  |  `enum`  | `near`  |  `left`   |
| Smooth animation                 |  `animDuration`  | `string` | `ease`  | `ease-in` |
| Hide/show animation duration     |  `animFunction`  | `string` | `0.3s`  |  `0.5s`   |

#### The 'Panel position in mobile view' property values

| User-friendly name         | Name in the code |
| :------------------------- | :--------------: |
| Fullscreen                 |      `full`      |
| To the left of the screen  |      `left`      |
| To the right of the screen |     `right`      |
| To the left of the button  |      `near`      |
| To the right of the button |   `nearRight`    |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/tree/master/src/MobileSidePanel)

## 🗓 Changelog

-   21/04/2021 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you can’t stand missing. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/SuF9vCMJGW)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
