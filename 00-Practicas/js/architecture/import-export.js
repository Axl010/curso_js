// Sistema de módulos moderno export/import

// "índice" de módulos
export { default as Button } from './Button.js';
export { default as Input } from './Input.js';
export { default as Card } from './Card.js';

import { Button, Input, Card } from './architecture/import-export.js';