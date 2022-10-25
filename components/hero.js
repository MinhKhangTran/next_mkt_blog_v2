const Hero = () => {
  return (
    <section className="wrapper" id="hero" aria-label="hero abschnitt">
      <h1>Mein Blog über mein Leben und alles außenrum</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam.
      </p>
      <ul className="social__links">
        <li>
          <a
            href="https://github.com/MinhKhangTran"
            className="social"
            title="github"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.998 0C7.164 0 0 7.115 0 15.893C0 22.913 4.584 28.869 10.944 30.972C11.744 31.119 12.036 30.628 12.036 30.207C12.036 29.829 12.022 28.83 12.014 27.504C7.564 28.463 6.624 25.373 6.624 25.373C5.898 23.537 4.848 23.048 4.848 23.048C3.394 22.062 4.956 22.082 4.956 22.082C6.562 22.195 7.406 23.721 7.406 23.721C8.834 26.148 11.152 25.448 12.064 25.04C12.208 24.013 12.622 23.313 13.08 22.915C9.528 22.514 5.792 21.15 5.792 15.062C5.792 13.326 6.416 11.908 7.44 10.796C7.274 10.394 6.726 8.777 7.596 6.591C7.596 6.591 8.94 6.164 11.996 8.219C13.272 7.867 14.64 7.691 16.002 7.685C17.36 7.693 18.73 7.867 20.008 8.221C23.062 6.166 24.404 6.593 24.404 6.593C25.276 8.781 24.728 10.396 24.564 10.798C25.59 11.91 26.208 13.328 26.208 15.064C26.208 21.168 22.468 22.512 18.904 22.905C19.478 23.396 19.99 24.366 19.99 25.848C19.99 27.973 19.97 29.686 19.97 30.207C19.97 30.632 20.258 31.127 21.07 30.97C27.42 28.865 32 22.911 32 15.893C32 7.115 24.836 0 15.998 0Z"
                fill="#737373"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.xing.com/profile/MinhKhang_Tran/cv"
            className="social"
            title="Xing"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <svg
              width="30"
              height="32"
              viewBox="0 0 30 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 0H22.356L11 19.454L18.317 32H25.961L18.644 19.454L30 0Z"
                fill="#737373"
              />
              <path
                d="M8.055 6H1.236L5.182 13.182L0 22H6.818L12 13.182L8.055 6Z"
                fill="#737373"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/minh-khang-tran-5bb8a1219/"
            className="social"
            title="LinkedIn"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_2)">
                <path d="M7 10H0V32H7V10Z" fill="#737373" />
                <path
                  d="M26.648 10.258C26.572 10.234 26.5 10.208 26.42 10.186C26.324 10.164 26.228 10.146 26.13 10.13C25.75 10.054 25.334 10 24.846 10C20.674 10 18.028 13.034 17.156 14.206V10H10V32H17.156V20C17.156 20 22.564 12.468 24.846 18C24.846 22.938 24.846 32 24.846 32H32V17.154C32 13.83 29.722 11.06 26.648 10.258Z"
                  fill="#737373"
                />
                <path
                  d="M3.5 7C5.433 7 7 5.433 7 3.5C7 1.567 5.433 0 3.5 0C1.567 0 0 1.567 0 3.5C0 5.433 1.567 7 3.5 7Z"
                  fill="#737373"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_2">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Hero;
