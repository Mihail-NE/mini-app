import s from './Header.module.scss';

interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps ) => {
  return (
    <div className={s.header}>{children}</div>
  )
}

export default Header