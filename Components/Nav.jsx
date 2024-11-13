import { headerLogo } from '../src/assets/images/index'
import { hamburger } from '../src/assets/icons/index'
import { navLinks } from '../Constants/index'

function Nav() {
  return (
    <>
      <header className='padding-x absolute py-8 z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
          <a href="/">
            <img src={headerLogo} alt="logo" width={130} height={29} />
          </a>
          <ul className='flex  justify-between items-center gap-16 max-lg:hidden'>
            {navLinks.map((link) => {
              return (
                <li key={link.label}>
                  <a href={link.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className='hidden max-lg:block'>
            <img src={hamburger} alt="hamburger" width={25} height={25} />
          </div>
        </nav>
      </header>
    </>
  )
}

export default Nav;
