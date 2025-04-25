import '@/styles/KeyValueDisplay.scss'

type KeyValueDisplayProps = {
 label: string,
 value: string,
}

export default function KeyValueDisplay ({label, value} : KeyValueDisplayProps) {
 return <div className="key-value-display">
  <span>{label}</span>
  <strong>{value}</strong>
 </div>
}