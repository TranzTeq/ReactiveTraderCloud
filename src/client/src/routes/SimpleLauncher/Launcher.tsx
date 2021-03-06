import React from 'react'

import { rules } from 'rt-styleguide'
import { injectGlobal, styled, ThemeStorageSwitch } from 'rt-theme'

import { config } from './config'
import { Link } from './Link'
import { LogoIcon } from 'rt-components'

export class Launcher extends React.Component {
  // unset global scaling on mount
  _ = injectGlobal`
    :root, body {
      @media all {
        font-size: 16px;
        -webkit-app-region: drag;
      }
    }
  `

  render() {
    return (
      <Root>
        <LogoContainer>
          <LogoIcon width={1.5} height={1.5} />
        </LogoContainer>
        {config.map(app => (
          <ButtonContainer key={app.name}>
            <Link to={app}>{app.icon}</Link>
          </ButtonContainer>
        ))}

        <ButtonContainer>
          <ThemeStorageSwitch />
        </ButtonContainer>
      </Root>
    )
  }
}

const Root = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.shell.backgroundColor};
  color: ${({ theme }) => theme.component.textColor};
`

const IconContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const ButtonContainer = styled(IconContainer)`
  ${rules.appRegionNoDrag};
`

const LogoContainer = styled(IconContainer)`
  background-color: ${({ theme }) => theme.component.backgroundColor};

  .svg-icon {
    fill: ${({ theme }) => theme.component.textColor};
  }

  ${rules.appRegionDrag};
`
