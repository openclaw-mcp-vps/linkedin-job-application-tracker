import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JobTrackr – Track Job Applications Automatically",
  description: "Chrome extension that automatically logs job applications from LinkedIn, Indeed, and more. Get follow-up reminders and never miss an opportunity."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ef939cfa-b750-4471-ae33-1dc8b3cd2fb2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
