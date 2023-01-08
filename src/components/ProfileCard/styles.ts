import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
display: flex;
height: calc(100vh - 60px);
align-items: center;
`

export const ProfileCardBody = styled.div`
min-width: clamp(327px, 3vw, 350px);
display: flex;
flex-direction: column;
background: ${props => props.theme.white};
border-radius: 10px;
box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeaderBackground = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
`

export const Avatar = styled.img`
  width: 106px;
  height: 106px;
  border: 5px solid white;
  border-radius: 50%;
  margin-top: -15%;
  `

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.5rem;
  padding-top: 1.25rem;
`

export const Name = styled.div`
  display: flex;
  gap: 0.5rem;
  font-weight: 700;
  color: ${props => props.theme['dark-blue']};
`

export const Age = styled.span`
  font-weight: 400;
  color: ${props => props.theme['gray-blue']};
`

export const Locale = styled.div`
  font-size: ${props => props.theme.text.s};
  color: ${props => props.theme['gray-blue']};
`

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  height: 88px;
  justify-content: space-between;

  margin-top: 1.625rem;
  padding: 24px 45px;
  border-top: 0.5px solid ${props => props.theme['dark-gray']};
`

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`

export const DataNumber = styled.div`
  font-weight: 700;
  color: ${props => props.theme['dark-blue']};
`

export const DataDescription = styled.span`
  font-size: ${props=> props.theme.text.xs};
  color: ${props => props.theme['dark-gray']};
  letter-spacing: 0.15em;
`