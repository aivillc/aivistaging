# APOLLO.IO WEBSITE REPLICATION - COMPLETE AI PROMPT

## OBJECTIVE
Create a pixel-perfect, fully functional replica of the Apollo.io homepage (https://www.apollo.io/) as a single-page HTML file with inline CSS and JavaScript. Every element must match the original exactly - no approximations or "similar" alternatives.

---

## 1. TYPOGRAPHY SPECIFICATIONS

### Font Family
- **Primary Font**: Inter (Google Fonts)
- **Import Link**: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap`
- **Font Weights Required**: 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold), 800 (Extra-Bold)
- **Font Smoothing**: 
  - `-webkit-font-smoothing: antialiased`
  - `-moz-osx-font-smoothing: grayscale`

### Font Size Scale (Exact Measurements)
```
Hero Title: 72px
Section Titles (Large): 56px
Section Titles (Medium): 48px
Testimonial Quote: 48px
Feature Card Title: 20px
Body Text (Large): 20px
Body Text (Standard): 18px
Body Text (Medium): 16px
Navigation Links: 15px
Button Text: 15px
Body Text (Small): 14px
Caption Text: 13px
Uppercase Labels: 12-13px
```

### Font Weight Assignments
```
Hero Title: 700
Section Titles: 700
Testimonial: 600
Feature Titles: 600
Button Text: 600
Navigation: 500
Body Text: 400
Labels: 600 (uppercase sections)
```

### Letter Spacing
```
Hero Title: -0.03em
Section Titles: -0.02em
Standard Text: -0.01em
Uppercase Labels: 0.08em
Stats Numbers: -0.03em to -0.04em
```

### Line Heights
```
Hero Title: 1.1
Section Titles: 1.2
Testimonial: 1.3
Body Text: 1.6
Stats Numbers: 1.0
```

---

## 2. COLOR PALETTE (EXACT HEX VALUES)

### Primary Colors
```css
--primary-yellow: #E8FC3F;
--primary-black: #1E1E1E;
--dark-gray: #2B2B2B;
--medium-gray: #565656;
--light-gray: #F5F5F5;
--off-white: #FAFAFA;
--border-gray: #E5E5E5;
--text-primary: #1E1E1E;
--text-secondary: #565656;
--white: #FFFFFF;
```

### Color Usage Map
```
Background (Main): #FFFFFF
Background (Alternate Sections): #F5F5F5
Text (Headings): #1E1E1E
Text (Body/Secondary): #565656
Primary CTA Button: #E8FC3F (background), #1E1E1E (text)
Secondary Button: #FFFFFF (background), #E5E5E5 (border), #1E1E1E (text)
Borders: #E5E5E5
Navigation Background: rgba(250, 250, 250, 0.85)
Links (Hover): opacity: 0.7
Card Hover Background: #FFFFFF
```

---

## 3. LAYOUT & SPACING SYSTEM

### Container Widths
```
Maximum Content Width: 1440px
Navigation Container: 1440px
Content Padding (Desktop): 64px horizontal
Content Padding (Tablet): 32px horizontal
Content Padding (Mobile): 16px horizontal
```

### Section Padding (Vertical)
```
Large Sections: 120px top and bottom
Medium Sections: 80px top and bottom
Small Sections: 60px top and bottom
Navigation Height: 72px
Hero Top Padding: 180px (to account for fixed nav)
Hero Bottom Padding: 120px
```

### Grid Gaps
```
Tight Gap: 12px (form elements, button groups)
Standard Gap: 24px (feature cards)
Medium Gap: 32px (customer cards)
Large Gap: 48px (stats cards, company logos)
Extra Large Gap: 80px (two-column layouts)
```

### Border Radius Scale
```
Buttons/Inputs: 8px
Feature Icons: 12px
Cards: 16px
Large Images/Sections: 16px-24px
Avatar Images: 50% (circular)
Logo Icon: 50% (circular)
```

### Box Shadows
```
Button Primary (Default): 0 2px 8px rgba(232, 252, 63, 0.3)
Button Primary (Hover): 0 4px 12px rgba(232, 252, 63, 0.4)
Card (Hover): 0 12px 40px rgba(0, 0, 0, 0.08)
Navigation (Scrolled): 0 2px 20px rgba(0, 0, 0, 0.05)
Hero Image: 0 20px 60px rgba(0, 0, 0, 0.15)
Product Screenshot: 0 20px 60px rgba(0, 0, 0, 0.15)
```

---

## 4. COMPONENT SPECIFICATIONS

### 4.1 NAVIGATION BAR

**Structure:**
```
Position: fixed, top: 0, left: 0, right: 0, z-index: 1000
Height: 72px
Background: rgba(250, 250, 250, 0.85)
Backdrop Filter: blur(20px)
Border Bottom: 1px solid rgba(229, 229, 229, 0.8)
```

**Left Side - Logo:**
```
Display: flex, align-items: center, gap: 8px
Icon: 
  - Size: 28px × 28px
  - Background: #E8FC3F
  - Border Radius: 50%
  - Content: ✦ symbol (16px, centered)
Text: "Apollo"
  - Font Size: 24px
  - Font Weight: 600
  - Color: #1E1E1E
```

**Center - Navigation Links:**
```
Links: Solutions, Roles, Resources, Pricing
Font Size: 15px
Font Weight: 500
Color: #1E1E1E
Gap: 32px between items
Letter Spacing: -0.01em
Hover: opacity 0.7, transition 0.2s ease
```

**Right Side - Actions:**
```
"Log in" link:
  - Font Size: 15px
  - Font Weight: 500
  - Color: #1E1E1E

"Get a demo" button:
  - Background: #FFFFFF
  - Border: 1px solid #E5E5E5
  - Padding: 10px 20px
  - Border Radius: 8px
  - Font Size: 15px
  - Font Weight: 600

"Sign up for free" button:
  - Background: #E8FC3F
  - Color: #1E1E1E
  - Padding: 10px 20px
  - Border Radius: 8px
  - Font Size: 15px
  - Font Weight: 600
  - Box Shadow: 0 2px 8px rgba(232, 252, 63, 0.3)

Gap: 12px between elements
```

**Scroll Behavior:**
```javascript
When scrollY > 100px:
  - Background: rgba(250, 250, 250, 0.95)
  - Box Shadow: 0 2px 20px rgba(0, 0, 0, 0.05)
Transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
```

### 4.2 HERO SECTION

**Layout:**
```
Padding: 180px (top) 120px (bottom) 64px (horizontal)
Max Width: 1440px
Text Align: center
```

**Title:**
```
Text: "The AI sales platform for smarter, faster revenue growth"
Font Size: 72px
Font Weight: 700
Line Height: 1.1
Letter Spacing: -0.03em
Color: #1E1E1E
Margin Bottom: 24px
```

**Subtitle:**
```
Text: "Build pipeline smarter, close deals faster, and simplify your tech stack with a unified platform built for modern sales and marketing teams."
Font Size: 20px
Line Height: 1.6
Color: #565656
Max Width: 720px
Margin: 0 auto 48px auto
Letter Spacing: -0.01em
```

**Email Signup Form:**
```
Display: flex
Gap: 12px
Max Width: 480px
Margin: 0 auto 24px

Input Field:
  - Placeholder: "Enter email"
  - Min Width: 280px
  - Padding: 14px 20px
  - Font Size: 16px
  - Border: 1px solid #E5E5E5
  - Border Radius: 8px
  - Font Family: inherit
  Focus State:
    - Border Color: #E8FC3F
    - Box Shadow: 0 0 0 3px rgba(232, 252, 63, 0.1)

Submit Button:
  - Text: "Sign up for free"
  - Background: #E8FC3F
  - Color: #1E1E1E
  - Padding: 14px 20px
  - Font Size: 16px
  - Font Weight: 600
  - Border Radius: 8px
  - Border: none
```

**Divider:**
```
Text: "or"
Font Size: 15px
Color: #565656
Margin: 12px 0
```

**Social Login Buttons:**
```
Display: flex
Gap: 12px
Max Width: 480px
Margin: 0 auto 24px

Google Button:
  - Text: "Sign up with Google"
  - Icon: Google logo (18px, colors: #4285F4, #34A853, #FBBC05, #EA4335)
  - Background: #FFFFFF
  - Border: 1px solid #E5E5E5
  - Min Width: 200px (flex: 1)
  - Padding: 12px 24px
  - Border Radius: 8px
  - Gap: 8px between icon and text

Microsoft Button:
  - Text: "Sign up with Microsoft"
  - Icon: Microsoft logo (18px, 4 colored squares)
  - Same styling as Google button

Hover State (both):
  - Background: #F5F5F5
  - Transform: translateY(-1px)
  - Transition: all 0.2s ease
```

**Terms Text:**
```
Text: "By signing up, I agree to Apollo's Terms of Service and Privacy Policy."
Font Size: 13px
Color: #565656
Margin Top: 24px
Links: underlined, same color
```

**Hero Image:**
```
Margin Top: 80px
Border Radius: 16px
Box Shadow: 0 20px 60px rgba(0, 0, 0, 0.15)
Width: 100%
Overflow: hidden
Image: Platform dashboard screenshot/mockup
```

### 4.3 SOCIAL PROOF SECTION

**Container:**
```
Padding: 80px 64px
Background: #F5F5F5
Max Width: 1440px
Margin: 0 auto
```

**Header:**
```
Text: "JOIN OVER 500,000 COMPANIES USING APOLLO"
Font Size: 13px
Font Weight: 600
Letter Spacing: 0.08em
Text Transform: uppercase
Color: #565656
Margin Bottom: 40px
Text Align: center
```

**Company Logos:**
```
Display: flex
Justify Content: center
Flex Wrap: wrap
Gap: 48px
Align Items: center

Each Logo:
  - Height: 32px
  - Width: auto
  - Filter: grayscale(100%)
  - Opacity: 0.6
  - Transition: all 0.3s ease
  
  Hover State:
    - Filter: grayscale(0%)
    - Opacity: 1

Logos Required:
  1. Autodesk
  2. Dolby
  3. Smartling
  4. Reddit
  5. Anthropic
  6. Kandji
  7. DocuSign
```

### 4.4 TESTIMONIAL SECTION

**Container:**
```
Padding: 120px 64px
Max Width: 1200px
Margin: 0 auto
```

**Quote:**
```
Text: "Every rep is more productive with Apollo. We booked 75% more meetings while cutting manual work in half."
Font Size: 48px
Font Weight: 600
Line Height: 1.3
Letter Spacing: -0.02em
Color: #1E1E1E
Margin Bottom: 40px
```

**Author Section:**
```
Display: flex
Gap: 16px
Align Items: center

Author Info Container:
  - Display: flex, flex-direction: column
  - Gap: 4px

Author Name:
  - Text: "ANDREW FRONING"
  - Font Size: 15px
  - Font Weight: 600
  - Letter Spacing: -0.01em
  - Text Transform: uppercase

Author Title:
  - Text: "BDR LEADER"
  - Font Size: 15px
  - Color: #565656

Company Logo:
  - Brand: Cyera
  - Height: 24px
  - Margin Top: 8px
  - Opacity: 0.8
```

### 4.5 STATS CARDS SECTION

**Container:**
```
Padding: 80px 64px
Max Width: 1440px
Margin: 0 auto
Display: grid
Grid Template Columns: repeat(3, 1fr)
Gap: 48px
```

**Individual Card:**
```
Background: #FFFFFF
Padding: 40px
Border: 1px solid #E5E5E5
Border Radius: 16px
Transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)

Hover State:
  - Transform: translateY(-4px)
  - Box Shadow: 0 12px 40px rgba(0, 0, 0, 0.08)
```

**Card Content:**
```
Label:
  - Font Size: 14px
  - Color: #565656
  - Margin Bottom: 12px
  - Letter Spacing: -0.01em

Value:
  - Font Size: 64px
  - Font Weight: 700
  - Letter Spacing: -0.03em
  - Color: #1E1E1E
  - Line Height: 1

Company Logo:
  - Margin Top: 24px
  - Opacity: 0.6
  - Height: auto (approximately 24-30px)
```

**Three Cards Data:**
```
Card 1:
  - Label: "70% increase in sales leads"
  - Value: "70%"
  - Company: Customer.io logo

Card 2:
  - Label: "4X SDR efficiency"
  - Value: "4x"
  - Company: GTM Ops logo

Card 3:
  - Label: "64% lower tech stack costs"
  - Value: "64%"
  - Company: Census logo
```

### 4.6 FEATURES HEADER SECTION

**Container:**
```
Padding: 120px (top) 60px (bottom) 64px (horizontal)
Max Width: 1440px
Margin: 0 auto
Text Align: center
```

**Title:**
```
Text: "Everything you need, from finding leads to winning deals"
Font Size: 48px
Font Weight: 700
Line Height: 1.2
Letter Spacing: -0.02em
Margin Bottom: 16px
```

**Subtitle:**
```
Text: "Powered by Apollo Data — one of the largest, most accurate business data networks on the planet."
Font Size: 18px
Color: #565656
Max Width: 640px
Margin: 0 auto
Line Height: 1.6
```

### 4.7 FEATURES GRID

**Container:**
```
Padding: 60px (top) 120px (bottom) 64px (horizontal)
Max Width: 1440px
Margin: 0 auto
Display: grid
Grid Template Columns: repeat(4, 1fr)
Gap: 24px
```

**Feature Card:**
```
Background: #F5F5F5
Padding: 40px (vertical) 32px (horizontal)
Border Radius: 16px
Transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)

