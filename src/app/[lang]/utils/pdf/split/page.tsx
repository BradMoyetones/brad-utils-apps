import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FilePlus } from "lucide-react"

export const metadata: Metadata = {
    title: "Dividir PDF",
    description: "Divide archivos PDF con nuestra herramienta gratuita en línea.",
}

export default function SplitPDFPage() {
    return (
        <div className="container py-10 mx-auto">
            <div className="mb-8">
                <Button variant="ghost" asChild className="mb-4">
                    <Link href="/utils/pdf" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Volver a utilidades PDF
                    </Link>
                </Button>
                <div className="flex items-center gap-3 mb-2">
                    <FilePlus className="h-8 w-8 text-slate-700" />
                    <h1 className="text-3xl font-bold">Dividir PDF</h1>
                </div>
                <p className="text-muted-foreground max-w-2xl">
                    Divide tus archivos PDF a tu gusto. Sube el archivo y descarga el resultado.
                </p>
            </div>

            {/* Contenido de la herramienta */}
            <div className="border-2 border-dashed border-muted-foreground rounded-lg p-12 text-center">
                <FilePlus className="h-12 w-12 mx-auto text-slate-400 mb-4" />
                <h2 className="text-xl font-medium mb-2">Arrastra y suelta tus archivos PDF aquí</h2>
                <p className="text-muted-foreground mb-4">O haz clic para seleccionar archivos</p>
                <Button>Seleccionar archivos</Button>
            </div>
        </div>
    )
}
