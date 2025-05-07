import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: {
        template: "%s - Brad Utils",
        default: "Utilidades - Brad Utils",
    },
    description: "Colección de herramientas útiles para simplificar tu trabajo diario.",
}

export default function UtilsLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return <div className="utils-layout">{children}</div>
}
