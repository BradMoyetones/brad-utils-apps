import { Code, FileJson, FileSpreadsheet, FileText, ImageIcon, PenToolIcon as Tool } from "lucide-react"

const features = [
  {
    title: "PDF Utilities",
    description: "Herramientas para manipular, convertir y editar archivos PDF",
    icon: <FileText className="h-8 w-8 text-slate-700" />,
    href: "/utils/pdf",
    color: "bg-slate-50",
    borderColor: "border-slate-200",
  },
  {
    title: "Imagen Utilities",
    description: "Optimiza, redimensiona y convierte imágenes fácilmente",
    icon: <ImageIcon className="h-8 w-8 text-emerald-700" />,
    href: "/utils/image",
    color: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
  {
    title: "Herramientas de Desarrollo",
    description: "Utilidades para desarrolladores como formateo de código y validación",
    icon: <Code className="h-8 w-8 text-indigo-700" />,
    href: "/utils/dev",
    color: "bg-indigo-50",
    borderColor: "border-indigo-200",
  },
  {
    title: "Conversión de Datos",
    description: "Convierte entre diferentes formatos de datos como CSV, JSON, XML",
    icon: <FileJson className="h-8 w-8 text-amber-700" />,
    href: "/utils/data",
    color: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    title: "Calculadoras",
    description: "Calculadoras especializadas para diferentes necesidades",
    icon: <FileSpreadsheet className="h-8 w-8 text-rose-700" />,
    href: "/utils/calculators",
    color: "bg-rose-50",
    borderColor: "border-rose-200",
  },
  {
    title: "Otras Utilidades",
    description: "Herramientas adicionales para diversas tareas",
    icon: <Tool className="h-8 w-8 text-purple-700" />,
    href: "/utils/misc",
    color: "bg-purple-50",
    borderColor: "border-purple-200",
  },
]

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32 mx-auto">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Cutting-Edge Solutions</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Discover how Amane Soft can transform your business with our innovative technologies.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.title} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              {feature.icon}
              <h3 className="font-bold">{feature.title}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
