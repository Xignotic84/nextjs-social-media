import {Box, Button, Text, Textarea, useOutsideClick} from "@chakra-ui/react"
import {useEffect, useRef, useState} from "react"
import React from 'react'
import dynamic from 'next/dynamic'
const Picker = dynamic(() => import('emoji-picker-react'), { ssr: false })

export default function CreatePost({post}) {
  const ref = React.useRef()
  const [chosenEmoji, setChosenEmoji] = useState();

  const [emojiSelectorState, setEmojiSelectorState] = useState(false)

  const [text, setText] = useState("")

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);

    setText(text + emojiObject.emoji)
  };

  useOutsideClick({
    ref: ref,
    handler: () => setEmojiSelectorState(false),
  })

  const [charCount, setCharCount ] = useState(0)

  return <Box position={"relative"} w={550} p={4} borderRadius={4} bg={"gray.700"}>
    <Box position={"relative"}>
      <Textarea mb={8} placeholder={"State your mind..."} value={text} onChange={e =>  {
        setCharCount(e.target.value.length)
        setText(e.target.value)
      }}/>
      <Text position={"absolute"} cursor={"pointer"} bottom={10} right={4} onClick={() => setEmojiSelectorState(emojiSelectorState ? false : true)} zIndex={100}>
        <span role="img">☺️</span>
      </Text>
      <Box display={emojiSelectorState ? "block" : "none"} position={"absolute"} top={70} right={0} zIndex={100} ref={ref}>
        <Picker onEmojiClick={onEmojiClick} />
      </Box>
    </Box>

    <Text position={"absolute"} bottom={4} left={5} color={"gray.400"}>
      {charCount}/300
    </Text>

    <Box position={"absolute"} size={"sm"} bottom={1} right={5}>
      <Button>
        Post
      </Button>
    </Box>
  </Box>
}