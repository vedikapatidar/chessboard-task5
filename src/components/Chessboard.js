import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "../redux/boardSlice";
import "./Chessboard.css";

const Chessboard = () => {
  const board = useSelector((state) => state.board);
  const dispatch = useDispatch();

  const handleSquareClick = (row, col) => {
    dispatch(changeColor({ row, col }));
  };

  return (
    <div className="chessboard">
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((square, colIndex) => (
            <div
              key={colIndex}
              className={`square ${square.color}`}
              onClick={() => handleSquareClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Chessboard;
