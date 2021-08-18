export const ExpButton = (props) => {
  const { label, onClick, customClass } = props;
  return (
    <>
      <button className={`btn__cn ${customClass}`} onClick={onClick}>
        {label}
      </button>
      <style jsx>
        {`
          .btn__cn {
            cursor:pointer;
            outline: 0;
            border-radius: 50px;
            font-size: 0.8em;
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            letter-spacing: 4px;
            overflow: hidden;
            position: relative; //absolute
            padding: 2em 3em;
            text-transform: uppercase;
            -webkit-tap-highlight-color: transparent;
            transition: all 500ms ease-in-out;
            color:white;
            width:100%;
            border:none;
          }
          .gradient {
            background: transparent
              linear-gradient(
                90deg,
                #1fe1e9 0%,
                #5e33d1 34%,
                #d34848 65%,
                #ffb33f 100%
              )
              0% 0% no-repeat padding-box;
            border-radius: 79px;
          }
          .red{
              background:#D24848;
          }
          .yellow{
              background:#FFB33F;
          }
          .blue{
              background:#1FE1E9;
          }
        `}
      </style>
    </>
  );
};
