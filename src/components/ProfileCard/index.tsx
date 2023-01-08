import { Age, Avatar, Header, HeaderBackground, Locale, Main, Name, ProfileCardContainer, Footer, DataContainer, DataNumber, DataDescription, ProfileCardBody } from "./styles";
import bg from '../../assets/bg-pattern-card.svg';
import avatar from '../../assets/image-victor.jpg';

export function ProfileCard() {
  return(
    <ProfileCardContainer>
      <ProfileCardBody>
      <Header>
        <HeaderBackground src={bg} alt="" />
        <Avatar src={avatar} alt="" width={106} height={106} />
      </Header>
      
      <Main>
        <Name>
          Victor Crest
          <Age>26</Age>
        </Name>
        <Locale>London</Locale>
        
      </Main>
      
      <Footer>
        <DataContainer>
          <DataNumber>80K</DataNumber>
          <DataDescription>Followers</DataDescription>
        </DataContainer>

        <DataContainer>
          <DataNumber>803K</DataNumber>
          <DataDescription>Likes</DataDescription>
        </DataContainer>

        <DataContainer>
          <DataNumber>1.4K</DataNumber>
          <DataDescription>Photos</DataDescription>
        </DataContainer>
      </Footer>
      </ProfileCardBody>

    </ProfileCardContainer>
  )
}