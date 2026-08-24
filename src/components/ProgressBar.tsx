import { Progress } from "@/components/ui/progress"

interface ProgressBarProps {
  current: number
  total: number
  label?: string
}

export function ProgressBar({ current, total, label }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100)

  return (
    <div className="w-full space-y-1.5" role="progressbar" aria-valuenow={current} aria-valuemin={0} aria-valuemax={total} aria-label={label ?? `Progresso: ${current} de ${total}`}>
      <div className="flex justify-between items-center">
        {label && <span className="text-xs font-medium text-muted-foreground">{label}</span>}
        <span className="text-xs font-medium text-muted-foreground ml-auto">
          {current}/{total}
        </span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  )
}
