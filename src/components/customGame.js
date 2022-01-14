import { useState } from "react";
import "./customGame.css";
import CustomGameForm from "./customGameForm";

const CustomGame = (props) => {
  const [isCreating, SetIsCreating] = useState(false);

  const onCloseHandler = () => {
    toggleCreate();
  };

  const toggleCreate = () => {
    SetIsCreating(!isCreating);
  };

  return (
    <div className="wraper">
      <div className="inner">
        <h3>Build Your Custom Game</h3>
        {!isCreating && (
          <button className="btn-create" onClick={toggleCreate}>
            Click Here To Create
          </button>
        )}
        {isCreating && (
          <CustomGameForm
            onCreate={props.onCreate}
            onClose={onCloseHandler}
          ></CustomGameForm>
        )}
      </div>
    </div>
  );
};

export default CustomGame;
