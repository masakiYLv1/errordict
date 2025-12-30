import { Button, HStack, Link, List } from "@chakra-ui/react";

function App() {
  return (
    <HStack>
      <Button variant="ghost">Click me1</Button>
      <Link>test</Link>
      <Button>Click me2</Button>
      <List.Root>
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
      </List.Root>
      <div>test</div>
    </HStack>
  );
}

export default App;
