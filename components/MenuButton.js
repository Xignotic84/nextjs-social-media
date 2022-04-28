import {Button} from "@chakra-ui/react";

export default function MenuButton({text, icon, isSelected}) {
  return (
      <Button leftIcon={icon} justifyContent={"flex-start"} isActive={isSelected} w={"100%"} h={55} mb={4}>
        {text}
      </Button>
  )
}