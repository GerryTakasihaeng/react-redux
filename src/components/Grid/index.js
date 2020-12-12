import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTileWithChecking, removeTile } from "../../features/Grid/actions";
import "./style.css";
import AddTileButton from "../AddTileButton";
import Tile from "../Tile";

const colors = ["red", "blue", "pink", "yellow", "gray"];

export default function Grid() {
  let gridTiles = useSelector((state) => state.grid);
  let dispacth = useDispatch();
  return (
    <div>
      <div className="container">
        {gridTiles.map((tile, index) => {
          return (
            <Tile
              {...tile}
              key={index}
              onDoubleClick={() => dispacth(removeTile(tile.id))}
            />
          );
        })}
      </div>

      <div>
        {colors.map((color) => {
          return (
            <AddTileButton
              key={color}
              color={color}
              onClick={() => dispacth(addTileWithChecking(color))}
            />
          );
        })}
      </div>
    </div>
  );
}
