const NavBar = () => {
  return (
    <nav className='navbar'>
      <div>
        <ul>
          <li><a href='../pages/Home'>Remotely Home</a></li>
          <li><a href='../pages/About'>About Us</a></li>
          <li><a href='../pages/Contact'>Contact Us</a></li>
          <button className='post_button'><a href='../pages/Post'>Button</a></button>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar