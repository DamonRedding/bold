import React, { CSSProperties, useRef, useState } from 'react'

import { focusBoxShadow, Theme, useStyles } from '../../styles'
import { Button } from '../Button'
import { DateField } from '../DateField'
import { Icon } from '../Icon'

export interface Period {
  startDate: Date
  finalDate: Date
}

export interface DateIntervalProps {
  initialValue?: Period
  disabled?: boolean
  icon?: Icon
  iconDisabled?: boolean
  onChange?(period: Period): void
}

export function DateInterval(props: DateIntervalProps) {
  const firstDateFieldRef = useRef<HTMLInputElement>()
  const scondDateFieldRef = useRef<HTMLInputElement>()

  const { initialValue, disabled, onChange, icon, iconDisabled } = props
  const { classes } = useStyles(createStyles, disabled)

  const [date, setDate] = useState(initialValue ? initialValue : ({} as Period))

  const onChangeStart = (data: Date) => {
    const period = { startDate: data, finalDate: date.finalDate } as Period
    onChange(period)
    setDate(period)
  }

  const onChangeFinal = (data: Date) => {
    const period = { startDate: date.startDate, finalDate: data } as Period
    onChange(period)
    setDate(period)
  }

  const onClearStart = () => {
    const period = { startDate: null, finalDate: date.finalDate } as Period
    onChange(period)
    setDate(period)
  }

  const onClearFinal = () => {
    const period = { startDate: date.startDate, finalDate: null } as Period
    onChange(period)
    setDate(period)
  }

  const onIconClick = () => {
    firstDateFieldRef.current.focus()
  }

  return (
    <div className={classes.div}>
      <div className={classes.dateFieldWrapper}>
        <DateField
          clearable
          inputRef={firstDateFieldRef}
          onChange={onChangeStart}
          onClear={onClearStart}
          style={classes.dateField}
          value={date.startDate}
        />
      </div>
      <Icon icon='arrowRight' style={classes.arrowIcon} />
      <div className={classes.dateFieldWrapper}>
        <DateField
          clearable
          inputRef={scondDateFieldRef}
          onChange={onChangeFinal}
          onClear={onClearFinal}
          style={classes.dateField}
          value={date.finalDate}
        />
      </div>
      <Button
        size='small'
        skin='ghost'
        tabIndex={-1}
        onClick={onIconClick}
        style={classes.calendarWrapper}
        disabled={iconDisabled}
      >
        <Icon icon={icon} onClick={onIconClick} />
      </Button>
    </div>
  )
}

const createStyles = (theme: Theme, disabled: boolean) => ({
  arrowIcon: {
    marginTop: '0.3rem',
  },
  calendarIcon: {
    borderRadius: 'inherit',
  } as CSSProperties,
  calendarWrapper: {
    alignItems: 'center',
    display: 'flex',
    backgroundColor: theme.pallete.gray.c90,
    width: '2.5rem',
  } as CSSProperties,
  dateField: {
    border: 'none',
    marginTop: '0.05rem',
    '&:focus': {
      outline: 'none',
      'box-shadow': 'none',
    },
  } as CSSProperties,
  dateFieldWrapper: {
    flex: 1,
  } as CSSProperties,
  div: {
    display: 'inline-flex',
    border: '1px solid ' + theme.pallete.gray.c70,
    borderRadius: '0.2rem',
    backgroundColor: disabled ? theme.pallete.surface.background : theme.pallete.surface.main,
    cursor: 'pointer',
    transition: 'box-shadow .2s ease',
    '&:focus-within': {
      boxShadow: focusBoxShadow(theme),
    },
  } as CSSProperties,
})
