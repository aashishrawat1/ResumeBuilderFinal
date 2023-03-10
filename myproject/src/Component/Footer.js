import style from './Footer.module.css'
function Footer()
{
   return(
    <footer>
<nav class="navbar navbar-dark bg-dark fixed-top">
   <a href="/" className={style.colr}>Log Out</a>
   </nav>
   </footer>
   )
}
export default Footer;