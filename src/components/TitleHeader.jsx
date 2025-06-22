

export default function TitleHeader({title}) {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="font-semibold uppercase md:text-5xl
        text-gray-300 text-4xl text-center">{title}</div>
    </div>
  )
}
