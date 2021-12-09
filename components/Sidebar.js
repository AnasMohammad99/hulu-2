import { Avatar, Button, IconButton } from "@mui/material";
import styled from "styled-components";
import { Chat, MoreVert } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { validate } from "email-validator";
const Sidebar = () => {
  const createChat = () => {
    const input = prompt("enter Email");
    if (!input) return null;
    if (validate(input)) {
    }
  };

  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconsContainer>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </IconsContainer>
      </Header>
      <Search>
        <SearchIcon />
        <SearchInput placeholder="search in chats" />
      </Search>
      <SidebarButton onClick={createChat}>start new chat</SidebarButton>
    </Container>
  );
};

export default Sidebar;
const Container = styled.div``;
const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;
const SidebarButton = styled(Button)`
  width: 100%;
  //&&& increase the periorty
  &&& {
    border-bottom: 1px solid whitesmoke;
    border-top: 1px solid whitesmoke;
  }
`;
const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;
const Header = styled.div`
  display: flex;
  position: static;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border: 1px solid whitesmoke;
`;
const UserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
const IconsContainer = styled.div``;