Hover State:
  - Background: #FFFFFF
  - Box Shadow: 0 8px 32px rgba(0, 0, 0, 0.08)
  - Transform: translateY(-4px)
```

**Card Content:**
```
Icon Container:
  - Width: 48px
  - Height: 48px
  - Background: #1E1E1E
  - Border Radius: 12px
  - Display: flex, center aligned
  - Margin Bottom: 24px
  - Font Size: 24px (emoji)

Title:
  - Font Size: 20px
  - Font Weight: 600
  - Margin Bottom: 12px
  - Letter Spacing: -0.01em

Description:
  - Font Size: 15px
  - Color: #565656
  - Line Height: 1.6
```

**Four Features Data:**
```
Feature 1 - Outbound:
  - Icon: 📡 (or RSS/broadcast icon)
  - Title: "Outbound"
  - Description: "Book more meetings faster with better data, smarter AI, and easier automation."

Feature 2 - Inbound:
  - Icon: 📥 (or inbox icon)
  - Title: "Inbound"
  - Description: "Capture, qualify, and route every lead instantly so hot leads never go cold."

Feature 3 - Data Enrichment:
  - Icon: 💎 (or diamond/sparkle icon)
  - Title: "Data Enrichment"
  - Description: "Cleanse and complete your records with always-fresh data that powers smarter targeting."

