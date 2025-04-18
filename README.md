# Password Eyes Icon Widget

This module adds an eye icon to toggle visibility for password fields in both backend forms and public-facing pages (login, signup, reset password).

## Features

### 1. Backend Password Widget

Use the `password_eyes_icon` widget in your form views to add a visibility toggle to password fields:

```xml
<field name="password" widget="password_eyes_icon" />
```

### 2. Login Page Password Toggle

Automatically adds a visibility toggle to the password field on the standard Odoo login page.

### 3. Additional Authentication Pages

When the `auth_signup` module is installed, you can uncomment the templates in `web_templates.xml` to add password toggles to:

- Signup page
- Reset password page

## Technical Information

### Structure

- **Backend Component**: Uses OWL component architecture
- **Frontend Toggle**: Uses vanilla JavaScript for better performance
- **Styling**: Common SCSS for consistent appearance

### Reusable Password Toggle

The module provides a reusable JavaScript function that can be used to add password toggle functionality to any password field:

```javascript
// In your custom JS
setupPasswordToggle("#your_password_field", "#your_toggle_icon");
```

### Extending

To add password toggle to other custom forms:

1. Add the password field with appropriate markup:

```xml
<div class="form-group field-password position-relative">
    <input type="password" id="your_password" name="your_password" />
    <span class="fa fa-eye-slash password-toggle" id="your_password_toggle"/>
</div>
```

2. Initialize the toggle in JavaScript:

```javascript
document.addEventListener("DOMContentLoaded", function () {
  setupPasswordToggle("#your_password", "#your_password_toggle");
});
```

## Installation

Install like any other Odoo module:

1. Place the module folder in your addons directory
2. Update the apps list
3. Install the "Password Eyes Icon Widget" module

## Dependencies

- `web` module (required)
- `auth_signup` module (optional, for signup and reset password pages)

## Overview

The Password Eyes Icon module enhances the user experience in Odoo 18 by adding a visibility toggle (eye icon) to password fields. This allows users to easily show or hide password content with a single click, improving usability while maintaining security.

## Screenshots

[Include screenshots here if available]

## Customization

The appearance of the eye icon can be customized by modifying the SCSS files:

- `static/src/scss/password_eyes_icon.scss` (for backend)

## Troubleshooting

If the icon is not appearing:

- Clear your browser cache
- Verify the module is properly installed
- Check browser console for JavaScript errors

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the issues page if you want to contribute.
