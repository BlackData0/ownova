interface IconProps {
  className?: string;
}

export function IconCloud({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  )
}

export function IconRobot({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l2 2-2 2-2-2 2-2z"/>
      <path d="M19 8H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2v-9a2 2 0 00-2-2z"/>
      <path d="M8 14h.01M16 14h.01M12 16v2"/>
    </svg>
  )
}

export function IconBrain({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9.5 2a2.5 2.5 0 012.45 2h.1a2.5 2.5 0 012.45-2c1.38 0 2.5 1.12 2.5 2.5 0 .57-.19 1.09-.5 1.51L19 8v2.5a2.5 2.5 0 01-.67 1.69l-5.33 5.29a1.41 1.41 0 01-2 0L5.67 12.19A2.5 2.5 0 015 10.5V8l3.5-2.99A2.492 2.492 0 018 3.5C8 2.12 9.12 1 10.5 1s2.5 1.12 2.5 2.5z"/>
    </svg>
  )
}

export function IconChart({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 13v-1m4 1v-3m4 3V8M12 21l8-8-4-4-4 4-4-4-4 4 8 8z"/>
    </svg>
  )
}