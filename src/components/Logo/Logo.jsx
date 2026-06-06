import './Logo.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    loading = 'lazy',
    className,
  } = props

  const title = 'Home'

  return (
    <a className={clsx(className, 'logo')}
       href="#"
       aria-label={title}
       title={title}>
      <img
        className="logo__image"
        src="/public/images/Logo-image.svg"
        alt=""
        width={199}
        height={60}
        loading={loading}
      />
    </a>
  )
}