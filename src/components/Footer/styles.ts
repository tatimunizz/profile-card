import styled from 'styled-components'

export const FooterContainer = styled.footer`
  margin-top: auto;
  font-size: ${props => props.theme.text.xs};
  color: ${props => props.theme['gray-blue']};
  flex-shrink: 0;
`

export const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme['dark-blue']};
  font-size: ${props => props.theme.text.xs};
  transition: 0.25s;

  :hover {
  color: ${props => props.theme.white};
  }
`