Feature 4 - Deal Execution:
  - Icon: 🎯 (or target icon)
  - Title: "Deal Execution"
  - Description: "Keep deals moving with AI-powered prep, meeting insights, and follow-up."
```

### 4.8 PRODUCT SHOWCASE SECTION

**Container:**
```
Padding: 120px 64px
Max Width: 1440px
Margin: 0 auto
Display: grid
Grid Template Columns: 1fr 1fr
Gap: 80px
Align Items: center
```

**Content Side (Left):**
```
Heading:
  - Text: "Turn hours of prospecting into minutes"
  - Font Size: 56px
  - Font Weight: 700
  - Line Height: 1.2
  - Letter Spacing: -0.02em
  - Margin Bottom: 32px

Button Group:
  - Display: flex
  - Gap: 12px
  - Margin Top: 32px
  
  Primary Button:
    - Text: "Get started for free"
    - Background: #E8FC3F
    - Color: #1E1E1E
    - Padding: 10px 20px
    - Border Radius: 8px
    - Font Weight: 600
  
  Secondary Button:
    - Text: "Learn more"
    - Background: #FFFFFF
    - Border: 1px solid #E5E5E5
    - Padding: 10px 20px
    - Border Radius: 8px
    - Font Weight: 600
```

**Image Side (Right):**
```
Border Radius: 16px
Overflow: hidden
Box Shadow: 0 20px 60px rgba(0, 0, 0, 0.15)
Width: 100%
Image: Apollo Assistant interface showing multi-channel campaign creation
```

### 4.9 PRODUCT TABS SECTION

**Container:**
```
Padding: 80px (top) 40px (bottom) 64px (horizontal)
Max Width: 1440px
Margin: 0 auto
```

**Tab Navigation:**
```
Display: flex
Gap: 0
Border Bottom: 1px solid #E5E5E5
Margin Bottom: 60px
Overflow X: auto (for mobile)
```

**Tab Button:**
```
Padding: 16px 32px
Font Size: 15px
Font Weight: 600
Background: transparent
Border: none
Border Bottom: 3px solid transparent
Cursor: pointer
White Space: nowrap
Letter Spacing: -0.01em
Color: #565656
Transition: all 0.2s ease

Active State:
  - Color: #1E1E1E
  - Border Bottom Color: #E8FC3F

Hover State:
  - Color: #1E1E1E
