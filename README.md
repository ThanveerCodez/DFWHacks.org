# DFWhacks - Dallas-Fort Worth Hackathon Website

A modern, responsive website for the DFWhacks hackathon event. Built with HTML, CSS (Tailwind), and JavaScript.

## Features

- 🎨 **Modern Design**: Clean, professional design with purple gradient theme
- 📱 **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Interactive Elements**: Smooth scrolling, animations, and hover effects
- 🎯 **Event Information**: Complete event details including schedule, prizes, and sponsors
- 📧 **Contact Integration**: Social media links and contact information
- 🚀 **Performance Optimized**: Fast loading with CDN resources

## Sections

1. **Hero Section**: Eye-catching landing with event highlights
2. **About**: Information about the hackathon and what to expect
3. **Schedule**: Detailed 3-day event timeline
4. **Prizes**: Prize breakdown and special categories
5. **Sponsors**: Sponsor showcase and sponsorship opportunities
6. **Registration**: Call-to-action for event registration
7. **Footer**: Links, social media, and additional resources

## Customization Guide

### Colors
The website uses a purple theme. To change colors, update these classes in `index.html`:
- Primary: `purple-600`, `purple-700`
- Secondary: `gray-50`, `gray-100`
- Gradients: `.gradient-bg` and `.hero-gradient` in the `<style>` section

### Content Updates

#### Event Details
- **Event Name**: Update "DFWhacks" throughout the HTML
- **Dates**: Modify the schedule section with your actual dates
- **Location**: Add venue information
- **Prizes**: Update prize amounts and categories
- **Sponsors**: Replace placeholder sponsor names with actual sponsors

#### Registration
- **Pricing**: Update registration fees in the registration section
- **Deadlines**: Modify early bird and regular registration dates
- **Student Discount**: Adjust student pricing information

### Adding Real Sponsors
Replace the placeholder sponsor divs in the sponsors section:

```html
<div class="bg-white p-6 rounded-lg shadow-md text-center">
    <img src="path/to/sponsor-logo.png" alt="Sponsor Name" class="h-12 mx-auto">
    <div class="text-lg font-semibold mt-2">Sponsor Name</div>
</div>
```

### Social Media Links
Update the social media links in the footer section with your actual profiles:
- Twitter/X
- Discord
- GitHub
- LinkedIn

## File Structure

```
dfwhacks-website/
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **JavaScript**: Interactive features and animations
- **Font Awesome**: Icons (via CDN)
- **Google Fonts**: Inter font family

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Deployment

### Option 1: GitHub Pages
1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://username.github.io/repository-name`

### Option 2: Netlify
1. Drag and drop the folder to [Netlify](https://netlify.com)
2. Your site will be deployed instantly
3. Custom domain can be added in settings

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

## Local Development

1. Clone or download the files
2. Open `index.html` in your browser
3. For live reloading, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

## Customization Tips

### Adding a Countdown Timer
Add this to the hero section for event countdown:

```html
<div class="countdown-timer text-center mt-8">
    <div class="grid grid-cols-4 gap-4 max-w-md mx-auto">
        <div class="bg-white bg-opacity-20 rounded-lg p-4">
            <div class="text-3xl font-bold" id="days">00</div>
            <div class="text-sm">Days</div>
        </div>
        <!-- Repeat for hours, minutes, seconds -->
    </div>
</div>
```

### Adding a Registration Form
Create a modal or separate page for registration:

```html
<div class="fixed inset-0 bg-black bg-opacity-50 hidden" id="registration-modal">
    <div class="bg-white rounded-lg p-8 max-w-md mx-auto mt-20">
        <h3 class="text-2xl font-bold mb-4">Register for DFWhacks</h3>
        <form>
            <input type="text" placeholder="Full Name" class="w-full p-3 border rounded mb-4">
            <input type="email" placeholder="Email" class="w-full p-3 border rounded mb-4">
            <button type="submit" class="w-full bg-purple-600 text-white p-3 rounded">Register</button>
        </form>
    </div>
</div>
```

### Adding Analytics
Add Google Analytics or other tracking:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Support

For questions or issues:
1. Check the browser console for JavaScript errors
2. Ensure all CDN links are accessible
3. Test on different devices and browsers
4. Validate HTML using W3C validator

## License

This project is open source and available under the MIT License.

---

**Good luck with your hackathon! 🚀**
