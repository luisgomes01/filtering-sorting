import { Container, List } from "@mui/material";
import { useApp } from "../../contexts/AppContext";
import { BasicListItem } from "./BasicListItem";

export default function BasicList() {
  const { users } = useApp();

  return (
    <main>
      <Container maxWidth="lg">
        <List>
          {users.map((user) => (
            <BasicListItem
              name={user.login}
              avatar={user.avatar_url}
              key={user.id}
            />
          ))}
        </List>
      </Container>
    </main>
  );
}
