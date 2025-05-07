import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ImageIcon, ArrowLeft, ImagePlus, Crop, FileOutput, Layers, ImageDown } from "lucide-react"

export default function ImageUtilsPage() {
    const imageTools = [
        {
            title: "Comprimir imágenes",
            description: "Reduce el tamaño de tus imágenes sin perder calidad",
            icon: <ImageDown className="h-6 w-6 text-emerald-700" />,
            href: "/utils/image/compress",
        },
        {
            title: "Redimensionar imágenes",
            description: "Cambia el tamaño de tus imágenes",
            icon: <Crop className="h-6 w-6 text-emerald-700" />,
            href: "/utils/image/resize",
        },
        {
            title: "Convertir formato",
            description: "Convierte entre formatos como JPG, PNG, WebP y más",
            icon: <FileOutput className="h-6 w-6 text-emerald-700" />,
            href: "/utils/image/convert",
        },
        {
            title: "Editar imágenes",
            description: "Herramientas básicas de edición de imágenes",
            icon: <ImagePlus className="h-6 w-6 text-emerald-700" />,
            href: "/utils/image/edit",
        },
        {
            title: "Optimizar para web",
            description: "Optimiza imágenes para uso en sitios web",
            icon: <Layers className="h-6 w-6 text-emerald-700" />,
            href: "/utils/image/optimize",
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
                    <ImageIcon className="h-8 w-8 text-emerald-700" />
                    <h1 className="text-3xl font-bold">Utilidades de Imagen</h1>
                </div>
                <p className="text-muted-foreground max-w-2xl">
                    Herramientas para procesar, optimizar y convertir imágenes. Selecciona la utilidad que necesitas usar.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {imageTools.map((tool, index) => (
                    <div key={index+"card-util-image"} className="relative overflow-hidden rounded-lg bg-background p-8 hover:border-indigo-600 border-2">
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
