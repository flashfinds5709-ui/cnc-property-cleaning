{
  "project": {
    "name": "C&C Property Care — One-page Landing",
    "type": "landing_page",
    "audience": "Long Island, NY homeowners/property owners needing power washing",
    "primary_success_action": "Tap Call button (631-401-7026) or Book a Consultation (placeholder Google Form)",
    "secondary_actions": [
      "Email via Gmail compose (placeholder email)",
      "Scroll to Services accordion",
      "View Before/After proof"
    ]
  },
  "brand_personality": {
    "attributes": [
      "clean",
      "trustworthy",
      "local",
      "energetic",
      "no-nonsense"
    ],
    "visual_metaphors": [
      "water sheen highlights",
      "crisp edges",
      "subtle spray/noise texture",
      "before/after transformation"
    ],
    "style_fusion": "Swiss-style clarity (grid + typography) + light glass accents (CTA chips) + ‘cleaning’ micro-shimmer highlights (very subtle)."
  },
  "layout_strategy": {
    "page_structure": [
      "Sticky header with tabs: Services, About Me + persistent Call CTA",
      "Hero (headline + location + 2 CTAs + trust chips)",
      "Before/After proof (slider or paired cards)",
      "Services (accordion with image per service + pricing note for garbage cans)",
      "Service area notice (Long Island only)",
      "About (Carlo & Collin story + Why choose us accordion)",
      "Final CTA band + footer (contact buttons + bold water access note)"
    ],
    "grid": {
      "container": "max-w-6xl mx-auto px-4 sm:px-6",
      "desktop_columns": "lg:grid lg:grid-cols-12 lg:gap-8",
      "section_spacing": "py-12 sm:py-16",
      "card_spacing": "gap-4 sm:gap-6"
    },
    "mobile_first_rules": [
      "Hero stacks vertically; CTAs full-width on mobile",
      "Sticky bottom CTA bar on mobile (Call + Book)",
      "Accordions use large tap targets (min-h-11)"
    ]
  },
  "typography": {
    "google_fonts": {
      "heading": {
        "family": "Space Grotesk",
        "weights": [
          500,
          600,
          700
        ]
      },
      "body": {
        "family": "IBM Plex Sans",
        "weights": [
          400,
          500,
          600
        ]
      }
    },
    "tailwind_usage": {
      "h1": "font-[Space_Grotesk] font-semibold tracking-tight text-4xl sm:text-5xl lg:text-6xl",
      "h2": "font-[Space_Grotesk] font-semibold tracking-tight text-2xl sm:text-3xl",
      "subheading": "font-[IBM_Plex_Sans] text-base md:text-lg text-slate-700",
      "body": "font-[IBM_Plex_Sans] text-sm sm:text-base text-slate-700 leading-relaxed",
      "small": "text-xs sm:text-sm text-slate-600"
    },
    "copy_tone": {
      "headline_formula": "Service + outcome + location",
      "examples": [
        "Power washing that makes Long Island properties look brand new.",
        "Driveways, fences, decks, and garbage cans — cleaned fast and done right."
      ]
    }
  },
  "color_system": {
    "notes": "Use green/blue/white as requested. Keep white dominant; blue for trust; green for ‘go’ accents. Avoid heavy gradients; use only mild background wash in hero (<=20% viewport).",
    "tokens_css_variables": {
      "--background": "0 0% 100%",
      "--foreground": "222 47% 11%",
      "--card": "0 0% 100%",
      "--card-foreground": "222 47% 11%",
      "--muted": "210 40% 96%",
      "--muted-foreground": "215 16% 47%",
      "--border": "214 32% 91%",
      "--input": "214 32% 91%",
      "--ring": "204 88% 40%",
      "--primary": "204 88% 40%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "152 55% 35%",
      "--secondary-foreground": "0 0% 100%",
      "--accent": "204 100% 96%",
      "--accent-foreground": "204 88% 25%",
      "--destructive": "0 84% 60%",
      "--destructive-foreground": "0 0% 100%",
      "--radius": "0.75rem"
    },
    "hex_palette": {
      "blue_primary": "#0EA5E9",
      "blue_deep": "#075985",
      "green_accent": "#22C55E",
      "green_deep": "#15803D",
      "white": "#FFFFFF",
      "ink": "#0F172A",
      "slate": "#334155",
      "border": "#E2E8F0",
      "wash": "#F1F8FF"
    },
    "usage": {
      "backgrounds": "white + very light blue wash sections",
      "headings": "ink",
      "body_text": "slate",
      "primary_cta": "blue_primary",
      "secondary_cta": "white with blue border OR green_accent for ‘Book’",
      "badges_chips": "accent (very light blue) with blue_deep text",
      "focus_ring": "ring (blue)"
    },
    "allowed_gradients": {
      "hero_background_only": "bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(14,165,233,0.14),transparent_55%),radial-gradient(900px_circle_at_80%_0%,rgba(34,197,94,0.10),transparent_50%)]",
      "restriction": "Do not exceed 20% viewport coverage; never on cards or text-heavy areas."
    },
    "texture": {
      "noise_overlay": "Add a subtle CSS noise overlay (opacity 0.04–0.06) on hero background only."
    }
  },
  "components": {
    "component_path": {
      "header_nav": [
        "/app/frontend/src/components/ui/navigation-menu.jsx",
        "/app/frontend/src/components/ui/button.jsx",
        "/app/frontend/src/components/ui/sheet.jsx",
        "/app/frontend/src/components/ui/separator.jsx"
      ],
      "cta_buttons": [
        "/app/frontend/src/components/ui/button.jsx",
        "/app/frontend/src/components/ui/badge.jsx"
      ],
      "services_dropdowns": [
        "/app/frontend/src/components/ui/accordion.jsx",
        "/app/frontend/src/components/ui/card.jsx",
        "/app/frontend/src/components/ui/aspect-ratio.jsx"
      ],
      "before_after": [
        "/app/frontend/src/components/ui/tabs.jsx",
        "/app/frontend/src/components/ui/slider.jsx",
        "/app/frontend/src/components/ui/carousel.jsx",
        "/app/frontend/src/components/ui/aspect-ratio.jsx"
      ],
      "about_section": [
        "/app/frontend/src/components/ui/card.jsx",
        "/app/frontend/src/components/ui/accordion.jsx",
        "/app/frontend/src/components/ui/badge.jsx"
      ],
      "toast_optional": [
        "/app/frontend/src/components/ui/sonner.jsx"
      ]
    },
    "section_blueprints": {
      "sticky_header": {
        "behavior": "Sticky top with blur; on scroll add subtle border + shadow.",
        "tailwind": "sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200/70",
        "nav_items": [
          {
            "label": "Services",
            "href": "#services",
            "data-testid": "nav-services-link"
          },
          {
            "label": "About Me",
            "href": "#about",
            "data-testid": "nav-about-link"
          }
        ],
        "cta": {
          "call": {
            "label": "Call (631) 401-7026",
            "href": "tel:6314017026",
            "data-testid": "header-call-button"
          },
          "book": {
            "label": "Book a Consultation",
            "href": "https://forms.gle/11TXTAgdrrRsnP749",
            "data-testid": "header-book-consultation-button"
          }
        }
      },
      "hero": {
        "layout": "Left: copy + CTAs; Right: hero image card with ‘Before/After’ mini tag.",
        "key_elements": [
          "H1 with service + location",
          "2 CTA buttons (Call primary on mobile; Book primary on desktop is acceptable—choose one and keep consistent)",
          "Trust chips: ‘Free estimates’, ‘Local Long Island’, ‘Fast scheduling’",
          "Service area line: ‘Serving Long Island, NY’"
        ],
        "cta_group_tailwind": "mt-6 flex flex-col sm:flex-row gap-3",
        "trust_chips_tailwind": "mt-5 flex flex-wrap gap-2"
      },
      "before_after_proof": {
        "preferred": "Paired cards grid (Before / After) for simplicity; optionally add a slider interaction using shadcn Slider to ‘reveal’ overlay.",
        "simple_version": {
          "layout": "grid sm:grid-cols-2 gap-4",
          "card": "rounded-xl border border-slate-200 overflow-hidden bg-white shadow-sm"
        },
        "optional_slider_microinteraction": {
          "concept": "Two images stacked; slider controls clip-path width of ‘after’ layer.",
          "component": "/app/frontend/src/components/ui/slider.jsx",
          "data-testid": "before-after-slider"
        }
      },
      "services": {
        "accordion": {
          "component": "/app/frontend/src/components/ui/accordion.jsx",
          "type": "single",
          "collapsible": true,
          "item_card_tailwind": "rounded-xl border border-slate-200 bg-white shadow-sm",
          "trigger_tailwind": "px-4 py-4 text-left hover:bg-slate-50/70",
          "content_tailwind": "px-4 pb-4"
        },
        "items": [
          {
            "title": "Garbage cans",
            "data-testid": "service-garbage-cans-accordion",
            "copy": "First time customers get $10 per garbage can, after its $15 per garbage can.",
            "image_category": "service_garbage_cans"
          },
          {
            "title": "Fences",
            "data-testid": "service-fences-accordion",
            "image_category": "service_fences"
          },
          {
            "title": "Driveways",
            "data-testid": "service-driveways-accordion",
            "image_category": "service_driveways"
          },
          {
            "title": "Wooden decks",
            "data-testid": "service-wooden-decks-accordion",
            "image_category": "service_wooden_decks"
          },
          {
            "title": "Custom inquiries",
            "data-testid": "service-custom-inquiries-accordion",
            "image_category": "service_custom"
          }
        ]
      },
      "about": {
        "copy": "Carlo and Collin, cousins from Holtsville, wanting to make your property as clean as theirs.",
        "service_area_notice": {
          "text": "Operated exclusively on Long Island, New York.",
          "style": "inline badge + small text",
          "data-testid": "service-area-notice"
        },
        "why_choose_us": {
          "component": "/app/frontend/src/components/ui/accordion.jsx",
          "title": "Why choose us?",
          "data-testid": "why-choose-us-accordion",
          "copy": "Young and ready to earn your business however necessary. We've helped maintain our parents property since we were young, and are ready to put the same effort into your property as if it were our own."
        }
      },
      "final_cta_footer": {
        "cta_buttons": [
          {
            "label": "Call Now",
            "href": "tel:6314017026",
            "data-testid": "footer-call-button"
          },
          {
            "label": "Book a Consultation",
            "href": "https://forms.gle/11TXTAgdrrRsnP749",
            "data-testid": "footer-book-consultation-button"
          },
          {
            "label": "Email Us",
            "href": "https://mail.google.com/mail/?view=cm&fs=1&to=propertycare.cnc@gmail.com&su=C%26C%20Property%20Care%20Consultation&body=Hi%20Carlo%20%26%20Collin%2C%0A%0AI%27d%20like%20a%20quote%20for%20power%20washing%20on%20Long%20Island.%20My%20address%20is%3A%20%0AService%20needed%3A%20%0APreferred%20date%2Ftime%3A%20%0A%0AThanks%21",
            "data-testid": "footer-email-button"
          }
        ],
        "required_notice": {
          "text": "**Customer must provide access to water supply if required**",
          "data-testid": "water-supply-notice"
        }
      }
    }
  },
  "buttons": {
    "style": "Professional / Corporate with friendly edges",
    "tokens": {
      "radius": "rounded-xl",
      "primary": "bg-sky-500 text-white hover:bg-sky-600 focus-visible:ring-sky-400",
      "secondary": "bg-white text-sky-700 border border-sky-200 hover:bg-sky-50",
      "success": "bg-emerald-500 text-white hover:bg-emerald-600"
    },
    "interaction": {
      "hover": "shadow-sm -> shadow-md, slight translate-y-[-1px]",
      "press": "active:translate-y-0 active:scale-[0.99]",
      "transition": "transition-colors duration-200 (no transition-all)"
    }
  },
  "motion": {
    "principles": [
      "Use motion to guide attention to CTAs and proof, not to decorate.",
      "Respect prefers-reduced-motion.",
      "No parallax that harms readability; keep subtle."
    ],
    "recommended_library": {
      "name": "framer-motion",
      "install": "npm i framer-motion",
      "usage": "Use for section fade-up on scroll and CTA hover micro-lift. Wrap with reduced-motion checks."
    },
    "micro_interactions": [
      "Header: on scroll add border + shadow",
      "Accordion: chevron rotates 180°",
      "Image cards: hover reveal ‘After’ label chip",
      "CTA buttons: subtle lift + shadow"
    ]
  },
  "imagery": {
    "direction": [
      "Use high-quality, bright, real-world exterior cleaning photos.",
      "Prefer images with visible water spray / cleaning action.",
      "Keep images consistent: cool daylight, crisp whites, minimal heavy filters."
    ],
    "image_urls": [
      {
        "category": "hero",
        "description": "Hero image showing exterior cleaning / power washing action",
        "url": "https://images.pexels.com/photos/30958770/pexels-photo-30958770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        "category": "supporting",
        "description": "Secondary supporting image (house exterior) for proof section or background card",
        "url": "https://images.unsplash.com/photo-1555636222-cae831e670b3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHdhc2hpbmclMjBob3VzZSUyMGV4dGVyaW9yJTIwY2xlYW5pbmd8ZW58MHx8fGJsdWV8MTc4MjE3MzE0NXww&ixlib=rb-4.1.0&q=85"
      }
    ],
    "before_after": {
      "note": "Use real before/after photos when available. For now, use placeholders with clear labels ‘Before’ and ‘After’. If stock is used, ensure licensing and that the pair looks like the same surface.",
      "placeholder_strategy": "Use two cards with same aspect ratio; add overlay labels."
    }
  },
  "accessibility": {
    "requirements": [
      "WCAG AA contrast for text and buttons",
      "Visible focus rings (ring-sky-400/50)",
      "Tap targets >= 44px height",
      "Alt text for all images",
      "Use semantic landmarks: header/main/section/footer",
      "Respect prefers-reduced-motion"
    ]
  },
  "implementation_notes_js": {
    "react": {
      "anchors": "Use id=services and id=about for sections; header links scroll to anchors.",
      "sticky_mobile_cta": "On mobile, add a fixed bottom bar with Call + Book buttons (hide on lg).",
      "data_testid_rule": "Add data-testid to every button/link/accordion trigger and key notices (service area, pricing, water supply notice)."
    },
    "email_link": {
      "placeholder": "propertycare.cnc@gmail.com",
      "gmail_compose_url": "https://mail.google.com/mail/?view=cm&fs=1&to=propertycare.cnc@gmail.com",
      "fallback_mailto": "mailto:propertycare.cnc@gmail.com?subject=C%26C%20Property%20Care%20Consultation"
    },
    "consultation_link": {
      "placeholder": "https://forms.gle/11TXTAgdrrRsnP749"
    }
  },
  "instructions_to_main_agent": [
    "Replace /app/frontend/src/App.css default CRA styles; do NOT center the whole app container.",
    "Update /app/frontend/src/index.css :root tokens to match the blue/green system above (HSL values).",
    "Build a single-page layout in App.js with sections and anchor ids (#services, #about).",
    "Use shadcn/ui components: NavigationMenu or simple header + Button; Accordion for services and Why choose us; Card for image blocks; AspectRatio for consistent images.",
    "Add a mobile fixed CTA bar (Call + Book) with data-testid attributes.",
    "Keep gradients limited to hero background only (<=20% viewport). No gradients on cards or footer.",
    "Ensure all interactive elements and key notices include data-testid in kebab-case.",
    "Use placeholder Google Form link and placeholder email until user provides real values."
  ],
  "general_ui_ux_design_guidelines": "<General UI UX Design Guidelines>  \n    - You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms\n    - You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text\n   - NEVER: use AI assistant Emoji characters like`🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use **FontAwesome cdn** or **lucid-react** library already installed in the package.json\n\n **GRADIENT RESTRICTION RULE**\nNEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.  Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc\nNEVER use dark gradients for logo, testimonial, footer etc\nNEVER let gradients cover more than 20% of the viewport.\nNEVER apply gradients to text-heavy content or reading areas.\nNEVER use gradients on small UI elements (<100px width).\nNEVER stack multiple gradient layers in the same viewport.\n\n**ENFORCEMENT RULE:**\n    • Id gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors\n\n**How and where to use:**\n   • Section backgrounds (not content backgrounds)\n   • Hero section header content. Eg: dark to light to dark color\n   • Decorative overlays and accent elements only\n   • Hero section with 2-3 mild color\n   • Gradients creation can be done for any angle say horizontal, vertical or diagonal\n\n- For AI chat, voice application, **do not use purple color. Use color like light green, ocean blue, peach orange etc**\n\n</Font Guidelines>\n\n- Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead. \n   \n- Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.\n\n- Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.\n   \n- Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly\n    Eg: - if it implies playful/energetic, choose a colorful scheme\n           - if it implies monochrome/minimal, choose a black–white/neutral scheme\n\n**Component Reuse:**\n\t- Prioritize using pre-existing components from src/components/ui when applicable\n\t- Create new components that match the style and conventions of existing components when needed\n\t- Examine existing components to understand the project's component patterns before creating new ones\n\n**IMPORTANT**: Do not use HTML based component like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/ ` only as a primary components as these are modern and stylish component\n\n**Best Practices:**\n\t- Use Shadcn/UI as the primary component library for consistency and accessibility\n\t- Import path: ./components/[component-name]\n\n**Export Conventions:**\n\t- Components MUST use named exports (export const ComponentName = ...)\n\t- Pages MUST use default exports (export default function PageName() {...})\n\n**Toasts:**\n  - Use `sonner` for toasts\"\n  - Sonner component are located in `/app/src/components/ui/sonner.tsx`\n\nUse 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals.\n</General UI UX Design Guidelines>"
}
