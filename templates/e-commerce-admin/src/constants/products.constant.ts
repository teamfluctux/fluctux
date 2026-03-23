import type { CellSelectorValuesType } from "@/components/ag-grid";

import type {
  ProductManageDataType,
  ProductsOverViewData,
  StatusLevelType,
} from "@/types";
import type { PopoverMenuDataType } from "@fluctux/ui";
import { FileIcon, SlidersHorizontal, UploadIcon } from "lucide-react";

import {
  ShoppingBagIcon,
  MonitorIcon,
  ShirtIcon,
  UtensilsIcon,
  DumbbellIcon,
  HomeIcon,
  CarIcon,
  BookIcon,
  HeartIcon,
  GlobeIcon,
} from "lucide-react";

export const PRODUCT_PAGE_MENU_OPTIONS = {
  product: {
    data: [
      {
        label: "Product Options",
        value: "product-options",
        icon: SlidersHorizontal,
        isAsQueryParam: true,
      },
    ],
  },
  export: {
    label: "Export",
    data: [
      { label: "Export CSV", value: "export-csv", icon: UploadIcon },
      { label: "Export PDF", value: "export-pdf", icon: FileIcon },
    ],
  },
} as const satisfies PopoverMenuDataType;

export type ProductMenuOptionsValuesType = NonNullable<
  (typeof PRODUCT_PAGE_MENU_OPTIONS)[keyof typeof PRODUCT_PAGE_MENU_OPTIONS]["data"]
>[number]["value"];

export const PRODUCTS_OVERVIEW_DATA: ProductsOverViewData[] = [
  { label: "Total Products", value: 1284 },
  { label: "In Stock", value: 978 },
  { label: "Out of Stock", value: 306 },
  { label: "Low stock", value: 306 },
];

export const DUMMY_STATUS_OPTIONS: CellSelectorValuesType<StatusLevelType>[] = [
  { value: "PUBLISHED", label: "Published", level: "SAFE" },
  { value: "DRAFT", label: "Draft", level: "WARNING" },
  { value: "TRASHED", label: "Trashed", level: "DESTRUCTIVE" },
];

export const DUMMY_STATUS_LEVEL: Record<StatusLevelType, string> = {
  SAFE: "bg-surface-green-bg! rounded-sm px-3 py-1 inset-ring-1 group-hover:bg-surface-green-bg-active! inset-ring-surface-green-border hover:inset-ring-1 text-rdx-green-fg hover:text-rdx-green-fg!",
  WARNING:
    "bg-surface-yellow-bg! rounded-sm px-3 py-1 inset-ring-1 group-hover:bg-surface-yellow-bg-active! inset-ring-surface-yellow-border hover:inset-ring-1 text-rdx-yellow-fg hover:text-rdx-yellow-fg!",
  DESTRUCTIVE:
    "bg-surface-red-bg! rounded-sm px-3 py-1 inset-ring-1 group-hover:bg-surface-red-bg-active! inset-ring-surface-red-border hover:inset-ring-1 text-rdx-red-fg hover:text-rdx-red-fg!",
};

