const popupStyle = `
  .popup {
		width: max-content;
    position: fixed;
    color: white;
    background-color: #3c3c3c;
    border: 1px solid #666666;
    border-radius: 3px;
    padding: 20px 30px;
		left: 50%;
		transform: translateX(-50%);
		transition: 1s;
		z-index: 3;
		box-shadow: 0 0 20px 3px black;
		font-weight: bold;

		animation-name: down;
		animation-duration: 0.5s;
		animation-iteration-count: 1;
		animation-fill-mode: forwards;

    > div {
    	display: flex;

      > svg {
        width: 50px;
	      margin-right: 20px;
	      color: #e4bd12;
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

          > button {
            color: white;
            padding: 1px 20px 2px 20px;
            margin-left: 8px;
            border: none;
            border-radius: 3px;
            font-weight: bold;
            cursor: pointer;

            &:first-child {
              background-color: #666666;
            }
            &:last-child {
              background-color: #15ab15;
            }
          }
        }
      }
    }
	}

	@keyframes down {
		0%   { top: -200px; }
		100% { top: 10px; }
  }
  @keyframes up {
    0%   { top: 10px; }
		100% { top: -200px; }
  }
`;

export default popupStyle;