```

**Four Tabs:**
```
1. OUTBOUND
2. INBOUND
3. DATA ENRICHMENT
4. DEAL EXECUTION (default active)
```

### 4.10 DEAL EXECUTION SECTION

**Container:**
```
Padding: 80px 64px
Max Width: 1440px
Margin: 0 auto
Display: grid
Grid Template Columns: 1fr 1fr
Gap: 80px
Align Items: center
```

**Content Side (Left):**
```
Heading:
  - Text: "Capture every conversation, accelerate every deal"
  - Font Size: 48px
  - Font Weight: 700
  - Line Height: 1.2
  - Letter Spacing: -0.02em
  - Margin Bottom: 48px

Button Group:
  - Same as Product Showcase section

Feature List:
  - Margin Top: 48px
  - Display: flex, flex-direction: column
  - Gap: 24px between items
```

**Feature List Item:**
```
Display: flex
Gap: 16px
Align Items: flex-start

Checkmark Icon:
  - Width: 24px
  - Height: 24px
  - Flex Shrink: 0
  - Margin Top: 2px
  - SVG checkmark in current color

Text:
  - Font Size: 16px
  - Line Height: 1.6
  - Color: #565656
```

**Four Features:**
```
1. "Pre-meeting insights to prep in seconds"
2. "AI-powered call summaries, follow-ups, and task creation"
3. "Pipeline boards & real-time deal alerts"
4. "Conversation insights & performance dashboards for coaching"
```

**Image Side (Right):**
```
Border Radius: 16px
Overflow: hidden
Box Shadow: 0 20px 60px rgba(0, 0, 0, 0.15)
Image: Apollo interface showing meeting insights and AI assistant
Background: Dark interface with light modal/overlay
```

### 4.11 CUSTOMERS SECTION

**Container:**
```
Padding: 120px 64px
Max Width: 1440px
Margin: 0 auto
Text Align: center
```

**Title:**
```
Text: "The fastest growing businesses use Apollo"
Font Size: 48px
Font Weight: 700
Line Height: 1.2
Letter Spacing: -0.02em
Margin Bottom: 16px
```

**Subtitle:**
```
Text: "Over 500,000 companies use Apollo to stay ahead of the competition."
Font Size: 18px
Color: #565656
Margin Bottom: 80px
```

**Large Number Display:**
```
Text: "500k+"
Font Size: 120px
Font Weight: 700
Letter Spacing: -0.04em
Line Height: 1
Margin Bottom: 80px
Color: #1E1E1E
```

**Customer Cards Grid:**
```
Display: grid
Grid Template Columns: repeat(4, 1fr)
Gap: 32px
Margin Bottom: 40px
```

**Customer Card:**
```
Background: #FFFFFF
Border: 1px solid #E5E5E5
Border Radius: 16px
Padding: 32px
Text Align: center
Transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)

Hover State:
  - Transform: translateY(-4px)
  - Box Shadow: 0 12px 40px rgba(0, 0, 0, 0.08)
```

**Card Content:**
```
Category Label:
  - Font Size: 12px
  - Font Weight: 600
  - Letter Spacing: 0.08em
  - Text Transform: uppercase
  - Color: #565656
  - Margin Bottom: 20px

Avatar:
  - Width: 80px
  - Height: 80px
  - Border Radius: 50%
  - Margin: 0 auto 20px
  - Background: #F5F5F5 (placeholder)

Name:
  - Font Size: 16px
  - Font Weight: 600
  - Margin Bottom: 4px

Role:
  - Font Size: 14px
  - Color: #565656
  - Margin Bottom: 16px

Company Logo:
  - Height: 24px
  - Margin Top: 16px
  - Opacity: 0.6
  - Display: block
  - Margin: 16px auto 0
```

**Four Customer Cards Data:**
```
Card 1:
  - Category: "SALES LEADERS"
  - Name: "Nicole Goetzer"
  - Role: "Head of Sales Development"
  - Company: Kinsta logo

Card 2:
  - Category: "ACCOUNT EXECS"
  - Name: "Diego Cobian"
  - Role: "Account Executive"
  - Company: Arbolus logo

Card 3:
  - Category: "SDRS"
  - Name: "Andrew Froning"
  - Role: "BDR Leader"
  - Company: Cyera logo

Card 4:
  - Category: "REV OPS"
  - Name: "Mark Turner"
  - Role: "VP of Revenue Operations"
  - Company: Built In logo
```

**Navigation Arrows:**
```
Position: absolute or relative at bottom
Display: flex
Gap: 12px
Right: 0 (or centered)

Arrow Buttons:
  - Width: 48px
  - Height: 48px
  - Border: 1px solid #E5E5E5
  - Border Radius: 50%
  - Background: #FFFFFF
  - Cursor: pointer
  - Display: flex, center aligned
  - Transition: all 0.2s ease
  
  Hover:
    - Background: #F5F5F5
    - Transform: scale(1.05)
```

### 4.12 PRICING CTA SECTION

**Container:**
```
Padding: 120px 64px
Max Width: 1440px
Margin: 0 64px (to create spacing from edge)
Background: #F5F5F5
Border Radius: 24px
Display: grid
Grid Template Columns: 1fr 1fr
Gap: 80px
Align Items: center
```

**Content Side (Left):**
```
Heading:
  - Text: "The best AI sales platform in the world, at a price you just can't beat"
  - Font Size: 56px
  - Font Weight: 700
  - Line Height: 1.2
  - Letter Spacing: -0.02em
  - Margin Bottom: 24px

Description:
  - Text: "You don't have to spend a fortune to run a world-class revenue-generating machine. Replace ZoomInfo, Outreach, Salesloft, Gong, Chili Piper, and more with Apollo to save a fortune and get better results."
  - Font Size: 16px
  - Line Height: 1.6
  - Color: #565656
  - Margin Bottom: 32px

Button Group:
  - Display: flex
  - Gap: 12px
  
  Primary Button:
    - Text: "See pricing"
    - Background: #1E1E1E (note: black, not yellow)
    - Color: #FFFFFF
  
  Secondary Button:
    - Text: "Sign up for free"
    - Background: #FFFFFF
    - Border: 1px solid #E5E5E5
