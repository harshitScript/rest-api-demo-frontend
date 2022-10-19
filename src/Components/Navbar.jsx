import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button1 } from './UI/Button'

const Navbar = () => {
  const activeLinkDecider = ({ isActive }) => (isActive ? 'active' : '')

  return (
    <Header>
      <Button1>Message Node</Button1>
      <nav>
        <Ul>
          <Li>
            <NavLink to='/posts' className={activeLinkDecider}>
              Posts
            </NavLink>
          </Li>
          <Li>Logout</Li>
        </Ul>
      </nav>
    </Header>
  )
}

const Header = styled.header`
  padding: 1rem;
  height: 70px;
  box-sizing: border-box;
  background: #ffb7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
`

const Ul = styled.ul`
  padding: 1rem;
  display: flex;
  gap: 2rem;
  & .active {
    border-bottom: 3px solid gold;
  }
`

const Li = styled.li`
  font-size: 1rem;
  font-weight: bold;
  list-style-type: none;
  transition: all 1s;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid gold;
  }
`

export default memo(Navbar)
