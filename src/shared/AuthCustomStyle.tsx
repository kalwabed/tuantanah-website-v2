const AuthCustomStyle = () => {
  return (
    <style jsx>{`
      .brand {
        width: 90px;
        height: 90px;
        overflow: hidden;
        border-radius: 50%;
        margin: 40px auto;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
        position: relative;
        z-index: 1;
      }

      .brand img {
        width: 100%;
      }

      .card-wrapper {
        width: 400px;
      }

      .card {
        border-color: transparent;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
      }

      .card.fat {
        padding: 10px;
      }

      .card .card-title {
        margin-bottom: 30px;
      }

      .form-control {
        border-width: 2.3px;
      }

      .form-group label {
        width: 100%;
      }

      .btn.btn-block {
        padding: 12px 10px;
      }

      @media screen and (max-width: 425px) {
        .card-wrapper {
          width: 90%;
          margin: 0 auto;
        }
      }

      @media screen and (max-width: 320px) {
        .card.fat {
          padding: 0;
        }

        .card.fat .card-body {
          padding: 15px;
        }
      }
    `}</style>
  )
}

export default AuthCustomStyle