```

**Image Side (Right):**
```
Border Radius: 16px
Overflow: hidden
Width: 100%
Image: Person smiling at laptop with coffee in modern office setting
Photo should convey: professional, friendly, productive atmosphere
```

### 4.13 FAQ SECTION

**Container:**
```
Padding: 120px 64px
Max Width: 1200px
Margin: 0 auto
Display: grid
Grid Template Columns: 1fr 2fr
Gap: 80px
```

**Left Column - Title:**
```
Text: "Frequently asked questions"
Font Size: 48px
Font Weight: 700
Line Height: 1.2
Letter Spacing: -0.02em
Align Self: start
```

**Right Column - FAQ List:**
```
Display: flex
Flex Direction: column
Gap: 0
```

**FAQ Item:**
```
Border Top: 1px solid #E5E5E5
Padding: 32px 0
Cursor: pointer
Transition: all 0.2s ease

Last Child:
  - Border Bottom: 1px solid #E5E5E5
```

**FAQ Question Row:**
```
Display: flex
Justify Content: space-between
Align Items: center

Question Text:
  - Font Size: 18px
  - Font Weight: 600
  - Letter Spacing: -0.01em
  - Color: #1E1E1E

Icon:
  - Font Size: 24px
  - Color: #565656
  - Content: "+" (collapsed) or "−" (expanded)
  - Transition: transform 0.2s ease

Hover State:
  - Question Color: #1E1E1E (darker/emphasized)
```

**Ten FAQ Questions:**
```
1. "Does Apollo.io provide a large and rich B2B contact and company database?"
2. "Can Apollo.io enable highly precise lead targeting via advanced filtering?"
3. "Does Apollo.io automate outreach sequences and follow-ups?"
4. "Does Apollo.io integrate smoothly with CRMs and existing sales tools?"
5. "Does Apollo.io offer strong analytics and reporting on outreach performance?"
6. "Is Apollo.io good value for its cost, especially for growing sales teams?"
7. "Does Apollo.io support users with helpful educational resources and onboarding?"
8. "Can Apollo.io help reduce time spent on manual prospecting?"
9. "Does Apollo.io improve the quality of sales pipelines?"
10. "Can Apollo.io scale with a business as sales needs grow?"
```

### 4.14 FOOTER

**Container:**
```
Background: #F5F5F5
Padding: 80px (top) 40px (bottom) 64px (horizontal)
```

**Footer Grid:**
```
Max Width: 1440px
Margin: 0 auto
Display: grid
Grid Template Columns: repeat(5, 1fr)
Gap: 60px
Margin Bottom: 60px
```

**Column 1 - Brand:**
```
Display: flex
Flex Direction: column
Gap: 24px

Logo:
  - Width: 120px (Apollo logo with icon)
  - Same style as header

Copyright:
  - Text: "Apollo © 2025"
  - Font Size: 14px
  - Color: #565656

Legal Links:
  - Display: flex, flex-direction: column
  - Gap: 8px
  - Font Size: 14px
  - Color: #565656
  - Links: "Privacy Policy", "Terms", "Don't Sell My Info"
```

**Column 2 - Get Started:**
```
Title: "Get started"
  - Font Size: 14px
  - Font Weight: 600
  - Margin Bottom: 8px

Links:
  - "Sign up for free"
  - "Pricing"
  - "Request a demo"
  - Font Size: 14px
  - Color: #565656
  - Gap: 16px
```

**Column 3 - Solutions:**
```
Title: "Solutions"

Links:
  - "Outbound"
  - "Inbound"
  - "Data Enrichment"
  - "Deal Execution"
```

**Column 4 - Platform:**
```
Title: "Platform"

Links:
  - "Apollo Data"
  - "Apollo AI"
  - "Integrations"
  - "Chrome Extension"
  - "Workflow Automation"
  - "Security"
```

**Column 5 - Roles:**
```
Title: "Roles"

Links:
  - "Sales Leaders"
  - "Account Executives"
  - "Sales Development"
  - "Founders"
  - "Marketing"
  - "Revenue Operations"
```

**Footer Link Styles:**
```
Font Size: 14px
Color: #565656
Text Decoration: none
Transition: color 0.2s ease

Hover:
  - Color: #1E1E1E
```

**Footer Bottom:**
```
Max Width: 1440px
Margin: 0 auto
Padding Top: 40px
Border Top: 1px solid #E5E5E5
Display: flex
Justify Content: space-between
Align Items: center
```

---

## 5. ANIMATIONS & INTERACTIONS

### 5.1 Scroll-Triggered Fade-In Animation

**Setup:**
```javascript
// IntersectionObserver Configuration
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Apply to all elements with class 'scroll-animate'
document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
});
```

**CSS:**
```css
.scroll-animate {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-animate.visible {
    opacity: 1;
    transform: translateY(0);
}
```

**Apply to These Sections:**
- Hero image
- Testimonial section
- Each stat card (stagger delay optional)
- Features header
- Each feature card
- Product showcase sections
- Deal execution section
- Customer section
- Pricing CTA
- FAQ section

### 5.2 Navigation Scroll Effect

**JavaScript:**
```javascript
let lastScroll = 0;
const nav = document.querySelector('.navigation');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.background = 'rgba(250, 250, 250, 0.95)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    } else {
        nav.style.background = 'rgba(250, 250, 250, 0.85)';
        nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});
```

### 5.3 Button Hover Effects

**Primary Button (Yellow):**
```css
.btn-primary {
    background: #E8FC3F;
    color: #1E1E1E;
    box-shadow: 0 2px 8px rgba(232, 252, 63, 0.3);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
    background: #dfe836;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(232, 252, 63, 0.4);
}
```

**Secondary Button (White):**
```css
.btn-secondary {
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    color: #1E1E1E;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-secondary:hover {
    background: #F5F5F5;
    transform: translateY(-1px);
}
```

**Social Buttons:**
```css
.btn-social {
    background: white;
    border: 1px solid #E5E5E5;
    transition: all 0.2s ease;
}

