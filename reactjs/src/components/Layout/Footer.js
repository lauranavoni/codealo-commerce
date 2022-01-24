import { Instagram , MailOutline,
    Phone,Room } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  color:#FFFFFF;
  background-color: #3E24A7;
  padding: 10px;
 
  font-size: 1.1rem;
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Poppins', sans-serif;
  
`;



const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
  margin: 20px 0px;

`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 90%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 40px;

`;

const Center = styled.div`
  flex: 1;
  padding: 40px;

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
        Las principales empresas eligen a Codealo Business para desarrollar sus habilidades profesionales más demandadas.
        </Desc>

      </Left>
      <Center>
        <Title>Links</Title>
        <List>
        <SocialContainer>
   
        <a href="https://instagram.com/codealo"><SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon></a>
       
       </SocialContainer>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 124 Dixie Path,California
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
