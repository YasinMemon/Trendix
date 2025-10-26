# Admin Dashboard Documentation

## Overview

Professional e-commerce admin dashboard built with Next.js, Tailwind CSS, and Framer Motion.

## Features

### 📊 Dashboard Statistics

- **Total Products** - Track inventory count
- **Total Orders** - Monitor order volume
- **Total Users** - User base metrics
- **Total Revenue** - Financial performance
- Real-time percentage change indicators

### 📋 Recent Orders Table

- Order ID tracking
- Customer information
- Order status (Completed, Processing, Pending, Shipped)
- Total amount
- Quick actions (View, More options)

### 🎨 Design Features

- Clean, modern interface inspired by Shopify/Stripe
- Smooth animations with Framer Motion
- Responsive design (mobile, tablet, desktop)
- Collapsible sidebar on mobile (hamburger menu)
- Gradient accents and subtle shadows
- Hover effects on interactive elements

### 🧭 Navigation

- Dashboard
- Products (placeholder route)
- Orders (placeholder route)
- Users (placeholder route)
- Settings (placeholder route)

### 🔔 Additional Components

- Notifications dropdown with unread indicators
- Profile menu with logout option
- Search bar (desktop)
- Responsive header with admin info

## File Structure

```
app/
  admin/
    page.jsx                    # Main dashboard page

components/
  admin/
    Sidebar.jsx                 # Left navigation sidebar
    Header.jsx                  # Top header bar
    StatCard.jsx                # Reusable stat card component
    RecentOrdersTable.jsx       # Orders table component
```

## Components

### Sidebar.jsx

- Fixed position navigation
- Active route highlighting
- Smooth slide animations
- Support section at bottom
- Mobile-responsive with overlay

### Header.jsx

- Search functionality
- Notifications center
- Profile dropdown menu
- Mobile hamburger toggle
- Logout button

### StatCard.jsx

- Displays key metrics
- Animated hover effects
- Percentage change indicators
- Icon support with emoji
- Color-coded trends (green/red)

### RecentOrdersTable.jsx

- Responsive table layout
- Status badges with colors
- Customer avatars
- Pagination controls
- Staggered row animations

## Animations

### Framer Motion Effects

- **Page Load**: Staggered fade-in for stat cards
- **Hover**: Scale and lift effects on cards
- **Sidebar**: Slide-in/out transitions
- **Dropdowns**: Fade and slide animations
- **Table Rows**: Entrance animations with delay

## Customization

### Colors

The dashboard uses a blue-to-purple gradient theme. To customize:

- Primary: `from-blue-600 to-purple-600`
- Accents: `from-blue-50 to-purple-50`

### Status Colors

```javascript
const statusColors = {
  Completed: "bg-green-100 text-green-700",
  Processing: "bg-blue-100 text-blue-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Shipped: "bg-purple-100 text-purple-700",
  Cancelled: "bg-red-100 text-red-700",
};
```

## Dummy Data

The dashboard currently uses placeholder data:

- 1,234 Products
- 8,549 Orders
- 12,847 Users
- $124,590 Revenue
- 6 Recent orders with sample customer data

To integrate with real data, connect to your API in the `page.jsx` file.

## Routes to Implement

The following routes are referenced but need implementation:

- `/admin/products` - Product management
- `/admin/orders` - Order management
- `/admin/users` - User management
- `/admin/settings` - Settings page

## Dependencies

```json
{
  "framer-motion": "^10.18.0",
  "@heroicons/react": "latest",
  "next": "16.0.0",
  "tailwindcss": "^4"
}
```

## Usage

Navigate to `/admin` to view the dashboard:

```bash
npm run dev
```

Then open: `http://localhost:3000/admin`

## Responsive Breakpoints

- **Mobile**: < 768px (Hamburger menu)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px (Fixed sidebar)

## Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Semantic HTML structure

## Future Enhancements

- [ ] Connect to real API endpoints
- [ ] Add data visualization charts
- [ ] Implement search functionality
- [ ] Add filtering and sorting
- [ ] Export data functionality
- [ ] Dark mode support
- [ ] Real-time notifications
- [ ] Advanced analytics dashboard
