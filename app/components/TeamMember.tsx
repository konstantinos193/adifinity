import Image from 'next/image'

interface TeamMemberProps {
  name: string
  role: string
  imageSrc: string
}

export function TeamMember({ name, role, imageSrc }: TeamMemberProps) {
  return (
    <div className="text-center flex flex-col items-center">
      <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-[#01FFFF]">{role}</p>
    </div>
  )
}

