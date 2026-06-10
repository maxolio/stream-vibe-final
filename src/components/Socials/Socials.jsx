import './Socials.scss'
import clsx from 'clsx'
import Button from '@/components/Button'

export default (props) => {

  const {
    className,
    links = [],
    name

  } = props

  return (
    <div className={clsx(className, 'soc1a1s')}>
      <ul className="soc1a1s__list">
        {links.map(({label, iconName}, index) => (
          <li className="soc1a1s__item"
              key={index}>
            <Button className="soc1a1s__link"
                    href="#"
                    mode="black-10"
                    label={label}
                    isLabelHidden
                    hasFillIcon
                    iconName={iconName}

            />
          </li>
        ))}
      </ul>
    </div>
  )
}