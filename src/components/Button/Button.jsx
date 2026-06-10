import './Button.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon'

export default (props) => {

  const {
    href,
    type = 'button',
    target,
    className,
    label,
    isLabelHidden = false,
    disabled,
    iconName,
    iconPosition = 'before',
    mode = '', /*transparent / black-10*/
    hasFillIcon,

  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkProps = {href, target}
  const buttonProps = {type, disabled}
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon className="button__icon"
          hasFill={hasFillIcon}
          name={iconName} />
  )

  return (
    <Component className={clsx(className, 'button', {
      [`button--${mode}`]: mode,
    })}
               title={title}
               aria-label={title}
               {...specificProps}
    >
      {iconPosition === 'before' && iconComponent}
      {!isLabelHidden && (
        <span className="button__label">{label}</span>
      )}
      {iconPosition === 'after' && iconComponent}
    </Component>
  )
}