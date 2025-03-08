import { useState } from 'react'

const Inviscibleinput: React.FC = (): JSX.Element => {
  const [data, setData] = useState<string | undefined>(undefined)
  return (
    <>
      <input
        id="fileselector"
        type="file"
        ref={(input) => {
          if (input) {
            input.setAttribute('webkitdirectory', 'true')
            input.setAttribute('directory', 'true')
          }
        }}
        hidden
        onChange={(e) => {
          setData(e.target.value)
        }}
      />
      {data}
    </>
  )
}

export default Inviscibleinput
