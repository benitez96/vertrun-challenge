

type KeyValuePairProps = {
  label: string
  value: string | number
  icon?: JSX.Element
}

export const KeyValuePair = ({ label, value, icon }: KeyValuePairProps) => {
  return (
    <span className="flex gap-2 justify-between">
      <p className="font-semibold flex gap-1 items-center">{ icon }{label}: </p><p>{ value }</p>
    </span>
  )
}
