"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Droplets, Info } from "lucide-react"

export function WaterMethodologyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="text-green-700 border-green-200 hover:bg-green-50">
          <Info className="h-4 w-4 mr-2" />
          Metodologia de Cálculo da Água
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Droplets className="h-5 w-5 text-green-700" />
            Metodologia de Cálculo da Pegada Hídrica
          </DialogTitle>
          <DialogDescription>
            Explicação detalhada sobre como calculamos o consumo de água associado à produção de diesel
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 my-2 text-sm">
          <p>
            O cálculo da pegada hídrica na LogiCO2 é baseado em estudos científicos sobre o consumo de água na produção
            de diesel, considerando todo o ciclo de vida do combustível.
          </p>

          <h3 className="font-semibold text-green-800">Parâmetros Utilizados</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-medium">Pegada hídrica total do diesel:</span> 2,5 litros de água por litro de
              diesel
            </li>
            <li>
              <span className="font-medium">Faixa de variação:</span> 2,0 a 4,0 litros de água por litro de diesel,
              dependendo da eficiência dos processos
            </li>
          </ul>

          <h3 className="font-semibold text-green-800">Componentes da Pegada Hídrica</h3>
          <p>O valor de 2,5 litros de água por litro de diesel inclui:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-medium">Extração do petróleo bruto:</span> Aproximadamente 1,5 litros de água por
              litro de petróleo extraído
            </li>
            <li>
              <span className="font-medium">Refino do diesel:</span> Aproximadamente 1,0 litro de água por litro de
              diesel refinado
            </li>
          </ul>

          <h3 className="font-semibold text-green-800">Metodologia de Cálculo</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Calculamos o consumo de combustível com base na distância e eficiência do veículo</li>
            <li>
              Multiplicamos o volume de combustível consumido pelo fator de pegada hídrica (2,5 L de água/L de diesel)
            </li>
            <li>O resultado representa a quantidade de água utilizada para produzir o diesel consumido na operação</li>
          </ol>

          <h3 className="font-semibold text-green-800">Tipos de Água Considerados</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-medium">Água verde:</span> Água da chuva utilizada na extração do petróleo bruto
            </li>
            <li>
              <span className="font-medium">Água azul:</span> Água superficial e subterrânea utilizada principalmente no
              refino
            </li>
            <li>
              <span className="font-medium">Água cinza:</span> Água necessária para diluir poluentes gerados nos
              processos de extração e refino
            </li>
          </ul>

          <h3 className="font-semibold text-green-800">Fontes e Referências</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              ResearchGate: "Water consumption unit contribution for diesel production" - Dados sobre consumo de água na
              extração (média de 1,5 L/L) e refino (média de 1,0 L/L)
            </li>
            <li>
              ScienceDirect: "Estimation of U.S. refinery water consumption" - Dados sobre consumo de água em refinarias
              (1,0-1,9 L/L)
            </li>
            <li>Iberdrola: "O que é a Pegada Hídrica e como calculá-la?" - Definição de pegada hídrica</li>
            <li>
              Estudos da Petrobras sobre eficiência hídrica em refinarias brasileiras - Aplicabilidade dos valores
              médios globais ao contexto brasileiro
            </li>
          </ul>

          <p className="text-xs text-gray-500 italic">
            Nota: Os valores apresentados são médias para o contexto brasileiro e podem variar conforme a região, método
            de produção e eficiência operacional de cada planta de extração e refino.
          </p>
        </div>

        <DialogFooter>
          <Button type="button" variant="outline">
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
