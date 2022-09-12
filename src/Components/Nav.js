export default function Nav() {
    return (
        <nav>
            <img src={require("../img/thoratbags white.png")} width="180px" alt="LOGO" />
            <ul>
                <li>Home</li>
                <div class="dropdown">
                    <button class="dropbtn">Categories</button>
                    <div class="dropdown-content">
                        <a href=".">School Bags</a>
                        <a href="">Gym Bags</a>
                        <a href="">Sling Bags</a>
                    </div>
                </div>
            <li>Blog</li>
            <li>Account</li>
        </ul>
        </nav >
    )
}