export const desktopNavItems = [
  { id: "devices", label: "Devices", href: "#deals" },
  { id: "plans", label: "5G Plans", href: "#deals" },
  { id: "broadband", label: "Broadband", href: "#ecosystem" },
  { id: "gaming", label: "Gaming", href: "#ecosystem" },
  { id: "support", label: "Support", href: "#ai-chatbot" },
];

export const utilityMenuItems = [
  { id: "personal", label: "Personal", href: "#" },
  { id: "enterprise", label: "Enterprise", href: "#" },
  { id: "learning", label: "Learning", href: "#" },
];

export const mobileNavItems = [
  ...desktopNavItems,
  { id: "quick-tools", label: "Quick Tools", href: "#ai-chatbot" },
  ...utilityMenuItems,
];

export const quickPromptItems = [
  "Find best 5G plan for gaming",
  "Compare phone + plan bundles",
  "Check coverage near me",
  "Recommend family broadband setup",
];

export const footerLinkGroups = [
  {
    id: "plans",
    title: "Plans",
    links: ["5G Postpaid", "Prepaid", "Broadband", "Family"]
  },
  {
    id: "devices",
    title: "Devices",
    links: ["Smartphones", "Tablets", "Accessories", "Trade-In"]
  },
  {
    id: "support",
    title: "Support",
    links: ["Help Center", "Coverage", "Contact", "Store Locator"]
  },
  {
    id: "company",
    title: "Company",
    links: ["About YES", "Careers", "Newsroom", "Terms"]
  },
];

export const deals = [
  {
    id: "iphone-17-infinite",
    title: "iPhone 17 with YES Infinite",
    price: "From RM139/month",
    description: "Unlimited 5G + device installment",
    imageWebp:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=70&fm=webp",
    imageAvif:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=70&fm=avif",
  },
  {
    id: "samsung-s26-switch",
    title: "Samsung S26 Switch Deal",
    price: "Save up to RM600",
    description: "Port-in bonus with YES 5G plans",
    imageWebp:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=70&fm=webp",
    imageAvif:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=70&fm=avif",
  },
  {
    id: "yes-5g-home-broadband",
    title: "YES 5G Home Broadband",
    price: "From RM58/month",
    description: "High speed home internet for family streaming",
    imageWebp:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=70&fm=webp",
    imageAvif:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=70&fm=avif",
  },
];
