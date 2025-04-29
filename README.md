# Gagan's Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

![Portfolio Preview](https://v0-protfoliogagan-six.vercel.app/)

## 🌟 Features

- **Responsive Design**: Fully optimized for all device sizes from mobile to desktop
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Interactive Elements**: Engaging user experience with interactive components
- **Resume Functionality**: View and download resume in PDF format
- **Project Showcase**: Highlighting various web development projects with detailed descriptions
- **Contact Form**: Easy way for potential clients to get in touch
- **Performance Optimized**: Fast loading times and smooth animations
- **Accessibility**: Designed with accessibility in mind for all users

## 🚀 Technologies Used

- **Next.js**: React framework for production
- **React**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for styling
- **TypeScript**: Static typing for JavaScript
- **Lucide Icons**: Beautiful, consistent icon set
- **Intersection Observer API**: For scroll animations
- **Supabase**: For backend functionality and database

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (portrait and landscape)
- Tablets
- Desktops
- Large screens

## 📄 Resume Feature

The website includes a resume section where visitors can:
- View the resume directly on the website in a modal viewer
- Download the resume as a PDF file with a single click
- See a preview of the resume before downloading

## 🖼️ Project Structure

\`\`\`
├── app/                  # Next.js app directory
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page component
├── components/           # Reusable components
│   ├── animated-background.tsx
│   ├── contact-form.tsx
│   ├── enhanced-resume-viewer.tsx
│   ├── image-loader.tsx
│   ├── loading-indicator.tsx
│   ├── mobile-optimized-menu.tsx
│   ├── optimized-image.tsx
│   ├── responsive-project-card.tsx
│   ├── resume-viewer.tsx
│   ├── scroll-to-top.tsx
│   └── ui/               # UI components
├── hooks/                # Custom React hooks
│   ├── use-aos.tsx       # Animation on scroll hook
│   ├── use-mobile.tsx    # Mobile detection hook
│   └── use-smooth-scroll.tsx
├── lib/                  # Utility functions
│   └── utils.ts
├── public/               # Static files
│   └── resume.pdf        # Downloadable resume
\`\`\`

## 🚀 Getting Started

1. Clone the repository
   \`\`\`bash
   git clone https://github.com/gagan-k454545/Portfolio.git
   cd Portfolio
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🚀 Deployment

This project is deployed on Vercel. You can view the live site at [https://v0-gagank-7uzht1.vercel.app/](https://v0-gagank-7uzht1.vercel.app/)

## 🔧 Customization

To customize this portfolio for your own use:

1. Replace the personal information in `app/page.tsx`
2. Update the project details in the `ResponsiveProjectCard` components
3. Replace the resume PDF in the `public` directory
4. Update images and other assets as needed

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About the Developer

Gagan is a passionate front-end developer specializing in creating beautiful, interactive websites that deliver exceptional user experiences.

- **GitHub**: [github.com/gagan-k454545](https://github.com/gagan-k454545)
- **LinkedIn**: [linkedin.com/in/gagan-k-047049251](https://www.linkedin.com/in/gagan-k-047049251)
- **Email**: [sincostan3030@gmail.com](mailto:sincostan3030@gmail.com)

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) for the React framework
- [Tailwind CSS](https://tailwindcss.com/) for the styling
- [Lucide Icons](https://lucide.dev/) for the beautiful icons
- [Vercel](https://vercel.com/) for hosting the website
- [Supabase](https://supabase.io/) for backend functionality
