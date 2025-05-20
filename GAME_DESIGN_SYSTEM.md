# Game Design System

This document outlines the shared design system used across all games in this project. The system provides consistent styling, components, and design patterns to maintain a cohesive look and feel while reducing code duplication.

## Getting Started

1. Link the shared stylesheet in your game's HTML:
```html
<link rel="stylesheet" href="game-styles.css">
```

2. Use the provided CSS variables and classes in your game's HTML and CSS.

## Design Tokens

### Colors
- `--game-bg-primary`: Main background color (#222)
- `--game-bg-secondary`: Secondary background color (#333)
- `--game-text-primary`: Primary text color (#fff)
- `--game-text-secondary`: Secondary text color (#ccc)
- `--game-accent`: Accent color (#0066cc)
- `--game-success`: Success state color (#4CAF50)
- `--game-danger`: Error/danger state color (#f44336)
- `--game-warning`: Warning state color (#ff9800)

### Spacing
- `--game-spacing-xs`: 4px
- `--game-spacing-sm`: 8px
- `--game-spacing-md`: 16px
- `--game-spacing-lg`: 24px
- `--game-spacing-xl`: 32px

### Typography
- `--game-font-primary`: Primary font (Arial)
- `--game-font-mono`: Monospace font (Courier New)
- `--game-font-size-sm`: 12px
- `--game-font-size-md`: 16px
- `--game-font-size-lg`: 24px
- `--game-font-size-xl`: 32px

### Border Radius
- `--game-border-radius-sm`: 4px
- `--game-border-radius-md`: 8px
- `--game-border-radius-lg`: 12px

### Shadows
- `--game-shadow-sm`: Light shadow
- `--game-shadow-md`: Medium shadow
- `--game-shadow-lg`: Large shadow

## Components

### Game Container
```html
<div class="game-container">
    <!-- Your game content -->
</div>
```

### Game Area
```html
<div class="game-area">
    <!-- Your game's main play area -->
</div>
```

### Game Controls
```html
<div class="game-controls">
    <button class="game-button">Button Text</button>
</div>
```

### Score Display
```html
<div class="score-display">
    Score: <span id="score">0</span>
</div>
```

### Game Over Screen
```html
<div class="game-over-screen">
    <h2 class="game-over-title">Game Over</h2>
    <button class="game-button">Play Again</button>
</div>
```

### Pause Screen
```html
<div class="pause-screen">
    <h2 class="game-over-title">PAUSED</h2>
    <p>Click ⏸️ or press P to resume</p>
</div>
```

## Utility Classes

- `.text-center`: Centers text
- `.hidden`: Hides an element
- `.visible`: Shows an element
- `.fade-in`: Applies a fade-in animation

## Responsive Design

The design system includes responsive design considerations. Use the provided media queries and responsive classes to ensure your game works well on different screen sizes.

## Customization

While the design system provides a consistent foundation, you can customize specific aspects of your game by:

1. Overriding CSS variables in your game-specific styles
2. Adding game-specific classes that extend the base components
3. Creating new components that follow the same design patterns

## Example Usage

See `tetris.html` for an example of how to implement the design system in a game.

## Best Practices

1. Use the provided CSS variables instead of hardcoding values
2. Extend existing components rather than creating new ones when possible
3. Keep game-specific styles minimal and focused on unique game elements
4. Use the utility classes for common styling needs
5. Follow the responsive design patterns for mobile compatibility 