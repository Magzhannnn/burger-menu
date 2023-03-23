import styles from './Navbar.module.css';
import Logo from '../../image/logo.png';
import LogoText from '../../image/logo_text.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
	const [menu, setMenu] = useState(false);

	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.box}>
					<div className={styles.logo_image}>
						<img src={Logo} alt='/' />
						<img src={LogoText} alt='/' />
					</div>
					<ul
						className={menu ? `${styles.menu} ${styles.active}` : styles.menu}
					>
						<li>
							<a href='/'>Product</a>
						</li>
						<li>
							<a href='/'>About Us</a>
						</li>
						<li>
							<a href='/'>Customers</a>
						</li>
						<li>
							<a href='/'>Price</a>
						</li>
						<li>
							<a href='/'>Contacts</a>
						</li>
					</ul>
					<div onClick={() => setMenu(!menu)} className={styles.mobile_btn}>
						{menu ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
					</div>
				</div>
			</div>
		</header>
	);
};
export default Navbar;
