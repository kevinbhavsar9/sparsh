import Image from 'next/image'
import styles from '../styles/login.module.css'

export default function Login(){
	return(
<html>		
	<header>
		<nav id="nav-login">
			<a href="/" style={{height: 55+ 'px'}}>
				<Image src={require('../public/logo.png')} alt="sparshlogo" style={{margin:15+ 'px', height:25+ 'px'}} />
			</a>
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
				<p>Contact <a href="tel:+919409656394">+91 9409 6563 94</a> or <a href="mailto:lharsh175@gmail.com">lharsh175@gmail.com</a> if you face any difficulties. </p>
			</div>
		</form>
	</body>
</html>
)
}