import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
} from "@mui/material";

interface Props {
  name: string;
  avatar: string;
  id?: string | number;
}

export const BasicListItem = ({ name, avatar }: Props) => {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Avatar src={avatar} />
          </ListItemIcon>
          <ListItemText primary={name} />
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  );
};
