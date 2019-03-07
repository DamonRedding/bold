import { useState } from 'react'

import { Icon, Icons, Text, Theme, useStyles } from '../../../lib'
import ActiveLink from '../ActiveLink'

import { PageLink } from './SideNav'

export type SideNavItemProps = PageLink

export const SideNavItem = (props: SideNavItemProps) => {
  const { href, icon, title, children } = props
  const { classes } = useStyles(createStyles)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (children) {
      e.preventDefault()
      setIsCollapsed(collapsed => !collapsed)
    }
  }

  return (
    <li>
      <ActiveLink href={href} activeClassName='active'>
        <a className={classes.link} onClick={handleLinkClick}>
          <Icon icon={icon as Icons} className={classes.icon} />
          <Text style={classes.title}>{title}</Text>
          {children && <Icon icon={isCollapsed ? 'angleUp' : 'angleDown'} className={classes.iconDropdown} />}
        </a>
      </ActiveLink>

      {children && isCollapsed && (
        <ul className={classes.sublist}>
          {children.map(sub => (
            <li key={sub.href}>
              <ActiveLink href={sub.href} activeClassName='active'>
                <a className={classes.sublink}>{sub.title}</a>
              </ActiveLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

const createStyles = (theme: Theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 14,
    color: theme.pallete.text.main,
    textDecoration: 'none',
    padding: '1rem 0 1rem 2rem',
    transition: 'background 0.2s ease',
    '&:hover': {
      background: theme.pallete.primary.c90,
    },
    '&.active': {
      color: theme.pallete.primary.main,
      borderRight: `4px solid ${theme.pallete.primary.main}`,
    },
  } as React.CSSProperties,
  title: {
    flex: 1,
  },
  icon: {
    fontSize: '24px',
    marginRight: '1.5rem',
  },
  sublist: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  } as React.CSSProperties,
  sublink: {
    fontWeight: 'normal',
    fontSize: 13,
    padding: '0.5rem 0 0.5rem 5rem',
    display: 'flex',
    alignItems: 'center',
    color: theme.pallete.text.main,
    textDecoration: 'none',
    transition: 'background 0.2s ease',
    '&:hover': {
      background: theme.pallete.primary.c90,
    },
    '&.active': {
      color: theme.pallete.primary.main,
      fontWeight: 'bold',
    },
  } as React.CSSProperties,
  iconDropdown: {
    fontSize: '24px',
    marginRight: '1rem',
  } as React.CSSProperties,
})