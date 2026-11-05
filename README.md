Welcome to JK's Best Work so far
A Solo-Built Landing page for Techfinity Security Device Trading.


1. Executive Summary & Stack Architecture
Project Overview: Organic lead generation & Product Showcase of Techfinity's Security Products.

Tech Stack Overview:
Framework: React + Vite + TypeScript (or JavaScript).
Styling & Components: Vanilla CSS.
Form & Data Handling: EmailJS.
Hosting / Deployment: cPanel / static file hosting (including build script references like .cpanel.yml if applicable).


2. Developer Onboarding & Local Setup
Prerequisites: Required Node.js version, package manager (npm or pnpm).

Getting Started:
Clone the repository.
Install dependencies: npm install.
Environment Variables: Define .env.local requirements (e.g., EmailJS Public Key, Service IDs, Template IDs).
Local Server: npm run dev.
Build & Preview: npm run build and npm run preview.


3. Project Directory Structure
Vanilla Directory Structure for the Landing Page:

src/
├── assets/          # Static media (images, icons)
├── components/      # Reusable UI components (Navbar, Footer, Modals)
├── pages/           # Page views / Route components
└── (ungrouped)      # All the other ungrouped main files (main.tsx)


4. Key Workflows & Data Flow
Form Submissions: How user inquiries or quote requests process through the front end (e.g., payload structure sent via EmailJS, success/error state management).

Compliance & Policies: Note any legal/privacy constraints integrated into forms (e.g., Data Privacy Act consent logic).

Deployment Pipeline: Step-by-step instructions on how to push updates to production (e.g., running npm run build and deploying the /dist directory via FTP/cPanel pipeline).
For development testing: npm run dev

For Website Deployment:
Step 1: In the console, type 'npm run build' to build the project.
Step 2: Zip the dist folder of the project.
Step 3: Go to cPanel File Manager and head to public_html, delete all current files in the folder.
Step 4: Upload dist.zip and extract the file.
Step 5: Delete the uploaded dist.zip as we no longer need it.
Step 6: Head inside dist folder and move all contents one folder above. Move everything from /public_html/dist to /public_html/.
Step 7: Drink Coffee and enjoy the deployment.


5. Handoff Backlog: Pending Features & Future Enhancements
Organize your known remaining features into clear subcategories:

Phase 1: Urgent / Immediate Next Steps

[Fix 1]: Mobile Friendly Fix on Documentation Page
[Feature 1]: Individual Product Showcase Pages
[Feature 2]: Video QR links to tutorial videos for M06, X6, LX50

Phase 2: Nice-to-Have / Future Roadmaps

[Feature 3]: Admin & User Login for Simple Website Conifguration
[Feature 4]: Queue Ticket Customer Support System
[Feature 5]: Online Quotation Generator

Known Edge Cases / Tech Debt:

Document any temporary workarounds or minor bugs currently non-blocking.

6. Access & Admin Handover Checklist
Repository: GitHub / GitLab permissions.

Third-Party Accounts: Access credentials for EmailJS, domain registrar, and cPanel/hosting can be requested from ma'am Malou Abustan.