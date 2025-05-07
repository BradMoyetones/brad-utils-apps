import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, ArrowLeft, FilePlus, FileSearch, FileMinus, FileUp, FileDown } from "lucide-react"

export default function PDFUtilsPage() {
    const pdfTools = [
        {
            title: "Combinar PDFs",
            description: "Une múltiples archivos PDF en un solo documento",
            icon: <FilePlus className="h-6 w-6 text-slate-700" />,
            href: "/utils/pdf/merge",
        },
        {
            title: "Dividir PDF",
            description: "Separa un PDF en múltiples archivos",
            icon: <FileMinus className="h-6 w-6 text-slate-700" />,
            href: "/utils/pdf/split",
        },
        {
            title: "Comprimir PDF",
            description: "Reduce el tamaño de tus archivos PDF",
            icon: <FileDown className="h-6 w-6 text-slate-700" />,
            href: "/utils/pdf/compress",
        },
        {
            title: "Convertir a PDF",
            description: "Convierte documentos a formato PDF",
            icon: <FileUp className="h-6 w-6 text-slate-700" />,
            href: "/utils/pdf/convert",
        },
        {
            title: "Extraer texto de PDF",
            description: "Extrae el texto de documentos PDF",
            icon: <FileSearch className="h-6 w-6 text-slate-700" />,
            href: "/utils/pdf/extract",
        },
    ]

    return (
        <div className="container py-10 mx-auto">
            <div className="mb-8">
                <Button variant="ghost" asChild className="mb-4">
                <Link href="/" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Volver a inicio
                </Link>
                </Button>
                <div className="flex items-center gap-3 mb-2">
                    <FileText className="h-8 w-8 text-slate-700" />
                    <h1 className="text-3xl font-bold">Utilidades PDF</h1>
                </div>
                <p className="text-muted-foreground max-w-2xl">
                    Herramientas para manipular, convertir y editar archivos PDF. Selecciona la utilidad que necesitas usar.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {pdfTools.map((tool, index) => (
                    <div key={index+"-util-pdf"} className="relative overflow-hidden rounded-lg bg-background p-8 hover:border-indigo-600 border-2">
                        <div className="flex items-center gap-4">
                            {tool.icon}
                            <h3 className="font-bold">{tool.title}</h3>
                        </div>
                        <p className="mt-2 text-muted-foreground line-clamp-2">{tool.description}</p>
                        <Button className="w-full mt-4" asChild>
                            <Link href={tool.href}>Usar herramienta</Link>
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}
