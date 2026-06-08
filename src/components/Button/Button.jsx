import './Button.scss'
import clsx from 'clsx'

export default (props) => {

  const {
    href,
    type = 'button',
    target,
    className,
    label,
    isLabelHidden = false,
    disabled
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkProps = {href, target}
  const buttonProps = {type, disabled}
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined


  return (
    <Component className={clsx(className, 'button')}
               title={title}
               aria-label={title}
               {...specificProps}
    >
      {!isLabelHidden && (
        <span className="button__label">{label}</span>
      )}
    </Component>
  )
}