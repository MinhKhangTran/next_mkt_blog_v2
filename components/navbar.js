import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          className="btn"
          title="Darkmodus Ein"
          onClick={() => setTheme("light")}
        >
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
      );
    } else {
      return (
        <button
          className="btn"
          title="Darkmodus Aus"
          onClick={() => setTheme("dark")}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_83)">
              <path
                d="M21.642 10.358C20.211 8.926 18.189 8 16 8C13.811 8 11.789 8.884 10.358 10.358C8.926 11.789 8 13.811 8 16C8 18.189 8.926 20.211 10.358 21.642C11.789 23.074 13.811 24 16 24C18.189 24 20.211 23.116 21.642 21.642C23.074 20.211 24 18.189 24 16C24 13.811 23.116 11.789 21.642 10.358Z"
                fill="#A3A3A3"
              />
              <path
                d="M16 5C16.538 5 17 4.535 17 3.992V1.008C17 0.465 16.538 0 16 0C15.462 0 15 0.465 15 1.008V3.992C15 4.535 15.462 5 16 5Z"
                fill="#A3A3A3"
              />
              <path
                d="M24.642 7.717L26.717 5.642C27.094 5.264 27.094 4.66 26.717 4.283C26.34 3.906 25.736 3.906 25.358 4.283L23.283 6.358C22.906 6.736 22.906 7.34 23.283 7.717C23.623 8.094 24.226 8.094 24.642 7.717Z"
                fill="#A3A3A3"
              />
              <path
                d="M30.992 15H28.008C27.465 15 27 15.462 27 16C27 16.538 27.465 17 28.008 17H30.992C31.535 17 32 16.538 32 16C32 15.462 31.535 15 30.992 15Z"
                fill="#A3A3A3"
              />
              <path
                d="M24.642 23.283C24.264 22.906 23.66 22.906 23.283 23.283C22.906 23.66 22.906 24.264 23.283 24.642L25.358 26.717C25.736 27.094 26.34 27.094 26.717 26.717C27.094 26.34 27.094 25.736 26.717 25.358L24.642 23.283Z"
                fill="#A3A3A3"
              />
              <path
                d="M16 27C15.462 27 15 27.465 15 28.008V30.992C15 31.535 15.462 32 16 32C16.538 32 17 31.535 17 30.992V28.008C17 27.465 16.538 27 16 27Z"
                fill="#A3A3A3"
              />
              <path
                d="M6.35799 23.283L4.28299 25.358C3.90599 25.736 3.90599 26.34 4.28299 26.717C4.65999 27.094 5.26399 27.094 5.64199 26.717L7.71699 24.642C8.09399 24.264 8.09399 23.66 7.71699 23.283C7.37699 22.906 6.77399 22.906 6.35799 23.283Z"
                fill="#A3A3A3"
              />
              <path
                d="M5 16C5 15.462 4.535 15 3.992 15H1.008C0.465 15 0 15.462 0 16C0 16.538 0.465 17 1.008 17H3.992C4.535 17 5 16.538 5 16Z"
                fill="#A3A3A3"
              />
              <path
                d="M6.35799 7.717C6.73599 8.094 7.33999 8.094 7.71699 7.717C8.09399 7.34 8.09399 6.736 7.71699 6.358L5.64199 4.283C5.26399 3.906 4.65999 3.906 4.28299 4.283C3.90599 4.66 3.90599 5.264 4.28299 5.642L6.35799 7.717Z"
                fill="#A3A3A3"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_83">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span className="visually-hidden">Darkmodus Aus</span>
        </button>
      );
    }
  };
  return (
    <nav className="wrapper">
      <Link href="/">
        <a className="logo">MKT</a>
      </Link>
   
        {renderThemeChanger()}
      
    </nav>
  );
};

export default Navbar;
