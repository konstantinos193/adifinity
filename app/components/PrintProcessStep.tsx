interface PrintProcessStepProps {
    step: number
    title: string
    description: string
  }
  
  export default function PrintProcessStep({ step, title, description }: PrintProcessStepProps) {
    return (
      <div className="bg-[#040D12] p-6 rounded-lg text-center">
        <div className="w-10 h-10 bg-[#01FFFF] text-black rounded-full flex items-center justify-center mx-auto mb-4">
          {step}
        </div>
        <h4 className="font-semibold mb-2">{title}</h4>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    )
  }
  
  