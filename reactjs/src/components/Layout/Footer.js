import { Instagram , MailOutline,
    Phone,Room } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;



const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Codealo Camp</Logo>
        <Desc>
          Las tiendas online son de los proyectos más demandados en el mercado
          laboral. ¿A qué tienda no le gustaría tener presencia online? Con este
          proyecto vas a poner en práctica tus conocimientos en HTML, CSS y
          JavaScript para construir una tienda funcional, donde los usuarios
          puedan ver los productos, seleccionar la cantidad que quieren de cada
          uno y completar su compra.
        </Desc>
        <SocialContainer>
    
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>

        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South
          Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@codealo.com
        </ContactItem>

      </Right>
    </Container>
  );
};

export default Footer;
