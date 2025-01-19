# Mines - Modern Minesweeper Game

A modern, web-based implementation of the classic Minesweeper game with a clean and responsive user interface.

**🎮 [Play Mines Online](https://mines-game.netlify.app/)**

## About the Game

Mines is a browser-based version of the classic Minesweeper game where players must navigate through a grid of cells while avoiding hidden mines. The game features:

- Clean, modern UI with smooth animations
- Responsive design that works on all devices
- Customizable number of mines
- Interactive grid with hover effects
- Dialog-based game interrupts and notifications

## Tech Stack

### Frontend
- **HTML5** - Semantic markup and modern web features
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework for styling
  - Responsive design utilities
  - Hover and scale animations
  - Flexbox and grid layouts

### Development Tools
- **Node.js** - JavaScript runtime environment
- **npm** - Package manager

### Project Structure
```
mines/
├── dist/              # Distribution files
│   ├── index.html    # Main game HTML
│   ├── output.css    # Compiled CSS
│   └── images/       # Game assets
├── src/
│   └── input.css     # TailwindCSS source file
├── tailwind.config.js # TailwindCSS configuration
└── package.json      # Project dependencies
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run TailwindCSS build process:
   ```bash
   npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
   ```
4. Open `dist/index.html` in your browser to play the game



## Author
Nikhil Nandanwar