.btn-social:hover {
    background: #F5F5F5;
    transform: translateY(-1px);
}
```

### 5.4 Card Hover Effects

**Feature Cards:**
```css
.feature-card {
    background: #F5F5F5;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover {
    background: #FFFFFF;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    transform: translateY(-4px);
}
```

**Stats Cards & Customer Cards:**
```css
.stat-card, .customer-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.stat-card:hover, .customer-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
}
```

### 5.5 Link Hover Effects

**Navigation Links:**
```css
.nav-link {
    transition: opacity 0.2s ease;
}

.nav-link:hover {
    opacity: 0.7;
}
```

**Footer Links:**
```css
.footer-link {
    color: #565656;
    transition: color 0.2s ease;
}

.footer-link:hover {
    color: #1E1E1E;
}
```

### 5.6 Input Focus Effects

**Email Input:**
```css
.email-input {
    border: 1px solid #E5E5E5;
    transition: all 0.2s ease;
}

.email-input:focus {
    outline: none;
    border-color: #E8FC3F;
    box-shadow: 0 0 0 3px rgba(232, 252, 63, 0.1);
}
```

### 5.7 Tab Switching

**JavaScript:**
```javascript
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all tabs
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        // Add active class to clicked tab
        this.classList.add('active');
    });
});
```

**CSS:**
```css
.tab-button {
    border-bottom: 3px solid transparent;
    color: #565656;
    transition: all 0.2s ease;
}

.tab-button.active {
    color: #1E1E1E;
    border-bottom-color: #E8FC3F;
}

.tab-button:hover {
    color: #1E1E1E;
}
```

### 5.8 FAQ Accordion

**JavaScript:**
```javascript
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', function() {
        const icon = this.querySelector('.faq-icon');
        const isOpen = icon.textContent === '−';
        
        // Close all other FAQs
        document.querySelectorAll('.faq-icon').forEach(i => {
            i.textContent = '+';
        });
        
        // Toggle clicked FAQ
        if (!isOpen) {
            icon.textContent = '−';
        }
    });
});
```

**CSS:**
```css
.faq-item {
    cursor: pointer;
    transition: all 0.2s ease;
}

.faq-icon {
    transition: transform 0.2s ease;
}

.faq-item:hover .faq-question {
    color: #1E1E1E;
}
```

### 5.9 Company Logo Hover

**CSS:**
```css
.company-logo {
    filter: grayscale(100%);
    opacity: 0.6;
    transition: all 0.3s ease;
}

.company-logo:hover {
    filter: grayscale(0%);
    opacity: 1;
}
```

### 5.10 Smooth Scroll

**JavaScript:**
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
```

---

## 6. RESPONSIVE DESIGN BREAKPOINTS

### 6.1 Desktop (> 1200px)
```css
/* Default styles - full layout */
.nav-container,
.hero,
.features-grid,
.customers-section {
    padding-left: 64px;
    padding-right: 64px;
}

.features-grid {
    grid-template-columns: repeat(4, 1fr);
}

.customer-cards {
    grid-template-columns: repeat(4, 1fr);
}

.footer-container {
    grid-template-columns: repeat(5, 1fr);
}
```

### 6.2 Tablet (768px - 1200px)
```css
@media (max-width: 1200px) {
    /* Reduce horizontal padding */
    .nav-container,
    .hero,
    .social-proof,
    .testimonial,
    .stats-section,
    .features-header,
    .features-grid,
    .product-showcase,
    .product-tabs,
    .deal-execution,
    .customers-section,
    .pricing-cta,
    .faq-section,
    .footer {
        padding-left: 32px;
        padding-right: 32px;
    }

    /* Adjust grid layouts */
    .features-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .customer-cards {
        grid-template-columns: repeat(2, 1fr);
    }

    .footer-container {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

### 6.3 Mobile (< 768px)
```css
@media (max-width: 768px) {
    /* Navigation */
    .nav-links {
        display: none; /* Hide desktop menu */
    }

    .nav-actions {
        gap: 8px;
    }

    .btn {
        padding: 8px 16px;
        font-size: 14px;
    }

    /* Hero */
    .hero {
        padding-left: 16px;
        padding-right: 16px;
    }

    .hero-title {
        font-size: 48px;
    }

    .hero-subtitle {
        font-size: 18px;
    }

    .hero-form {
        flex-direction: column;
        width: 100%;
    }

    .email-input {
        width: 100%;
    }

    .social-buttons {
        flex-direction: column;
        width: 100%;
    }

    .btn-social {
        width: 100%;
    }

    /* Sections */
    .stats-section {
        grid-template-columns: 1fr;
        padding: 60px 16px;
    }

    .features-grid {
        grid-template-columns: 1fr;
        padding: 40px 16px 80px;
    }

    .product-showcase,
    .deal-execution,
    .pricing-cta,
    .faq-section {
        grid-template-columns: 1fr;
        padding: 80px 16px;
    }

    /* Typography adjustments */
    .showcase-content h2,
    .execution-content h2,
    .pricing-content h2 {
        font-size: 36px;
    }

    .testimonial-quote {
        font-size: 32px;
    }

    .customers-highlight {
        font-size: 80px;
    }

    /* Customer cards */
    .customer-cards {
        grid-template-columns: 1fr;
    }

    /* Footer */
    .footer-container {
        grid-template-columns: 1fr;
    }

    .footer-bottom {
        flex-direction: column;
        gap: 20px;
        text-align: center;
    }
}
```

---

## 7. ASSETS REQUIRED

### 7.1 Images

**Hero Section:**
```
Filename: hero-dashboard.png/jpg
Dimensions: Approximately 1200px × 675px
Description: Apollo platform dashboard showing leads, contacts, and sequences
Background: Light interface with data tables and action buttons
```

**Social Proof Logos:**
```
1. autodesk-logo.svg (120px × 40px)
2. dolby-logo.svg (120px × 40px)
3. smartling-logo.svg (120px × 40px)
4. reddit-logo.svg (120px × 40px)
5. anthropic-logo.svg (120px × 40px)
6. kandji-logo.svg (120px × 40px)
7. docusign-logo.svg (120px × 40px)

