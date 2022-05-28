import React from "react"
import { ContainerList, List, ListItem } from "./CustomList.styles"

const CustomList: React.FC<{
  items: string[] | undefined
  onSelect: (value: string) => void
}> = ({ items, onSelect }) => {
  return !items || items.length === 0 ? null : (
    <ContainerList>
      <List>
        {items.map((item) => (
          <ListItem key={item} onClick={() => onSelect(item)}>
            {item}
          </ListItem>
        ))}
      </List>
    </ContainerList>
  )
}

export default CustomList
