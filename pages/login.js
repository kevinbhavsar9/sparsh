import Image from 'next/image'
import styles from '../styles/login.module.css'
import Link from 'next/link'

export default function Login(){
	return(
<html>		
	<header>
		<nav className={styles.nav}>
			<Link href="/">
				<div style={{cursor: 'pointer'}}>
				<Image src={require('../public/logo.png')} alt="sparshlogo"/>
				</div>
			</Link>
		</nav>
	</header>

	<body>
		<div style={{height: 55+ 'px'}}></div>
		<form action="action_page.php">
			<div className={styles.container}>
				<h1>Login</h1>
				<p>Enter email (or) username and passsword.</p>
				<hr className='hr'/>
		
				<label><b>Email/Username</b></label>
				<br/>
				<input type="text" placeholder="Enter Email/Username" name="email" id="email" className={styles.input} required/>
				<br/>

				<label><b>Password</b></label>
				<br/>
				<input type="password" placeholder="Enter Password" name="psw" id="psw" className={styles.input} required/>
				<br/>
				<button type="submit" className={styles.registerbtn}>Login</button>
			</div>
		
			<div className={styles.instructions}>
				<p>Contact <Link href="tel:+919409656394">+91 9409 6563 94</Link> or <Link href="mailto:lharsh175@gmail.com">lharsh175@gmail.com</Link> if you face any difficulties. </p>
			</div>
		</form>
	</body>
</html>
)
}