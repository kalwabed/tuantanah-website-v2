const GlobalStyle = () => {
  return (
    <style jsx global>{`
      body {
        margin: 0;
        height: 100vh;
        display: flex;
        flex-direction: column;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Ubuntu, Inter, Roboto, 'Noto sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .section {
        position: relative;
      }

      .section-lg {
        padding-top: 8rem;
        padding-bottom: 8rem;
      }

      .font-card {
        font-size: 0.875rem;
      }

      .sold {
        filter: grayscale();
      }

      .section-sm {
        padding-top: 3rem;
        padding-bottom: 3rem;
      }

      .logo-font {
        font-family: Righteous, cursive;
      }

      .footer {
        min-height: 50px;
        margin-top: auto;
        padding-top: 8rem;
        padding-bottom: 3rem;
      }

      .link-footer {
        list-style: none;
      }

      .font-small {
        font-size: 0.825rem;
      }

      .newlink {
        /* teknik sebelumnya */
        /* box-shadow: inset 0 -.12em 0 #28a745; */
        /* transition: box-shadow .2s ease-in-out, color .2s ease-in-out; */

        /*  teknik baru */
        padding: 2px 0 1px;
        text-decoration: inherit;
        color: inherit;
        transition: all 120ms ease-in-out 0s;
        background-size: 100% 200%;
        background-position: 0px 0px;
        background-image: linear-gradient(
          transparent 0%,
          transparent calc(50% - 9px),
          #28a745 calc(50% - 9px),
          #28a745 100%
        );
        word-break: break-word;
      }

      .newlink:hover {
        /* teknik lama */
        /* box-shadow: inset 0 -1.5em 0 #28a745; */

        /* teknik baru */
        text-decoration: inherit;
        background-image: linear-gradient(
          transparent 0%,
          transparent calc(50% - 9px),
          #41fa6c calc(50% - 9px),
          #41fa6c 100%
        );
        color: #212529;
        background-position: 0px 100%;
      }

      .img-gallery:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        transition: 0.3s;
        opacity: 0.9;
        cursor: pointer;
      }

      .hover-shadow:hover {
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        transition: all 120ms ease-in-out 0s;
      }

      .divider {
        width: 150px;
        margin-bottom: 0.3rem;
        height: 5px;
        display: inline-flex;
        background: linear-gradient(90deg, #212529, #f8f9fa);
      }

      hr {
        border: 0;
      }
    `}</style>
  )
}

export const NProgressStyle = () => {
  return (
    <style jsx global>
      {`
        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          background: #28a745;

          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;

          width: 100%;
          height: 2px;
        }

        /* Fancy blur effect */
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px #28a745, 0 0 5px #28a745;
          opacity: 1;

          -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
        }
      `}
    </style>
  )
}

export default GlobalStyle
