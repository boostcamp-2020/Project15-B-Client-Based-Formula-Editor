import color from "./constants/color";

const popupStyle = theme => `
  .popup {
    width: max-content;
    position: fixed;
    color: ${color.mainTheme0[theme]};
    background-color: ${color.mainTheme3[theme]};
    border: 1px solid ${color.mainTheme2[theme]};
    border-radius: 3px;
    padding: 20px 30px;
    left: 50%;
    transform: translateX(-50%);
    transition: 1s;
    z-index: 1000;
    box-shadow: 0 0 15px 1px ${color.grey};
    font-weight: bold;
    display: flex;

    animation-name: down;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    > svg {
      width: 50px;
      margin-right: 20px;
      color: ${color.mainThemeYellow[theme]};
    }
    
    > div {
      > input {
        width: 100%;
        height: 24px;
        margin-top: 10px;
        padding-left: 5px;
      }

      > div {
        display: flex;
        justify-content: flex-end;
        margin-top: 15px;

        > label {
          margin: auto 0;
          margin-left: 10px;
          cursor: pointer;
        }

        > button {
          color: white;
          padding: 2px 25px;
          margin-left: 8px;
          border: none;
          border-radius: 3px;
          font-weight: bold;
          cursor: pointer;
          outline: none;

          &:hover:not([disabled]) {
            opacity: 0.8;
          }

          &:first-child {
            background-color: ${color.mainTheme1[theme]};
          }
          &:last-child {
            background-color: ${color.green};
          }
          &:disabled {
            &:last-child {
              background-color: ${color.green}55;
              cursor: default;
            }
          }
        }
      }
    }
  }

  @keyframes down {
    0%   { top: -200px; }
    100% { top: 0; }
  }
  @keyframes up {
    0%   { top: 0; }
    100% { top: -200px; }
  }
`;

export default popupStyle;
