import { HeaderContainer } from './styles'
import { Scroll, Timer } from 'phosphor-react'
import logoIgnite from '../assets/dragonball-z.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <a href="/" title="Timer">
          <Timer size={24} />
        </a>
        <a href="/history" title="Histórico">
          <Scroll size={24} />
        </a>
      </nav>
    </HeaderContainer>
  )
}
