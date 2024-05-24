import { useState } from "react";

const Exercise1 = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "David",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "A-Aron" } });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <span>{game.player.name}</span>
          <button onClick={handleClick}>Change Name</button>
        </div>
      </div>
    </>
  );
};

export default Exercise1;
