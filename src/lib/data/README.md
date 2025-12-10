# Centralized Data Files

All static data, assets, and content are now centralized in two files:

## Files

### `assets.ts`

- **Purpose**: Centralized import and export of all image assets
- **Exports**: `assets` object containing:
  - `hero`: Hero section images
  - `gallery`: Gallery images

### `content.ts`

- **Purpose**: Centralized content data and configurations
- **Exports**:
  - `assets`: Re-exported from `assets.ts` for convenience
  - `galleryImages`: Array of gallery image data
  - `activities`: Array of activity data
  - `heroStats`: Hero section statistics
  - `contactInfo`: Contact information
  - `navLinks`: Navigation links

## Usage

Import from `$lib/data/content`:

```typescript
import { assets, galleryImages, activities, heroStats, contactInfo, navLinks } from '$lib/data/content';
```

Or import assets directly:

```typescript
import { assets } from '$lib/data/assets';
```

## Benefits

1. **Single source of truth**: All static data in one place
2. **Easy updates**: Change content in one file, updates everywhere
3. **Type safety**: TypeScript ensures consistency
4. **Maintainability**: Easier to manage and update content
5. **Reusability**: Share data across multiple components

## Adding New Assets

1. Import the asset in `assets.ts`
2. Add it to the `assets` object
3. Use it in `content.ts` or import directly in components

## Adding New Content

1. Add the data structure to `content.ts`
2. Export it
3. Import where needed
