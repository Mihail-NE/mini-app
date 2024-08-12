import s from './Theme.module.scss';

interface ThemeProps {
  children: React.ReactNode;
}

const Theme = ({ children }: ThemeProps ) => {
  return (
    <div className={s.theme}>{children}</div>
  )
}

export default Theme