# Quick Start Guide - Admin Dashboard

## 🚀 Getting Started

### 1. Start the Development Server

```bash
npm run dev
```

### 2. Access the Dashboard

Open your browser and navigate to:

```
http://localhost:3000/admin
```

## 📱 Key Features to Test

### Desktop View (> 1024px)

✅ Fixed sidebar on the left
✅ Full header with search bar
✅ Four stat cards in a grid
✅ Recent orders table
✅ Hover effects on all interactive elements

### Tablet View (768px - 1024px)

✅ Sidebar remains visible
✅ Responsive grid layout
✅ Search bar in header

### Mobile View (< 768px)

✅ Hamburger menu to toggle sidebar
✅ Stacked stat cards
✅ Scrollable orders table
✅ Overlay when sidebar is open

## 🎯 Interactive Elements

### Try These:

1. **Click the hamburger icon** (mobile) - Opens/closes sidebar
2. **Hover over stat cards** - See lift animation
3. **Click notification bell** - View notifications dropdown
4. **Click profile avatar** - Open profile menu
5. **Hover over sidebar items** - See highlight effect
6. **Click on table rows** - See hover effect

## 🎨 Customization Tips

### Change Theme Colors

Edit the gradient classes in components:

```jsx
// From blue-purple to your colors
from-blue-600 to-purple-600
```

### Update Dummy Data

In `app/admin/page.jsx`, modify:

```jsx
const stats = [
  { title: 'Total Products', value: '1,234', ... }
];

const recentOrders = [
  { id: '#ORD-001', customer: 'John Doe', ... }
];
```

### Add New Sidebar Links

In `components/admin/Sidebar.jsx`:

```jsx
const navigation = [
  { name: "Dashboard", href: "/admin", icon: HomeIcon },
  // Add your new links here
];
```

## 📊 Next Steps

1. **Connect to API**: Replace dummy data with real API calls
2. **Add Authentication**: Protect the admin routes
3. **Create Sub-pages**: Implement Products, Orders, Users pages
4. **Add Charts**: Install recharts or chart.js for visualizations
5. **Implement Search**: Add search functionality to header

## 🐛 Troubleshooting

### Sidebar Not Showing on Mobile?

- Check that hamburger icon is visible
- Click it to toggle sidebar open
- Overlay should appear when sidebar is open

### Animations Not Working?

- Ensure `framer-motion` is installed
- Check browser console for errors

### Icons Missing?

- Verify `@heroicons/react` is installed
- Run `npm install @heroicons/react`

## 📦 Required Dependencies

Already installed:

- ✅ next
- ✅ react
- ✅ tailwindcss
- ✅ framer-motion
- ✅ @heroicons/react

## 🎬 Demo Credentials (Future)

When you add authentication:

```
Email: admin@trendix.com
Password: (your secure password)
```

---

**Need Help?** Check the full documentation in `ADMIN_DASHBOARD.md`
