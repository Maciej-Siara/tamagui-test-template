import { IconProps } from '@tamagui/helpers-icon'

import { Home } from '../assets/icons'
import { ButtonProps, BasicButton } from '../BasicButton/Button'

export interface IconButtonProps extends Omit<ButtonProps, 'circular'> {
  icon: React.NamedExoticComponent<IconProps>
}

export const IconButton = ({ icon: Icon = Home, ...rest }: IconButtonProps) => {
  return (
    <BasicButton {...rest} circular padding={0}>
      <BasicButton.Icon>
        <Icon />
      </BasicButton.Icon>
    </BasicButton>
  )
}
