# ISCU Tools Website Framework

A clean, professional website framework for Illinois State Credit Union tools, calculators, workflows, and decision analysis resources.

## Overview

This framework provides a solid foundation for building and organizing various analytical tools and resources. It features a modern, responsive design with easy navigation and a professional credit union theme.

## Project Structure

```
Website-for-tools/
├── index.html              # Main homepage
├── css/
│   ├── styles.css          # Main stylesheet
│   └── tool-page.css       # Tool page specific styles
├── js/
│   └── main.js             # Main JavaScript functionality
├── tools/
│   ├── tool-template.html  # Template for creating new tools
│   ├── calculators/        # Financial and analytical calculators
│   ├── workflows/          # Process workflows and checklists
│   ├── analysis/           # Decision analysis models
│   └── resources/          # Reference materials and links
└── assets/
    └── images/             # Images and icons
```

## Features

### Current Implementation

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Professional Theme**: Credit union-appropriate color scheme and styling
- **Smooth Navigation**: Sticky header with smooth scrolling
- **Organized Structure**: Four main sections for different tool types
- **Mobile Menu**: Hamburger menu for mobile devices
- **Utility Functions**: Pre-built JavaScript helpers for common tasks

### Main Sections

1. **Calculators**: Financial and analytical calculators
2. **Workflows**: Standardized processes and procedures
3. **Decision Analysis**: Data-driven decision-making tools
4. **Resources**: Reference materials and documentation

## Adding New Tools

### Using the Template

1. Copy `tools/tool-template.html` to your desired location:
   ```bash
   cp tools/tool-template.html tools/calculators/loan-calculator.html
   ```

2. Edit the new file:
   - Update the `<title>` tag
   - Modify the tool name and description
   - Customize input fields
   - Add your calculation logic

3. Update `index.html` to link to your new tool:
   ```html
   <div class="tool-card">
       <div class="tool-icon">📊</div>
       <h3>Loan Calculator</h3>
       <p>Calculate monthly payments and total interest</p>
       <a href="tools/calculators/loan-calculator.html" class="btn-primary">Open Tool</a>
   </div>
   ```

### Tool Page Structure

Each tool page includes:
- **Header**: Navigation back to main site
- **Input Section**: Form fields for user input
- **Output Section**: Display area for results
- **Info Section**: Usage instructions and help

## Styling Guide

### Color Scheme

The framework uses CSS variables for easy customization:

```css
--primary-color: #0066b3;      /* Main brand color */
--primary-dark: #004a82;       /* Darker variant */
--secondary-color: #00a651;    /* Accent color */
--text-primary: #2c3e50;       /* Main text */
--text-secondary: #5a6c7d;     /* Secondary text */
```

### Button Styles

- `.btn-primary`: Main action buttons (blue)
- `.btn-secondary`: Secondary actions (outlined)

### Alert Boxes

Available alert types:
- `.alert-info`: Informational messages
- `.alert-success`: Success messages
- `.alert-warning`: Warning messages
- `.alert-error`: Error messages

## JavaScript Utilities

The framework includes helpful utilities in `window.ISCUTools`:

### Validation

```javascript
ISCUTools.validateInput(value, 'number');      // Validate numeric input
ISCUTools.validateInput(value, 'percentage');  // Validate percentage
ISCUTools.validateInput(value, 'currency');    // Validate currency
```

### Formatting

```javascript
ISCUTools.formatCurrency(1234.56);    // Returns "$1,234.56"
ISCUTools.formatPercentage(5.5, 2);   // Returns "5.50%"
```

### Notifications

```javascript
ISCUTools.notify('Calculation complete!', 'success');
```

## Customization

### Changing Colors

Edit `css/styles.css` and modify the CSS variables in the `:root` selector:

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
}
```

### Adding Sections

1. Add a new section to `index.html`:
   ```html
   <section id="new-section" class="tool-section">
       <div class="section-header">
           <h2>Section Name</h2>
           <p>Description</p>
       </div>
       <div class="tool-grid">
           <!-- Tool cards here -->
       </div>
   </section>
   ```

2. Add navigation link:
   ```html
   <li><a href="#new-section">Section Name</a></li>
   ```

### Updating Logo/Branding

To add a logo:
1. Place your logo image in `assets/images/`
2. Update the header in `index.html`:
   ```html
   <div class="logo">
       <img src="assets/images/logo.png" alt="ISCU Logo">
       <h1>ISCU Tools</h1>
   </div>
   ```

## Best Practices

### Tool Development

1. **Keep it Simple**: Focus on core functionality
2. **Validate Input**: Always validate user input before calculations
3. **Clear Output**: Display results in an easy-to-understand format
4. **Error Handling**: Provide helpful error messages
5. **Mobile-Friendly**: Test on mobile devices

### Code Organization

1. **Separate Concerns**: Keep HTML, CSS, and JavaScript in separate files
2. **Comment Your Code**: Explain complex calculations
3. **Use Utilities**: Leverage the built-in utility functions
4. **Consistent Naming**: Use clear, descriptive variable names

## Browser Support

This framework supports:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Local Testing

Simply open `index.html` in a web browser. For tools requiring server features:

```bash
# Python 3
python -m http.server 8000

# Node.js (with http-server)
npx http-server
```

Then visit `http://localhost:8000`

### Production Deployment

This is a static website and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any web server

## Future Enhancements

Recommended additions:
- [ ] User authentication for team access
- [ ] Save/export functionality for calculations
- [ ] Print-friendly layouts
- [ ] Data visualization library integration
- [ ] Form validation library
- [ ] Toast notification system
- [ ] Dark mode toggle
- [ ] Search functionality
- [ ] Favorites/bookmarks system
- [ ] Analytics integration

## Support

For questions or issues with this framework, contact your IT department or the developer who maintains this repository.

## License

Internal use only - Illinois State Credit Union

---

**Version**: 1.0.0
**Last Updated**: 2025
**Maintained by**: ISCU Team
