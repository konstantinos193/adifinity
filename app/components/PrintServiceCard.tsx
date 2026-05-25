import { LucideIcon } from 'lucide-react'

interface PrintServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function PrintServiceCard({ icon: Icon, title, description }: PrintServiceCardProps) {
  return (
    <div className="bg-[#040D12] p-6 rounded-lg hover:bg-[#0A1A24] transition-colors">
      <Icon className="w-12 h-12 text-[#01FFFF] mb-4" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