export const DUMMY_ROW_DATA: ProductManageDataType[] = [
  {
    name: "Wireless Noise-Cancelling Headphones",
    price: 129.99,
    categories: [
      {
        label: "Electronics",
        value: "electronics",
        icon: MonitorIcon,
        slug: "electronics",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "admin",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Slim Fit Denim Jacket",
    price: 59.95,
    categories: [
      {
        label: "Clothing",
        value: "clothing",
        icon: ShirtIcon,
        slug: "clothing",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "john_doe",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    categories: [
      {
        label: "Home",
        value: "home",
        icon: HomeIcon,
        slug: "home",
        isPrimary: true,
      },
      {
        label: "Sports",
        value: "sports",
        icon: DumbbellIcon,
        slug: "sports",
      },
    ],
    created_by: "admin",
    status: { value: "DRAFT", label: "Draft", level: "WARNING" },
  },
  {
    name: "Mechanical Gaming Keyboard",
    price: 89.0,
    categories: [
      {
        label: "Electronics",
        value: "electronics",
        icon: MonitorIcon,
        slug: "electronics",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "jane_smith",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Yoga Mat Anti-Slip",
    price: 34.5,
    categories: [
      {
        label: "Sports",
        value: "sports",
        icon: DumbbellIcon,
        slug: "sports",
        isPrimary: true,
      },
      { label: "Health", value: "health", icon: HeartIcon, slug: "health" },
    ],
    created_by: "admin",
    status: { value: "DRAFT", label: "Draft", level: "WARNING" },
  },
  {
    name: "Ceramic Coffee Mug Set",
    price: 19.99,
    categories: [
      {
        label: "Home",
        value: "home",
        icon: HomeIcon,
        slug: "home",
        isPrimary: true,
      },
      { label: "Food", value: "food", icon: UtensilsIcon, slug: "food" },
    ],
    created_by: "john_doe",
    status: { value: "TRASHED", label: "Trashed", level: "DESTRUCTIVE" },
  },
  {
    name: "Portable Bluetooth Speaker",
    price: 49.99,
    categories: [
      {
        label: "Electronics",
        value: "electronics",
        icon: MonitorIcon,
        slug: "electronics",
        isPrimary: true,
      },
      { label: "Travel", value: "travel", icon: GlobeIcon, slug: "travel" },
    ],
    created_by: "jane_smith",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Running Shoes Ultra Boost",
    price: 110.0,
    categories: [
      {
        label: "Sports",
        value: "sports",
        icon: DumbbellIcon,
        slug: "sports",
        isPrimary: true,
      },
      { label: "Health", value: "health", icon: HeartIcon, slug: "health" },
    ],
    created_by: "admin",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Smart Watch Series X",
    price: 249.99,
    categories: [
      {
        label: "Electronics",
        value: "electronics",
        icon: MonitorIcon,
        slug: "electronics",
        isPrimary: true,
      },
      { label: "Health", value: "health", icon: HeartIcon, slug: "health" },
    ],
    created_by: "admin",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Leather Wallet Slim",
    price: 39.99,
    categories: [
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
        isPrimary: true,
      },
      {
        label: "Clothing",
        value: "clothing",
        icon: ShirtIcon,
        slug: "clothing",
      },
    ],
    created_by: "john_doe",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Organic Green Tea Pack",
    price: 14.99,
    categories: [
      {
        label: "Food",
        value: "food",
        icon: UtensilsIcon,
        slug: "food",
        isPrimary: true,
      },
      { label: "Health", value: "health", icon: HeartIcon, slug: "health" },
    ],
    created_by: "jane_smith",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Mountain Bike Pro 21",
    price: 499.0,
    categories: [
      {
        label: "Sports",
        value: "sports",
        icon: DumbbellIcon,
        slug: "sports",
        isPrimary: true,
      },
      {
        label: "Automotive",
        value: "automotive",
        icon: CarIcon,
        slug: "automotive",
      },
    ],
    created_by: "admin",
    status: { value: "DRAFT", label: "Draft", level: "WARNING" },
  },
  {
    name: "Wooden Bookshelf 5-Tier",
    price: 149.0,
    categories: [
      {
        label: "Home",
        value: "home",
        icon: HomeIcon,
        slug: "home",
        isPrimary: true,
      },
      { label: "Books", value: "books", icon: BookIcon, slug: "books" },
    ],
    created_by: "john_doe",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Vitamin C Supplement 1000mg",
    price: 22.5,
    categories: [
      {
        label: "Health",
        value: "health",
        icon: HeartIcon,
        slug: "health",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "admin",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Travel Backpack 40L",
    price: 79.99,
    categories: [
      {
        label: "Travel",
        value: "travel",
        icon: GlobeIcon,
        slug: "travel",
        isPrimary: true,
      },
      {
        label: "Sports",
        value: "sports",
        icon: DumbbellIcon,
        slug: "sports",
      },
    ],
    created_by: "jane_smith",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Non-Stick Frying Pan Set",
    price: 54.99,
    categories: [
      {
        label: "Home",
        value: "home",
        icon: HomeIcon,
        slug: "home",
        isPrimary: true,
      },
      { label: "Food", value: "food", icon: UtensilsIcon, slug: "food" },
    ],
    created_by: "admin",
    status: { value: "DRAFT", label: "Draft", level: "WARNING" },
  },
  {
    name: "JavaScript: The Good Parts",
    price: 29.99,
    categories: [
      {
        label: "Books",
        value: "books",
        icon: BookIcon,
        slug: "books",
        isPrimary: true,
      },
      {
        label: "Electronics",
        value: "electronics",
        icon: MonitorIcon,
        slug: "electronics",
      },
    ],
    created_by: "john_doe",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Car Dash Cam 4K",
    price: 89.99,
    categories: [
      {
        label: "Automotive",
        value: "automotive",
        icon: CarIcon,
        slug: "automotive",
        isPrimary: true,
      },
      {
        label: "Electronics",
        value: "electronics",
        icon: MonitorIcon,
        slug: "electronics",
      },
    ],
    created_by: "jane_smith",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Resistance Bands Set",
    price: 18.99,
    categories: [
      {
        label: "Sports",
        value: "sports",
        icon: DumbbellIcon,
        slug: "sports",
        isPrimary: true,
      },
      { label: "Health", value: "health", icon: HeartIcon, slug: "health" },
    ],
    created_by: "admin",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Wool Blend Overcoat",
    price: 189.0,
    categories: [
      {
        label: "Clothing",
        value: "clothing",
        icon: ShirtIcon,
        slug: "clothing",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "john_doe",
    status: { value: "DRAFT", label: "Draft", level: "WARNING" },
  },
  {
    name: "Espresso Machine Deluxe",
    price: 299.99,
    categories: [
      {
        label: "Home",
        value: "home",
        icon: HomeIcon,
        slug: "home",
        isPrimary: true,
      },
      { label: "Food", value: "food", icon: UtensilsIcon, slug: "food" },
    ],
    created_by: "jane_smith",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "USB-C Hub 7-in-1",
    price: 44.99,
    categories: [
      {
        label: "Electronics",
        value: "electronics",
        icon: MonitorIcon,
        slug: "electronics",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "admin",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Protein Powder Chocolate",
    price: 49.99,
    categories: [
      {
        label: "Health",
        value: "health",
        icon: HeartIcon,
        slug: "health",
        isPrimary: true,
      },
      {
        label: "Sports",
        value: "sports",
        icon: DumbbellIcon,
        slug: "sports",
      },
    ],
    created_by: "john_doe",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Linen Bedsheet Set King",
    price: 89.0,
    categories: [
      {
        label: "Home",
        value: "home",
        icon: HomeIcon,
        slug: "home",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "jane_smith",
    status: { value: "TRASHED", label: "Trashed", level: "DESTRUCTIVE" },
  },
  {
    name: "Passport Holder RFID",
    price: 16.99,
    categories: [
      {
        label: "Travel",
        value: "travel",
        icon: GlobeIcon,
        slug: "travel",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "admin",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Noise Isolating Earbuds",
    price: 39.99,
    categories: [
      {
        label: "Electronics",
        value: "electronics",
        icon: MonitorIcon,
        slug: "electronics",
        isPrimary: true,
      },
      { label: "Travel", value: "travel", icon: GlobeIcon, slug: "travel" },
    ],
    created_by: "john_doe",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Cast Iron Skillet 12in",
    price: 34.99,
    categories: [
      {
        label: "Home",
        value: "home",
        icon: HomeIcon,
        slug: "home",
        isPrimary: true,
      },
      { label: "Food", value: "food", icon: UtensilsIcon, slug: "food" },
    ],
    created_by: "jane_smith",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Car Seat Cushion Memory Foam",
    price: 29.99,
    categories: [
      {
        label: "Automotive",
        value: "automotive",
        icon: CarIcon,
        slug: "automotive",
        isPrimary: true,
      },
      { label: "Health", value: "health", icon: HeartIcon, slug: "health" },
    ],
    created_by: "admin",
    status: { value: "DRAFT", label: "Draft", level: "WARNING" },
  },
  {
    name: "Graphic Novel Collection Vol 1",
    price: 24.99,
    categories: [
      {
        label: "Books",
        value: "books",
        icon: BookIcon,
        slug: "books",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "john_doe",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Swimming Goggles Pro",
    price: 22.99,
    categories: [
      {
        label: "Sports",
        value: "sports",
        icon: DumbbellIcon,
        slug: "sports",
        isPrimary: true,
      },
      { label: "Health", value: "health", icon: HeartIcon, slug: "health" },
    ],
    created_by: "jane_smith",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Wireless Charging Pad 15W",
    price: 27.99,
    categories: [
      {
        label: "Electronics",
        value: "electronics",
        icon: MonitorIcon,
        slug: "electronics",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "admin",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Floral Maxi Dress",
    price: 44.95,
    categories: [
      {
        label: "Clothing",
        value: "clothing",
        icon: ShirtIcon,
        slug: "clothing",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "john_doe",
    status: { value: "DRAFT", label: "Draft", level: "WARNING" },
  },
  {
    name: "Kombucha Starter Kit",
    price: 32.99,
    categories: [
      {
        label: "Food",
        value: "food",
        icon: UtensilsIcon,
        slug: "food",
        isPrimary: true,
      },
      { label: "Health", value: "health", icon: HeartIcon, slug: "health" },
    ],
    created_by: "jane_smith",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Foam Roller Deep Tissue",
    price: 19.99,
    categories: [
      {
        label: "Sports",
        value: "sports",
        icon: DumbbellIcon,
        slug: "sports",
        isPrimary: true,
      },
      { label: "Health", value: "health", icon: HeartIcon, slug: "health" },
    ],
    created_by: "admin",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Luggage Set 3-Piece",
    price: 199.0,
    categories: [
      {
        label: "Travel",
        value: "travel",
        icon: GlobeIcon,
        slug: "travel",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "john_doe",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Car Phone Mount Magnetic",
    price: 14.99,
    categories: [
      {
        label: "Automotive",
        value: "automotive",
        icon: CarIcon,
        slug: "automotive",
        isPrimary: true,
      },
      {
        label: "Electronics",
        value: "electronics",
        icon: MonitorIcon,
        slug: "electronics",
      },
    ],
    created_by: "jane_smith",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Meditation & Mindfulness Book",
    price: 17.99,
    categories: [
      {
        label: "Books",
        value: "books",
        icon: BookIcon,
        slug: "books",
        isPrimary: true,
      },
      { label: "Health", value: "health", icon: HeartIcon, slug: "health" },
    ],
    created_by: "admin",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Air Fryer 5.8Qt",
    price: 119.99,
    categories: [
      {
        label: "Home",
        value: "home",
        icon: HomeIcon,
        slug: "home",
        isPrimary: true,
      },
      { label: "Food", value: "food", icon: UtensilsIcon, slug: "food" },
    ],
    created_by: "john_doe",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Merino Wool Socks 6-Pack",
    price: 32.0,
    categories: [
      {
        label: "Clothing",
        value: "clothing",
        icon: ShirtIcon,
        slug: "clothing",
        isPrimary: true,
      },
      {
        label: "Sports",
        value: "sports",
        icon: DumbbellIcon,
        slug: "sports",
      },
    ],
    created_by: "jane_smith",
    status: { value: "DRAFT", label: "Draft", level: "WARNING" },
  },
  {
    name: "Portable Power Bank 20000mAh",
    price: 39.99,
    categories: [
      {
        label: "Electronics",
        value: "electronics",
        icon: MonitorIcon,
        slug: "electronics",
        isPrimary: true,
      },
      { label: "Travel", value: "travel", icon: GlobeIcon, slug: "travel" },
    ],
    created_by: "admin",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Adjustable Dumbbell Set",
    price: 159.0,
    categories: [
      {
        label: "Sports",
        value: "sports",
        icon: DumbbellIcon,
        slug: "sports",
        isPrimary: true,
      },
      { label: "Health", value: "health", icon: HeartIcon, slug: "health" },
    ],
    created_by: "john_doe",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Bamboo Cutting Board Set",
    price: 27.99,
    categories: [
      {
        label: "Home",
        value: "home",
        icon: HomeIcon,
        slug: "home",
        isPrimary: true,
      },
      { label: "Food", value: "food", icon: UtensilsIcon, slug: "food" },
    ],
    created_by: "jane_smith",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Sunscreen SPF 50 Travel Size",
    price: 9.99,
    categories: [
      {
        label: "Health",
        value: "health",
        icon: HeartIcon,
        slug: "health",
        isPrimary: true,
      },
      { label: "Travel", value: "travel", icon: GlobeIcon, slug: "travel" },
    ],
    created_by: "admin",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Electric Toothbrush Sonic",
    price: 69.99,
    categories: [
      {
        label: "Health",
        value: "health",
        icon: HeartIcon,
        slug: "health",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "john_doe",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Canvas Tote Bag Large",
    price: 12.99,
    categories: [
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
        isPrimary: true,
      },
      { label: "Travel", value: "travel", icon: GlobeIcon, slug: "travel" },
    ],
    created_by: "jane_smith",
    status: { value: "TRASHED", label: "Trashed", level: "DESTRUCTIVE" },
  },
  {
    name: "4K Action Camera Waterproof",
    price: 149.99,
    categories: [
      {
        label: "Electronics",
        value: "electronics",
        icon: MonitorIcon,
        slug: "electronics",
        isPrimary: true,
      },
      { label: "Travel", value: "travel", icon: GlobeIcon, slug: "travel" },
    ],
    created_by: "admin",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Vegan Protein Bar Box",
    price: 28.0,
    categories: [
      {
        label: "Food",
        value: "food",
        icon: UtensilsIcon,
        slug: "food",
        isPrimary: true,
      },
      { label: "Health", value: "health", icon: HeartIcon, slug: "health" },
    ],
    created_by: "john_doe",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Car Floor Mats All Weather",
    price: 45.99,
    categories: [
      {
        label: "Automotive",
        value: "automotive",
        icon: CarIcon,
        slug: "automotive",
        isPrimary: true,
      },
      { label: "Home", value: "home", icon: HomeIcon, slug: "home" },
    ],
    created_by: "jane_smith",
    status: { value: "DRAFT", label: "Draft", level: "WARNING" },
  },
  {
    name: "Self-Help Productivity Book",
    price: 15.99,
    categories: [
      {
        label: "Books",
        value: "books",
        icon: BookIcon,
        slug: "books",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "admin",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Titanium Chef Knife 8in",
    price: 64.99,
    categories: [
      {
        label: "Home",
        value: "home",
        icon: HomeIcon,
        slug: "home",
        isPrimary: true,
      },
      { label: "Food", value: "food", icon: UtensilsIcon, slug: "food" },
    ],
    created_by: "john_doe",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Compression Running Tights",
    price: 42.0,
    categories: [
      {
        label: "Sports",
        value: "sports",
        icon: DumbbellIcon,
        slug: "sports",
        isPrimary: true,
      },
      {
        label: "Clothing",
        value: "clothing",
        icon: ShirtIcon,
        slug: "clothing",
      },
    ],
    created_by: "jane_smith",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Smart LED Bulb 4-Pack",
    price: 34.99,
    categories: [
      {
        label: "Electronics",
        value: "electronics",
        icon: MonitorIcon,
        slug: "electronics",
        isPrimary: true,
      },
      { label: "Home", value: "home", icon: HomeIcon, slug: "home" },
    ],
    created_by: "admin",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Neck Pillow Travel Memory Foam",
    price: 23.99,
    categories: [
      {
        label: "Travel",
        value: "travel",
        icon: GlobeIcon,
        slug: "travel",
        isPrimary: true,
      },
      { label: "Health", value: "health", icon: HeartIcon, slug: "health" },
    ],
    created_by: "john_doe",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Collagen Peptides Powder",
    price: 36.99,
    categories: [
      {
        label: "Health",
        value: "health",
        icon: HeartIcon,
        slug: "health",
        isPrimary: true,
      },
      { label: "Food", value: "food", icon: UtensilsIcon, slug: "food" },
    ],
    created_by: "jane_smith",
    status: { value: "DRAFT", label: "Draft", level: "WARNING" },
  },
  {
    name: "Windshield Snow Cover",
    price: 19.99,
    categories: [
      {
        label: "Automotive",
        value: "automotive",
        icon: CarIcon,
        slug: "automotive",
        isPrimary: true,
      },
      { label: "Home", value: "home", icon: HomeIcon, slug: "home" },
    ],
    created_by: "admin",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Fantasy Novel Trilogy Box Set",
    price: 44.99,
    categories: [
      {
        label: "Books",
        value: "books",
        icon: BookIcon,
        slug: "books",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "john_doe",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Scented Soy Candle Set",
    price: 26.99,
    categories: [
      {
        label: "Home",
        value: "home",
        icon: HomeIcon,
        slug: "home",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "jane_smith",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Tennis Racket Pro Series",
    price: 79.99,
    categories: [
      {
        label: "Sports",
        value: "sports",
        icon: DumbbellIcon,
        slug: "sports",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "admin",
    status: { value: "TRASHED", label: "Trashed", level: "DESTRUCTIVE" },
  },
  {
    name: "Insulated Lunch Box",
    price: 21.99,
    categories: [
      {
        label: "Food",
        value: "food",
        icon: UtensilsIcon,
        slug: "food",
        isPrimary: true,
      },
      { label: "Travel", value: "travel", icon: GlobeIcon, slug: "travel" },
    ],
    created_by: "john_doe",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Mechanical Pencil Set",
    price: 11.99,
    categories: [
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
        isPrimary: true,
      },
      { label: "Books", value: "books", icon: BookIcon, slug: "books" },
    ],
    created_by: "jane_smith",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Hoodie Pullover Fleece",
    price: 49.95,
    categories: [
      {
        label: "Clothing",
        value: "clothing",
        icon: ShirtIcon,
        slug: "clothing",
        isPrimary: true,
      },
      {
        label: "Sports",
        value: "sports",
        icon: DumbbellIcon,
        slug: "sports",
      },
    ],
    created_by: "admin",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Smart Doorbell Camera HD",
    price: 129.99,
    categories: [
      {
        label: "Electronics",
        value: "electronics",
        icon: MonitorIcon,
        slug: "electronics",
        isPrimary: true,
      },
      { label: "Home", value: "home", icon: HomeIcon, slug: "home" },
    ],
    created_by: "john_doe",
    status: { value: "DRAFT", label: "Draft", level: "WARNING" },
  },
  {
    name: "Omega 3 Fish Oil Capsules",
    price: 18.99,
    categories: [
      {
        label: "Health",
        value: "health",
        icon: HeartIcon,
        slug: "health",
        isPrimary: true,
      },
      { label: "Food", value: "food", icon: UtensilsIcon, slug: "food" },
    ],
    created_by: "jane_smith",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Car Jump Starter Portable",
    price: 59.99,
    categories: [
      {
        label: "Automotive",
        value: "automotive",
        icon: CarIcon,
        slug: "automotive",
        isPrimary: true,
      },
      {
        label: "Electronics",
        value: "electronics",
        icon: MonitorIcon,
        slug: "electronics",
      },
    ],
    created_by: "admin",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "World Atlas Hardcover",
    price: 34.99,
    categories: [
      {
        label: "Books",
        value: "books",
        icon: BookIcon,
        slug: "books",
        isPrimary: true,
      },
      { label: "Travel", value: "travel", icon: GlobeIcon, slug: "travel" },
    ],
    created_by: "john_doe",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Meal Prep Container 10-Pack",
    price: 24.99,
    categories: [
      {
        label: "Food",
        value: "food",
        icon: UtensilsIcon,
        slug: "food",
        isPrimary: true,
      },
      { label: "Health", value: "health", icon: HeartIcon, slug: "health" },
    ],
    created_by: "jane_smith",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Knee Support Brace",
    price: 17.99,
    categories: [
      {
        label: "Health",
        value: "health",
        icon: HeartIcon,
        slug: "health",
        isPrimary: true,
      },
      {
        label: "Sports",
        value: "sports",
        icon: DumbbellIcon,
        slug: "sports",
      },
    ],
    created_by: "admin",
    status: { value: "DRAFT", label: "Draft", level: "WARNING" },
  },
  {
    name: "Packing Cubes Travel Set",
    price: 22.99,
    categories: [
      {
        label: "Travel",
        value: "travel",
        icon: GlobeIcon,
        slug: "travel",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "john_doe",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Mechanical Keyboard TKL",
    price: 109.0,
    categories: [
      {
        label: "Electronics",
        value: "electronics",
        icon: MonitorIcon,
        slug: "electronics",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "jane_smith",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Linen Summer Pants",
    price: 38.95,
    categories: [
      {
        label: "Clothing",
        value: "clothing",
        icon: ShirtIcon,
        slug: "clothing",
        isPrimary: true,
      },
      { label: "Travel", value: "travel", icon: GlobeIcon, slug: "travel" },
    ],
    created_by: "admin",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Whey Protein Isolate Vanilla",
    price: 54.99,
    categories: [
      {
        label: "Health",
        value: "health",
        icon: HeartIcon,
        slug: "health",
        isPrimary: true,
      },
      {
        label: "Sports",
        value: "sports",
        icon: DumbbellIcon,
        slug: "sports",
      },
    ],
    created_by: "john_doe",
    status: { value: "TRASHED", label: "Trashed", level: "DESTRUCTIVE" },
  },
  {
    name: "Plant Stand Wooden 3-Tier",
    price: 42.99,
    categories: [
      {
        label: "Home",
        value: "home",
        icon: HomeIcon,
        slug: "home",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "jane_smith",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Car Wax Polish Kit",
    price: 24.99,
    categories: [
      {
        label: "Automotive",
        value: "automotive",
        icon: CarIcon,
        slug: "automotive",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "admin",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Design Thinking Handbook",
    price: 21.99,
    categories: [
      {
        label: "Books",
        value: "books",
        icon: BookIcon,
        slug: "books",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "john_doe",
    status: { value: "DRAFT", label: "Draft", level: "WARNING" },
  },
  {
    name: "Cold Brew Coffee Maker",
    price: 37.99,
    categories: [
      {
        label: "Food",
        value: "food",
        icon: UtensilsIcon,
        slug: "food",
        isPrimary: true,
      },
      { label: "Home", value: "home", icon: HomeIcon, slug: "home" },
    ],
    created_by: "jane_smith",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Jump Rope Speed Cable",
    price: 12.99,
    categories: [
      {
        label: "Sports",
        value: "sports",
        icon: DumbbellIcon,
        slug: "sports",
        isPrimary: true,
      },
      { label: "Health", value: "health", icon: HeartIcon, slug: "health" },
    ],
    created_by: "admin",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Polarized Sunglasses UV400",
    price: 29.99,
    categories: [
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
        isPrimary: true,
      },
      { label: "Travel", value: "travel", icon: GlobeIcon, slug: "travel" },
    ],
    created_by: "john_doe",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Standing Desk Converter",
    price: 89.99,
    categories: [
      {
        label: "Home",
        value: "home",
        icon: HomeIcon,
        slug: "home",
        isPrimary: true,
      },
      { label: "Health", value: "health", icon: HeartIcon, slug: "health" },
    ],
    created_by: "jane_smith",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Tire Pressure Gauge Digital",
    price: 13.99,
    categories: [
      {
        label: "Automotive",
        value: "automotive",
        icon: CarIcon,
        slug: "automotive",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "admin",
    status: { value: "DRAFT", label: "Draft", level: "WARNING" },
  },
  {
    name: "Classic Literature Box Set",
    price: 59.99,
    categories: [
      {
        label: "Books",
        value: "books",
        icon: BookIcon,
        slug: "books",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "john_doe",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Smoothie Blender Personal",
    price: 44.99,
    categories: [
      {
        label: "Food",
        value: "food",
        icon: UtensilsIcon,
        slug: "food",
        isPrimary: true,
      },
      { label: "Health", value: "health", icon: HeartIcon, slug: "health" },
    ],
    created_by: "jane_smith",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Winter Puffer Jacket",
    price: 119.0,
    categories: [
      {
        label: "Clothing",
        value: "clothing",
        icon: ShirtIcon,
        slug: "clothing",
        isPrimary: true,
      },
      { label: "Travel", value: "travel", icon: GlobeIcon, slug: "travel" },
    ],
    created_by: "admin",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Gaming Mouse RGB 16000 DPI",
    price: 59.99,
    categories: [
      {
        label: "Electronics",
        value: "electronics",
        icon: MonitorIcon,
        slug: "electronics",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "john_doe",
    status: { value: "DRAFT", label: "Draft", level: "WARNING" },
  },
  {
    name: "Multivitamin Daily Pack",
    price: 24.99,
    categories: [
      {
        label: "Health",
        value: "health",
        icon: HeartIcon,
        slug: "health",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "jane_smith",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Hotel Pillow Top Mattress Pad",
    price: 74.99,
    categories: [
      {
        label: "Home",
        value: "home",
        icon: HomeIcon,
        slug: "home",
        isPrimary: true,
      },
      { label: "Travel", value: "travel", icon: GlobeIcon, slug: "travel" },
    ],
    created_by: "admin",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Car Vacuum Cleaner Cordless",
    price: 38.99,
    categories: [
      {
        label: "Automotive",
        value: "automotive",
        icon: CarIcon,
        slug: "automotive",
        isPrimary: true,
      },
      { label: "Home", value: "home", icon: HomeIcon, slug: "home" },
    ],
    created_by: "john_doe",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Sci-Fi Anthology 2025",
    price: 19.99,
    categories: [
      {
        label: "Books",
        value: "books",
        icon: BookIcon,
        slug: "books",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "jane_smith",
    status: { value: "TRASHED", label: "Trashed", level: "DESTRUCTIVE" },
  },
  {
    name: "Sourdough Bread Making Kit",
    price: 31.99,
    categories: [
      {
        label: "Food",
        value: "food",
        icon: UtensilsIcon,
        slug: "food",
        isPrimary: true,
      },
      { label: "Home", value: "home", icon: HomeIcon, slug: "home" },
    ],
    created_by: "admin",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Trail Running Shoes V2",
    price: 94.99,
    categories: [
      {
        label: "Sports",
        value: "sports",
        icon: DumbbellIcon,
        slug: "sports",
        isPrimary: true,
      },
      { label: "Travel", value: "travel", icon: GlobeIcon, slug: "travel" },
    ],
    created_by: "john_doe",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Webcam 4K Auto Focus",
    price: 79.99,
    categories: [
      {
        label: "Electronics",
        value: "electronics",
        icon: MonitorIcon,
        slug: "electronics",
        isPrimary: true,
      },
      { label: "Home", value: "home", icon: HomeIcon, slug: "home" },
    ],
    created_by: "jane_smith",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Linen Blazer Unisex",
    price: 85.0,
    categories: [
      {
        label: "Clothing",
        value: "clothing",
        icon: ShirtIcon,
        slug: "clothing",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "admin",
    status: { value: "DRAFT", label: "Draft", level: "WARNING" },
  },
  {
    name: "Probiotic Capsules 60ct",
    price: 27.99,
    categories: [
      {
        label: "Health",
        value: "health",
        icon: HeartIcon,
        slug: "health",
        isPrimary: true,
      },
      { label: "Food", value: "food", icon: UtensilsIcon, slug: "food" },
    ],
    created_by: "john_doe",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Throw Blanket Chunky Knit",
    price: 46.99,
    categories: [
      {
        label: "Home",
        value: "home",
        icon: HomeIcon,
        slug: "home",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "jane_smith",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Steering Wheel Cover Leather",
    price: 18.99,
    categories: [
      {
        label: "Automotive",
        value: "automotive",
        icon: CarIcon,
        slug: "automotive",
        isPrimary: true,
      },
      {
        label: "Shopping",
        value: "shopping",
        icon: ShoppingBagIcon,
        slug: "shopping",
      },
    ],
    created_by: "admin",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Python Programming Guide",
    price: 39.99,
    categories: [
      {
        label: "Books",
        value: "books",
        icon: BookIcon,
        slug: "books",
        isPrimary: true,
      },
      {
        label: "Electronics",
        value: "electronics",
        icon: MonitorIcon,
        slug: "electronics",
      },
    ],
    created_by: "john_doe",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Acai Berry Powder Organic",
    price: 22.99,
    categories: [
      {
        label: "Food",
        value: "food",
        icon: UtensilsIcon,
        slug: "food",
        isPrimary: true,
      },
      { label: "Health", value: "health", icon: HeartIcon, slug: "health" },
    ],
    created_by: "jane_smith",
    status: { value: "DRAFT", label: "Draft", level: "WARNING" },
  },
  {
    name: "Boxing Gloves Training 14oz",
    price: 36.99,
    categories: [
      {
        label: "Sports",
        value: "sports",
        icon: DumbbellIcon,
        slug: "sports",
        isPrimary: true,
      },
      { label: "Health", value: "health", icon: HeartIcon, slug: "health" },
    ],
    created_by: "admin",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Travel Adapter Universal",
    price: 16.99,
    categories: [
      {
        label: "Travel",
        value: "travel",
        icon: GlobeIcon,
        slug: "travel",
        isPrimary: true,
      },
      {
        label: "Electronics",
        value: "electronics",
        icon: MonitorIcon,
        slug: "electronics",
      },
    ],
    created_by: "john_doe",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
  {
    name: "Monitor 27in 144Hz IPS",
    price: 329.0,
    categories: [
      {
        label: "Electronics",
        value: "electronics",
        icon: MonitorIcon,
        slug: "electronics",
        isPrimary: true,
      },
      { label: "Home", value: "home", icon: HomeIcon, slug: "home" },
    ],
    created_by: "jane_smith",
    status: { value: "PUBLISHED", label: "Published", level: "SAFE" },
  },
];
