import { getSize } from '@tamagui/get-token'
import { cloneElement, forwardRef, Ref, useContext } from 'react'
import {
  createStyledContext,
  GetProps,
  styled,
  TamaguiElement,
  Theme,
  withStaticProperties,
  Stack,
  Text,
} from 'tamagui'

import { BUTTON_TYPES, ButtonAdoptions, ButtonTypes, ButtonVariants } from './helpers'

export const ButtonContext = createStyledContext({
  circular: false as boolean,
  disabled: false as boolean,
  inactive: false as boolean,
  type: 'large' as ButtonTypes,
  variant: 'contained' as ButtonVariants,
  //eslint-disable-next-line
  adopt: 'default' as ButtonAdoptions,
})

const useButtonContext = () => useContext(ButtonContext)

export const ButtonFrame = styled(Stack, {
  alignItems: 'center',
  borderRadius: '$5',
  context: ButtonContext,
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  name: 'Button',
  paddingLeft: '$6',
  paddingRight: '$6',
})

export type ButtonProps = GetProps<typeof ButtonFrame> & {
  adopt?: ButtonAdoptions
  circular?: boolean
}

export const ButtonTextStyled = styled(Text, {
  context: ButtonContext,
  fontWeight: '700',
  name: 'ButtonText',
  userSelect: 'none',
})

export const ButtonText = ButtonTextStyled.styleable<GetProps<typeof ButtonTextStyled>>(
  ({ ...rest }, ref) => {
    return <ButtonTextStyled ref={ref} {...rest} />
  }
)

//eslint-disable-next-line
const ButtonIcon = (props: { children: any }) => {
  const { type } = useButtonContext()
  const smaller = getSize(BUTTON_TYPES[type].height, {
    shift: -1,
  })

  return cloneElement(props.children, {
    color: 'red',
    size: smaller.val * 0.5,
  })
}

export const ButtonRoot = forwardRef(
  ({ adopt, children, ...rest }: ButtonProps, ref: Ref<TamaguiElement> | undefined) => {
    return (
      <Theme name="red">
        <ButtonFrame focusable {...rest} ref={ref}>
          {children}
        </ButtonFrame>
      </Theme>
    )
  }
)

ButtonRoot.displayName = 'ButtonRoot'

export const BasicButton = withStaticProperties(ButtonRoot, {
  Icon: ButtonIcon,
  Props: ButtonContext.Provider,
  Text: ButtonText,
})
