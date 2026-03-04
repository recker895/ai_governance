'use client'

const FullLogo = () => {
  return (
    <div className="flex items-center gap-3">
      
      {/* Symbol */}
      <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
        AG
      </div>

      {/* Text */}
      <div className="flex flex-col leading-tight">
        <span className="text-base font-semibold tracking-wide">
          AI Governance
        </span>
        <span className="text-xs text-muted-foreground">
          Control Framework
        </span>
      </div>

    </div>
  )
}

export default FullLogo