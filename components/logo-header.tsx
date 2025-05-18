import { Truck, Leaf } from "lucide-react"

export function LogoHeader() {
  return (
    <div className="flex flex-col items-center justify-center py-6 bg-gradient-to-r from-green-50 via-green-100 to-green-50 border-b border-green-200">
      <div className="flex items-center gap-2 mb-2">
        <div className="relative">
          <div className="bg-green-600 p-2 rounded-lg">
            <Truck className="h-8 w-8 text-white" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full border-2 border-green-600">
            <Leaf className="h-4 w-4 text-green-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-gray-800">Logi</span>
          <span className="text-green-600">CO</span>
          <span className="text-green-800 text-3xl align-text-top">2</span>
        </h1>
      </div>
      <p className="text-gray-600 text-lg">Calculadora de Impacto Ambiental para Transporte Rodoviário no Brasil</p>
    </div>
  )
}