Format: SVG or PNG with transparent background
Color: Grayscale (will be filtered to grayscale in CSS)
```

**Testimonial Section:**
```
Filename: cyera-logo.svg/png
Dimensions: 100px × 30px (approximate)
Description: Cyera company logo
```

**Stats Section Company Logos:**
```
1. customerio-logo.svg/png (100px × 30px)
2. gtm-ops-logo.svg/png (100px × 30px)
3. census-logo.svg/png (100px × 30px)
```

**Product Showcase:**
```
Filename: apollo-assistant-demo.png/jpg
Dimensions: Approximately 600px × 400px
Description: Apollo AI assistant interface showing campaign creation
Features visible: Multi-channel campaign builder, AI suggestions, target audience filters
Background: Light interface with yellow accent highlighting AI features
```

**Deal Execution Interface:**
```
Filename: deal-execution-interface.png/jpg
Dimensions: Approximately 600px × 500px
Description: Apollo meeting interface with AI insights panel
Features visible: Meeting details, AI-generated insights, attendee information, next steps
Background: Dark/professional interface with light modal overlay
```

**Customer Avatars:**
```
1. nicole-goetzer.jpg (80px × 80px, circular)
2. diego-cobian.jpg (80px × 80px, circular)
3. andrew-froning.jpg (80px × 80px, circular)
4. mark-turner.jpg (80px × 80px, circular)

Format: JPG with professional headshot style
Background: Light, professional, or colored background
```

**Customer Company Logos:**
```
1. kinsta-logo.svg/png (80px × 24px)
2. arbolus-logo.svg/png (80px × 24px)
3. cyera-logo.svg/png (80px × 24px)
4. builtin-logo.svg/png (80px × 24px)
```

**Pricing CTA Image:**
```
Filename: happy-user.jpg
Dimensions: Approximately 600px × 400px
Description: Person (blonde woman) smiling while working on laptop in modern office
Setting: Natural lighting, wooden background, coffee cup visible
Mood: Professional, approachable, successful
```

### 7.2 Icons

**Google Logo (for social login):**
```svg
<svg width="18" height="18" viewBox="0 0 18 18">
    <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"/>
    <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/>
    <path fill="#FBBC05" d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707 0-.593.102-1.17.282-1.709V4.959H.957C.347 6.173 0 7.548 0 9s.348 2.827.957 4.041l3.007-2.334z"/>
    <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.959L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"/>
</svg>
```

**Microsoft Logo (for social login):**
```svg
<svg width="18" height="18" viewBox="0 0 21 21">
    <path fill="#f25022" d="M0 0h10v10H0z"/>
    <path fill="#00a4ef" d="M11 0h10v10H11z"/>
    <path fill="#7fba00" d="M0 11h10v10H0z"/>
    <path fill="#ffb900" d="M11 11h10v10H11z"/>
</svg>
```

**Checkmark Icon (for feature lists):**
```svg
<svg viewBox="0 0 24 24" fill="none">
    <path d="M9 11l3 3L22 4" stroke="currentColor" stroke-width="2"/>
    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" stroke-width="2"/>
</svg>
```

**Feature Icons (emoji alternatives):**
```
Outbound: 📡 or use custom icon
Inbound: 📥 or use custom icon
Data Enrichment: 💎 or use custom icon
Deal Execution: 🎯 or use custom icon
```

---

## 8. TECHNICAL IMPLEMENTATION

### 8.1 HTML Structure Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Apollo.io - The AI sales platform for smarter, faster revenue growth</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    
    <style>
        /* CSS GOES HERE */
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="navigation">
        <!-- Nav content -->
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <!-- Hero content -->
    </section>

    <!-- Social Proof -->
    <section class="social-proof">
        <!-- Social proof content -->
    </section>

    <!-- Testimonial -->
    <section class="testimonial scroll-animate">
        <!-- Testimonial content -->
    </section>

    <!-- Stats -->
    <section class="stats-section">
        <!-- Stats cards -->
    </section>

    <!-- Features Header -->
    <section class="features-header scroll-animate">
        <!-- Features header content -->
    </section>

    <!-- Features Grid -->
    <section class="features-grid">
        <!-- Feature cards -->
    </section>

    <!-- Product Showcase -->
    <section class="product-showcase scroll-animate">
        <!-- Showcase content -->
    </section>

    <!-- Product Tabs -->
    <section class="product-tabs">
        <!-- Tab navigation -->
    </section>

    <!-- Deal Execution -->
    <section class="deal-execution scroll-animate">
        <!-- Deal execution content -->
    </section>

    <!-- Customers -->
    <section class="customers-section scroll-animate">
        <!-- Customer cards -->
    </section>

    <!-- Pricing CTA -->
    <section class="pricing-cta scroll-animate">
        <!-- Pricing content -->
    </section>

    <!-- FAQ -->
    <section class="faq-section scroll-animate">
        <!-- FAQ items -->
    </section>

    <!-- Footer -->
    <footer class="footer">
        <!-- Footer content -->
    </footer>

    <script>
        /* JAVASCRIPT GOES HERE */
    </script>
</body>
</html>
```

### 8.2 CSS Reset & Base Styles

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-yellow: #E8FC3F;
    --primary-black: #1E1E1E;
    --dark-gray: #2B2B2B;
    --medium-gray: #565656;
    --light-gray: #F5F5F5;
    --off-white: #FAFAFA;
    --border-gray: #E5E5E5;
    --text-primary: #1E1E1E;
    --text-secondary: #565656;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    color: var(--text-primary);
    background: white;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
