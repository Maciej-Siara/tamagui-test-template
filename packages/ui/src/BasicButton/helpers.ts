import { ThemeName } from 'tamagui'

export const BUTTON_VARIANTS = {
  CONTAINED: 'contained',
  OUTLINED: 'outlined',
  TEXT: 'text',
} as const

export const BUTTON_ADOPTIONS = {
  DANGER: 'danger',
  DEFAULT: 'default',
  SECONDARY: 'secondary',
  WHITE: 'white',
} as const

const color = 'red'

const defaultColor = (color: ThemeName, forceSoft?: boolean) =>
  forceSoft ? `$${color}1` : `$${color}5`
const inactiveColor = (color: ThemeName) => `$${color}1`

export const getContainedColor = (
  disabled: boolean,
  inactive: boolean,
  adopt: ButtonAdoptions,
  variant: ButtonVariants,
  forceSoft = false
) => {
  const disabledColor = '$white1'
  return disabled ? disabledColor : inactive ? inactiveColor(color) : defaultColor(color, forceSoft)
}

export const getOutlinedColor = (
  disabled: boolean,
  inactive: boolean,
  adopt: ButtonAdoptions,
  variant: ButtonVariants,
  forceSoft = false
) => {
  const disabledColor = '$darkGray1'
  return disabled ? disabledColor : inactive ? inactiveColor(color) : defaultColor(color, forceSoft)
}

export const getTextColor = (
  disabled: boolean,
  inactive: boolean,
  adopt: ButtonAdoptions,
  variant: ButtonVariants,
  forceSoft = false
) => {
  const disabledColor = '$darkGray1'
  return disabled ? disabledColor : inactive ? inactiveColor(color) : defaultColor(color, forceSoft)
}

export const mapAdoptToSoftenBoolean = (
  adopt: ButtonAdoptions,
  buttonVariant: ButtonVariants,
  isDisabledButton = false
) => !isDisabledButton && buttonVariant === BUTTON_VARIANTS.CONTAINED
export const BUTTON_TYPES = {
  large: {
    height: '$4.5',
    minHeight: '$4.5',
  },
  medium: {
    height: '$3.5',
    minHeight: '$3.5',
  },
  small: {
    height: '$2.5',
    minHeight: '$2.5',
  },
} as const

export type ButtonVariants = (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS]
export type ButtonTypes = keyof typeof BUTTON_TYPES
export type ButtonAdoptions = (typeof BUTTON_ADOPTIONS)[keyof typeof BUTTON_ADOPTIONS]
