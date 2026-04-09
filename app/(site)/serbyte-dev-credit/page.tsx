import { Metadata } from "next"


const COMPANY_URL = "https://www.serbyte.net"
const CREDIT_PATH = "/mahir-patel"

export const metadata: Metadata = {
  title: "Ronit Soni",
  description: "Ronit Soni - Developer Portfolio",
  keywords: ["Ronit Soni", "Serbyte", "Credit"],
  alternates: {
    canonical: "/mahir-patel",
  },
}

export default function SerbyteDevCreditPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-16 text-center text-gray-900">
      <div className="max-w-2xl space-y-4">
        <p className="text-sm tracking-[0.2em] text-gray-500 uppercase">Site Credit</p>
        <h1 className="text-2xl font-semibold">Web design by Ronit Soni</h1>
        <p className="text-base text-gray-700">Crafted with Next.js, React, and custom Zero-UI components for performance and conversions.</p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-blue-700">
          <a href="/" className="underline underline-offset-4">
            View Ronit&apos;s portfolio
          </a>
        </div>
      </div>
    </main>
  )
}