```

### 8.3 Image Placeholder Format

For development/testing, use this format for placeholder images:
```
/api/placeholder/[width]/[height]

Examples:
Hero: /api/placeholder/1200/675
Product: /api/placeholder/600/400
Avatar: /api/placeholder/80/80
Logo: /api/placeholder/120/40
```

### 8.4 Performance Considerations

```css
/* Use transforms for animations (GPU accelerated) */
.card:hover {
    transform: translateY(-4px); /* Good */
    /* top: -4px; */ /* Bad - avoid */
}

/* Use will-change sparingly for frequently animated elements */
.scroll-animate {
    will-change: opacity, transform;
}

/* Remove will-change after animation completes */
.scroll-animate.visible {
    will-change: auto;
}
```

---

## 9. FINAL DELIVERABLE CHECKLIST

### Must Have:
- ✅ Single HTML file with all code
- ✅ Exact Inter font implementation (400, 500, 600, 700, 800 weights)
- ✅ All exact color values from palette
- ✅ Exact font sizes and letter spacing
- ✅ All 14 sections in correct order
- ✅ Fixed navigation with blur effect
- ✅ Scroll-triggered animations on all marked sections
- ✅ Hover effects on all interactive elements
- ✅ Tab switching functionality
- ✅ FAQ accordion functionality
- ✅ Smooth scrolling
- ✅ Responsive design (desktop, tablet, mobile)
- ✅ Navigation scroll behavior
- ✅ All button styles and hover states
- ✅ Form input focus states
- ✅ Grid layouts matching original
- ✅ Proper spacing and padding throughout
- ✅ Box shadows matching specifications
- ✅ Border radius on all elements
- ✅ Transition timings and easing functions
- ✅ Image placeholders in correct dimensions

### Nice to Have:
- Staggered animation delays for lists
- Image lazy loading
- Optimized for performance
- Accessibility features (ARIA labels, focus states)
- Print styles
- Cookie consent banner (as shown in original)

---

## 10. TESTING REQUIREMENTS

Before considering complete, test the following:

### Visual Testing:
1. Compare side-by-side with Apollo.io screenshots
2. Check font rendering at different sizes
3. Verify color accuracy with color picker tool
4. Confirm spacing matches with ruler/measurement tool

### Interaction Testing:
1. All buttons clickable and hover correctly
2. Navigation scrolls smoothly
3. Tabs switch properly
4. FAQ accordion expands/collapses
5. Form inputs focus correctly
6. All links work (even if to #)

### Responsive Testing:
1. Desktop (1920px, 1440px, 1280px)
2. Tablet (1024px, 768px)
3. Mobile (414px, 375px, 360px)
4. Landscape orientations

### Browser Testing:
1. Chrome/Edge (latest)
2. Firefox (latest)
3. Safari (latest)
4. Mobile Safari (iOS)
5. Chrome Mobile (Android)

### Performance Testing:
1. PageSpeed Insights score > 90
2. All animations smooth (60fps)
3. No layout shifts
4. Fast initial load

---

## 11. COMPLETE CODE STRUCTURE

The final file should be structured as:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags -->
    <!-- Google Fonts link -->
    <style>
        /* 1. CSS Reset */
        /* 2. CSS Variables */
        /* 3. Base styles */
        /* 4. Navigation styles */
        /* 5. Hero styles */
        /* 6. Social proof styles */
        /* 7. Testimonial styles */
        /* 8. Stats styles */
        /* 9. Features styles */
        /* 10. Product showcase styles */
        /* 11. Tabs styles */
        /* 12. Deal execution styles */
        /* 13. Customers styles */
        /* 14. Pricing CTA styles */
        /* 15. FAQ styles */
        /* 16. Footer styles */
        /* 17. Animation keyframes */
        /* 18. Utility classes */
        /* 19. Responsive breakpoints */
    </style>
</head>
<body>
    <!-- All HTML sections in order -->
    
    <script>
        // 1. Scroll animations (IntersectionObserver)
        // 2. Navigation scroll behavior
        // 3. Tab switching
        // 4. FAQ accordion
        // 5. Smooth scroll
        // 6. Any other interactions
    </script>
</body>
</html>
```

---

## ADDITIONAL NOTES

### Brand Voice:
- Professional but approachable
- Confident without being aggressive
- Data-driven messaging
- Focus on efficiency and results

### Image Guidelines:
- Use high-quality, crisp screenshots
- Maintain consistent lighting/mood
- Professional but not corporate/stiff
- Show product in action
- Diverse representation in customer photos

### Accessibility:
- Minimum contrast ratio 4.5:1 for text
- Focus visible states on all interactive elements
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support

### SEO Considerations:
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- Meta description
- Semantic HTML5 elements

---

## QUICK REFERENCE: KEY MEASUREMENTS

```
Navigation Height: 72px
Hero Title: 72px / 700
Hero Padding Top: 180px
Section Padding: 120px vertical, 64px horizontal
Primary Yellow: #E8FC3F
Text Primary: #1E1E1E
Text Secondary: #565656
Background Alt: #F5F5F5
Border: #E5E5E5
Max Width: 1440px
Grid Gaps: 24px, 32px, 48px, 80px
Border Radius: 8px (buttons), 12px (icons), 16px (cards), 24px (large sections)
Transitions: 0.2s (quick), 0.3s (standard), 0.8s (scroll animations)
Easing: cubic-bezier(0.4, 0, 0.2, 1)
```

---

## FINAL INSTRUCTION

Generate a single, complete, production-ready HTML file that includes:
1. All HTML markup for every section
2. Complete CSS with all styles
3. All JavaScript functionality
4. Proper comments throughout
5. Clean, organized, readable code
6. Ready to deploy immediately

The file should open in any modern browser and display a pixel-perfect replica of Apollo.io homepage with all interactions working correctly.
