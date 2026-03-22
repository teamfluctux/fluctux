
import type { CellSelectorValuesType } from "@/components/ag-grid";

import type { ProductManageDataType, ProductsOverViewData, StatusLevelType } from "@/types";
import type { PopoverMenuDataType } from "@fluctux/ui";
import { FileIcon, UploadIcon } from "lucide-react";

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


export const PRODUCT_PAGE_MENU_OPTIONS: PopoverMenuDataType = {
  Export: {
    label: "Export",
    data: [
      { label: "Export CSV", icon: UploadIcon },
      { label: "Export PDF", icon: FileIcon },
    ],
  },
};



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
      product_name: "Wireless Noise-Cancelling Headphones",
      product_price: 129.99,
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
      product_name: "Slim Fit Denim Jacket",
      product_price: 59.95,
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
      product_name: "Stainless Steel Water Bottle",
      product_price: 24.99,
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
      product_name: "Mechanical Gaming Keyboard",
      product_price: 89.0,
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
      product_name: "Yoga Mat Anti-Slip",
      product_price: 34.5,
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
      product_name: "Ceramic Coffee Mug Set",
      product_price: 19.99,
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
      product_name: "Portable Bluetooth Speaker",
      product_price: 49.99,
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
      product_name: "Running Shoes Ultra Boost",
      product_price: 110.0,
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
      product_name: "Smart Watch Series X",
      product_price: 249.99,
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
      product_name: "Leather Wallet Slim",
      product_price: 39.99,
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
      product_name: "Organic Green Tea Pack",
      product_price: 14.99,
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
      product_name: "Mountain Bike Pro 21",
      product_price: 499.0,
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
      product_name: "Wooden Bookshelf 5-Tier",
      product_price: 149.0,
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
      product_name: "Vitamin C Supplement 1000mg",
      product_price: 22.5,
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
      product_name: "Travel Backpack 40L",
      product_price: 79.99,
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
      product_name: "Non-Stick Frying Pan Set",
      product_price: 54.99,
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
      product_name: "JavaScript: The Good Parts",
      product_price: 29.99,
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
      product_name: "Car Dash Cam 4K",
      product_price: 89.99,
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
      product_name: "Resistance Bands Set",
      product_price: 18.99,
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
      product_name: "Wool Blend Overcoat",
      product_price: 189.0,
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
      product_name: "Espresso Machine Deluxe",
      product_price: 299.99,
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
      product_name: "USB-C Hub 7-in-1",
      product_price: 44.99,
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
      product_name: "Protein Powder Chocolate",
      product_price: 49.99,
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
      product_name: "Linen Bedsheet Set King",
      product_price: 89.0,
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
      product_name: "Passport Holder RFID",
      product_price: 16.99,
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
      product_name: "Noise Isolating Earbuds",
      product_price: 39.99,
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
      product_name: "Cast Iron Skillet 12in",
      product_price: 34.99,
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
      product_name: "Car Seat Cushion Memory Foam",
      product_price: 29.99,
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
      product_name: "Graphic Novel Collection Vol 1",
      product_price: 24.99,
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
      product_name: "Swimming Goggles Pro",
      product_price: 22.99,
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
      product_name: "Wireless Charging Pad 15W",
      product_price: 27.99,
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
      product_name: "Floral Maxi Dress",
      product_price: 44.95,
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
      product_name: "Kombucha Starter Kit",
      product_price: 32.99,
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
      product_name: "Foam Roller Deep Tissue",
      product_price: 19.99,
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
      product_name: "Luggage Set 3-Piece",
      product_price: 199.0,
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
      product_name: "Car Phone Mount Magnetic",
      product_price: 14.99,
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
      product_name: "Meditation & Mindfulness Book",
      product_price: 17.99,
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
      product_name: "Air Fryer 5.8Qt",
      product_price: 119.99,
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
      product_name: "Merino Wool Socks 6-Pack",
      product_price: 32.0,
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
      product_name: "Portable Power Bank 20000mAh",
      product_price: 39.99,
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
      product_name: "Adjustable Dumbbell Set",
      product_price: 159.0,
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
      product_name: "Bamboo Cutting Board Set",
      product_price: 27.99,
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
      product_name: "Sunscreen SPF 50 Travel Size",
      product_price: 9.99,
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
      product_name: "Electric Toothbrush Sonic",
      product_price: 69.99,
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
      product_name: "Canvas Tote Bag Large",
      product_price: 12.99,
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
      product_name: "4K Action Camera Waterproof",
      product_price: 149.99,
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
      product_name: "Vegan Protein Bar Box",
      product_price: 28.0,
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
      product_name: "Car Floor Mats All Weather",
      product_price: 45.99,
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
      product_name: "Self-Help Productivity Book",
      product_price: 15.99,
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
      product_name: "Titanium Chef Knife 8in",
      product_price: 64.99,
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
      product_name: "Compression Running Tights",
      product_price: 42.0,
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
      product_name: "Smart LED Bulb 4-Pack",
      product_price: 34.99,
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
      product_name: "Neck Pillow Travel Memory Foam",
      product_price: 23.99,
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
      product_name: "Collagen Peptides Powder",
      product_price: 36.99,
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
      product_name: "Windshield Snow Cover",
      product_price: 19.99,
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
      product_name: "Fantasy Novel Trilogy Box Set",
      product_price: 44.99,
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
      product_name: "Scented Soy Candle Set",
      product_price: 26.99,
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
      product_name: "Tennis Racket Pro Series",
      product_price: 79.99,
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
      product_name: "Insulated Lunch Box",
      product_price: 21.99,
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
      product_name: "Mechanical Pencil Set",
      product_price: 11.99,
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
      product_name: "Hoodie Pullover Fleece",
      product_price: 49.95,
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
      product_name: "Smart Doorbell Camera HD",
      product_price: 129.99,
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
      product_name: "Omega 3 Fish Oil Capsules",
      product_price: 18.99,
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
      product_name: "Car Jump Starter Portable",
      product_price: 59.99,
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
      product_name: "World Atlas Hardcover",
      product_price: 34.99,
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
      product_name: "Meal Prep Container 10-Pack",
      product_price: 24.99,
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
      product_name: "Knee Support Brace",
      product_price: 17.99,
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
      product_name: "Packing Cubes Travel Set",
      product_price: 22.99,
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
      product_name: "Mechanical Keyboard TKL",
      product_price: 109.0,
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
      product_name: "Linen Summer Pants",
      product_price: 38.95,
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
      product_name: "Whey Protein Isolate Vanilla",
      product_price: 54.99,
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
      product_name: "Plant Stand Wooden 3-Tier",
      product_price: 42.99,
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
      product_name: "Car Wax Polish Kit",
      product_price: 24.99,
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
      product_name: "Design Thinking Handbook",
      product_price: 21.99,
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
      product_name: "Cold Brew Coffee Maker",
      product_price: 37.99,
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
      product_name: "Jump Rope Speed Cable",
      product_price: 12.99,
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
      product_name: "Polarized Sunglasses UV400",
      product_price: 29.99,
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
      product_name: "Standing Desk Converter",
      product_price: 89.99,
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
      product_name: "Tire Pressure Gauge Digital",
      product_price: 13.99,
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
      product_name: "Classic Literature Box Set",
      product_price: 59.99,
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
      product_name: "Smoothie Blender Personal",
      product_price: 44.99,
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
      product_name: "Winter Puffer Jacket",
      product_price: 119.0,
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
      product_name: "Gaming Mouse RGB 16000 DPI",
      product_price: 59.99,
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
      product_name: "Multivitamin Daily Pack",
      product_price: 24.99,
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
      product_name: "Hotel Pillow Top Mattress Pad",
      product_price: 74.99,
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
      product_name: "Car Vacuum Cleaner Cordless",
      product_price: 38.99,
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
      product_name: "Sci-Fi Anthology 2025",
      product_price: 19.99,
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
      product_name: "Sourdough Bread Making Kit",
      product_price: 31.99,
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
      product_name: "Trail Running Shoes V2",
      product_price: 94.99,
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
      product_name: "Webcam 4K Auto Focus",
      product_price: 79.99,
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
      product_name: "Linen Blazer Unisex",
      product_price: 85.0,
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
      product_name: "Probiotic Capsules 60ct",
      product_price: 27.99,
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
      product_name: "Throw Blanket Chunky Knit",
      product_price: 46.99,
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
      product_name: "Steering Wheel Cover Leather",
      product_price: 18.99,
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
      product_name: "Python Programming Guide",
      product_price: 39.99,
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
      product_name: "Acai Berry Powder Organic",
      product_price: 22.99,
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
      product_name: "Boxing Gloves Training 14oz",
      product_price: 36.99,
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
      product_name: "Travel Adapter Universal",
      product_price: 16.99,
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
      product_name: "Monitor 27in 144Hz IPS",
      product_price: 329.0,
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