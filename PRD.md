SINGLE IMPLEMENTATION PROMPT

Build a mobile first landing page prototype for Yes.my using Next.js App Router and Tailwind CSS.

This is a hackathon MVP. Deliver a single page only. No backend, no CMS, no API integration, no authentication.

Objective:
Create a high performance, scroll snapping, section based landing page that removes banner clutter and prioritizes 5G deals.

Design benchmark reference: Reliance Jio digital simplicity model.

Technical Requirements

Framework:

Vite 

Tailwind CSS

Use next/image

Use static mock data only

Performance:

Use WebP or AVIF placeholders

No heavy animations

No external font loading, use system font stack

Keep layout simple and GPU friendly

Page Architecture

The page must follow a strict full screen vertical scroll snap structure.

Main container must use:

h-screen
overflow-y-scroll
snap-y
snap-mandatory
scroll-smooth

Each section must use:

h-screen
snap-start
flex
items-center
justify-center

No partial height sections.

Color System

Background:
Black or very dark gray

Primary CTA:
Yes Magenta, use a strong pink tone

Structural accents:
YTL Blue, use for borders and icons

Text:
White or light gray only

Do not introduce additional colors.

Navigation

Create a sticky header:

Fixed at top

Height max 72px

Backdrop blur glass effect

Semi transparent dark background

Logo text on left: YES

Hamburger icon on right

Hamburger opens a simple full screen overlay menu with flat links:

Devices
5G Plans
Broadband
Gaming
Support

No dropdowns. No nested menus.

Section 1: Hero

Purpose:
Immediate brand hook and clarity.

Content:
Headline: Uncap Yourself
Subtext: Malaysia’s 5G network without limits
Primary CTA button: Explore Deals

Layout:

Centered vertically and horizontally

Large bold typography

Single CTA only

Subtle dark gradient background

No product images

No rotating banners

Acceptance rule:
Headline and CTA visible instantly on load without scroll.

Section 2: Deals Hub

Purpose:
Replace all promotional banners with a horizontal swipeable card strip.

Structure:
A horizontal scroll container inside the full screen section.

Container must use:
flex
overflow-x-auto
snap-x
snap-mandatory
gap-6
px-6

Each card must use:
min-w-[85%]
snap-start
rounded-xl
p-6
border
shadow-lg

Card design:

High resolution product image at top

Device name

Price per month

Buy Now button

Mock cards required:

iPhone 17

Samsung S26

Yes 5G Plan RM58

Use placeholder images.

Card styling:

Border or glow in blue tone

Buy Now button in magenta

Clear price hierarchy

Rules:

No auto scrolling

First card must be fully visible when section loads

Must feel like premium product cards

Acceptance rule:
Top deal identifiable in under 1 second.

Section 3: Action Grid

Purpose:
Utility acceleration.

Layout:
Grid with 2 columns.
Use gap-6.
Centered content.

Items required:
Coverage Checker
Speed Test
Reload
Switch to Yes

Each grid item:

Large icon placeholder

Label below

Large tap area

Rounded container

Subtle blue border

Minimum tap size visually large enough for mobile comfort.

No small micro text.

Section 4: Ecosystem

Choose Yes Gaming focus.

Reference integration conceptually with GeForce NOW.

Layout:

Full screen background image

Dark overlay

Headline: Yes 5G Gaming

Subtext: Console level gaming without the console

CTA: Start Playing

Single CTA only.

No secondary content.

UX Rules

Strict 2 tap principle:
All major actions must be reachable within two taps from landing.

No clutter.
No secondary banners.
No popups.
No carousels.
No auto animations.

Desktop can stack normally but prioritize mobile viewport width first.

File Structure

Use a single page.tsx file for the landing page.

Create small functional components inside the same file if needed:
Header
Hero
DealsSection
ActionGrid
Ecosystem

Keep everything in one file for speed.