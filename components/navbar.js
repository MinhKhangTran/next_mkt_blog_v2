import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="wrapper">
      <Link href="/">
        <a className="logo">MKT</a>
      </Link>
      <ul className="navbar__links">
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/about">Über mich</Link>
        </li>
        <li>
          <button className="btn" title="Darkmodus">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_130)">
                <path
                  d="M31.221 18.235C30.894 18.152 30.567 18.235 30.28 18.44C29.216 19.344 27.989 20.084 26.638 20.577C25.37 21.07 23.979 21.316 22.506 21.316C19.191 21.316 16.163 19.96 13.994 17.783C11.826 15.605 10.475 12.564 10.475 9.236C10.475 7.839 10.721 6.483 11.13 5.25C11.58 3.935 12.235 2.743 13.094 1.716C13.462 1.264 13.381 0.607001 12.93 0.237001C12.644 0.0310011 12.317 -0.0509989 11.989 0.0310011C8.511 0.977001 5.483 3.072 3.314 5.866C1.228 8.619 0 12.03 0 15.728C0 20.207 1.8 24.275 4.747 27.233C7.693 30.192 11.703 32 16.204 32C19.969 32 23.447 30.685 26.229 28.507C29.053 26.288 31.099 23.124 31.958 19.508C32.122 18.933 31.794 18.358 31.221 18.235Z"
                  fill="#737373"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_130">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="visually-hidden">Darkmodus Ein</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
