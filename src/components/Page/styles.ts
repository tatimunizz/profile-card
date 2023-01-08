import styled from 'styled-components'
import bgTopDecor from '../../assets/bg-pattern-top.svg';
import bgBottomDecor from '../../assets/bg-pattern-bottom.svg';

export const PageContainer = styled.div`
  background: ${props => props.theme.background};
  background-image: url(${bgTopDecor}), url(${bgBottomDecor});
  background-position: left top -50vh, right bottom -50vh;
  background-repeat: no-repeat, no-repeat;
  background-size: 50%;

  display: flex;
  padding: 1rem;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`
