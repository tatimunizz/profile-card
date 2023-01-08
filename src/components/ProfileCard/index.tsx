import { Age, Avatar, Header, HeaderBackground, Locale, Name, ProfileCardContainer, DataContainer, DataNumber, DataDescription, ProfileCardBody, ProfileInfo, ProfileData } from "./styles";
import bg from '../../assets/bg-pattern-card.svg';
import avatar from '../../assets/image-victor.jpg';

export function ProfileCard() {
  return(
    <ProfileCardContainer>
      <ProfileCardBody>
      <Header>
        <HeaderBackground src={bg} alt="Small cyan collored balls composing a background" />
        <Avatar src={avatar} />
      </Header>
      
      <ProfileInfo>
        <Name>
          Victor Crest
          <Age>26</Age>
        </Name>
        <Locale>London</Locale>
        
      </ProfileInfo>
      
      <ProfileData>
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
      </ProfileData>
      </ProfileCardBody>

    </ProfileCardContainer>
  )
}