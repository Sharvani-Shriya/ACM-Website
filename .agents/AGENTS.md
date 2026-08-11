# Workspace Guidelines

## Scope Restrictions
- **Mobile View Focus**: All layout, styling, structural, and content modifications must strictly target **Mobile View** (`@media (max-width: 768px)` or mobile-specific containers).
- **Universal Mobile Compatibility**: Mobile styles must be globally applicable across ALL phone models and screen sizes (from small 320px screens to 768px devices). Use fluid responsive typography (`clamp()`), percentage-based widths, and flexible flexbox/grid containers rather than fixed pixel widths or device-specific hacks.
- **Desktop View Freeze**: Do not modify desktop view styles, desktop layouts, or desktop component behaviors unless explicitly requested by the user.
