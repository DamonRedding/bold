import NextLink from 'next/link'

import { Cell, Grid, Icon, Icons, Theme, useStyles } from '../../lib'

export default () => {
  const { classes } = useStyles(createStyles)

  return (
    <div className={classes.wrapper}>
      <div className={classes.headgroup}>
        <h1 className={classes.title}>
          <strong>Bold</strong> design system
        </h1>
        <h2 className={classes.subtitle}>Consistent, accessible, bold.</h2>
      </div>

      <div className={classes.cards}>
        <Grid wrap style={classes.cardsGrid}>
          <Cell xs={3} flexBasis={240}>
            <Card title='Getting started' icon='rocket' href='/getting-started'>
              Check our onboarding guide for designers and devs.
            </Card>
          </Cell>
          <Cell xs={3} flexBasis={240}>
            <Card title='Components' icon='bricksFilled' href='/components/accordion'>
              Discover our component’s library, usage and code.
            </Card>
          </Cell>
          <Cell xs={3} flexBasis={240}>
            <Card title='Storybook' icon='starFilled' href='/storybook'>
              A development environment for UI components.
            </Card>
          </Cell>
        </Grid>
      </div>
    </div>
  )
}

const createStyles = (theme: Theme) => ({
  wrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    background: theme.pallete.surface.main,
  } as React.CSSProperties,
  headgroup: {
    padding: 80,
    marginBottom: 130,
  } as React.CSSProperties,
  title: {
    fontWeight: 'normal',
    fontSize: 36,
  } as React.CSSProperties,
  subtitle: {
    fontSize: 24,
  } as React.CSSProperties,
  cards: {
    background: theme.pallete.primary.c50,
    padding: 80,
    flex: 1,
  },
  cardsGrid: {
    marginTop: -227,
  },
})

interface CardProps {
  title: string
  icon: Icons
  href: string
  children: React.ReactNode
}

function Card(props: CardProps) {
  const { title, children, icon, href } = props
  const { classes } = useStyles(createCardStyles)

  return (
    <NextLink href={href}>
      <a className={classes.card} href={href}>
        <Icon icon={icon} style={classes.icon} size={2.5} />
        <h3 className={classes.title}>{title}</h3>
        <hr className={classes.divider} />
        {children}
      </a>
    </NextLink>
  )
}

const createCardStyles = (theme: Theme) => ({
  card: {
    border: `1px solid ${theme.pallete.divider}`,
    padding: '2rem 1rem',
    textAlign: 'center',
    boxShadow: theme.shadows.outer[80],
    background: theme.pallete.surface.main,
    borderRadius: 2,
    display: 'block',
    textDecoration: 'none',
    color: theme.pallete.text.main,
  } as React.CSSProperties,
  title: {
    margin: 0,
    fontSize: 20,
    marginTop: '1rem',
  } as React.CSSProperties,
  icon: {
    fill: theme.pallete.primary.main,
  } as React.CSSProperties,
  divider: {
    width: 80,
    margin: '1rem auto',
  },
})
