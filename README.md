# Background Color Change

A simple web project enabling dynamic background color alteration using a native browser color picker. The selected color is displayed in hexadecimal format and persisted locally across sessions.

## Technologies

- HTML5
- CSS3
- JavaScript

## Features

- Dynamic background color adjustment via color input.
- Real-time display of the selected color's hexadecimal code.
- Local storage persistence of the chosen color.
- Automatic restoration of the saved color upon page load.
- Adaptive color picker border for enhanced visibility.

## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/background-color-change.git
   ```

2. Navigate to the project directory:

   ```bash
   cd background-color-change
   ```

3. Open `index.html` in your web browser.

## Technical Details

- The `input` event on the color picker element captures the selected color and updates the page background.
- The hexadecimal color value is displayed in a `<span>` element for immediate visual feedback.
- Color preferences are saved to `localStorage` to ensure persistence across browser sessions.
- Upon page load, the script automatically retrieves and applies any previously saved color.
- The color picker's border dynamically changes to white when the background color is black, ensuring optimal contrast.

## License

MIT License

## Author

Lucas Silva Porto - lucassporto.contanto@gmail.com