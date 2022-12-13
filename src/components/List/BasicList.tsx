import { Container, List } from "@mui/material";
import { useApp, User } from "../../contexts/AppContext";
import { BasicListItem } from "./BasicListItem";

export default function BasicList() {
  const { globalState } = useApp();

  return (
    <main>
      <Container maxWidth="lg">
        <List>
          {globalState.users.map((user: User) => (
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
