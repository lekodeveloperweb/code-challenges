import React from "react"
import CustomList from "../CustomList/CustomList"
import * as S from "./Autocomplete.styles"

const Autocomplete: React.FC<{
  items: string[] | undefined
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSelect: (value: string) => void
}> = ({ items, onChange, value, onSelect }) => {
  return (
    <S.Container>
      <S.Input
        value={value}
        onChange={onChange}
        placeholder="Search login on Github..."
      />
      <CustomList items={items} onSelect={onSelect} />
    </S.Container>
  )
}

export default Autocomplete
