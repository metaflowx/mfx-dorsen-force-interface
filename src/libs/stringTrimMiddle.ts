export function stringTrimMiddle(value: string, visibleChars: number = 4): string {
  if (!value) return ''
  if (value.length <= visibleChars * 2) return value
  
  const start = value.slice(0, (visibleChars * 2))
  const end = value.slice(-visibleChars)
  return `${start}...${end}`
}