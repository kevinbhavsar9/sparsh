import Link from 'next/link'
import Image from 'next/image'

export default function Homepage(){
	return(
<html>
<header>
  <nav>
    <Link href="/" passHref>
	  {/* --Total height of navbar = 125, logo = 65px , pad = 30+30, 60+65 = 125  */}
    <div style={{height: 65 +'px', padding:30 +'px'}}>
	  <Image src={require('../public/logo.png')} alt="sparshlogo" />
    </div>
    </Link> 
    <Link href="./"><a className="nav-elements">Home </a></Link>
    <Link href="./events"><a className="nav-elements">Events </a></Link>     
    <Link href="./teams"><a className="nav-elements">Team </a></Link>     
  </nav>
</header>

{/* <!----------------FIRST-------------------> */}
  <div id="first-outer-div">
    <div id="first-div"></div>
    <div id="first-text">SPARSH 2022</div>
    <Link href = "/login"><a id='reg-login'>Login/Register</a></Link>
  </div>
  
  {/* <!----------------FOOTER-------------------> */}
<footer>
  <div id="footer">
    <ul>
      <li><a className="footer">Home</a></li>
      <li><a className="footer">Events</a></li>
      <li><a className="footer">Team</a></li>
    </ul>
    </div>
</footer>
</html>
)
}