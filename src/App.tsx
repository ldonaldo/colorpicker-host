import React from "react";
import ReactDOM from "react-dom/client";
import ColorPicker from "colorPicker/ColorPicker";
import ColorList from "colorList/ColorList";

import { useColors } from "colorPicker/useColors";

const App = () => {
  const {
    color,
    colorsList,
    handleChangeColor,
    handleSubmitSaveColor,
    handleClickClearColors,
  } = useColors();

  console.log(useColors, 'usecolors')

  return (
    <>
      <h1 className="text-center bg-dark text-white p-2"></h1>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-4">
            <ColorList
              colorsList={colorsList}
              handleClickClearColors={handleClickClearColors}
            />
          </div>
          <div className="col-12 col-md-8">
            <ColorPicker 
              color={color}
              handleChangeColor={handleChangeColor}
              handleSubmitSaveColor={handleSubmitSaveColor}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
