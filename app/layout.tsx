import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Protocolo Remolacha - Descubre el Secreto",
  description:
    "Descubre el protocolo de la remolacha que ayuda a controlar tu azúcar de noche. Método natural sin pastillas ni efectos secundarios.",
  keywords: "protocolo remolacha, controlar azúcar, método natural, diabetes, remolacha",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.6.0/uicons-bold-rounded/css/uicons-bold-rounded.css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
