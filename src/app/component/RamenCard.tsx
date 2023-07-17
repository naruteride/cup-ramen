// "use client"
import Image from "next/image";

export default function RamenCard({ value }: { value: {image: string; name: string} }) {
    return (
        <div className="flex flex-col">
            <Image src={value.image} width={64} height={144} alt={value.name} />
            <label>{value.name}</label>
        </div>
    )
}