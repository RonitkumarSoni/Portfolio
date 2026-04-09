export const ActivityDot: React.FC = () => {
  return (
    <div className="relative h-2 w-2 rounded-full">
      <div className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-75" />
      <div className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-green-500" />
    </div>
  )
}
