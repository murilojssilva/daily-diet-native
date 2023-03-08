import { HeaderAvatar, HeaderContainer } from "./styles";
import Logo from "@assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderAvatar source={{ uri: "https://github.com/murilojssilva.png" }} />
    </HeaderContainer>
  );
}
