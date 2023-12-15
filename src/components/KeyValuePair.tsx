

type KeyValuePairProps = {
  label: string
  value: string | number
}

export const KeyValuePair = ({ label, value }: KeyValuePairProps) => {
  return (
    <span className="flex gap-2">
      <p className="font-semibold">{label}: </p><p>{ value }</p>
    </span>
  )
}
