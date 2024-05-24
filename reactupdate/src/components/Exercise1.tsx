import { useState } from "react";

const Exercise1 = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Alicia",
    },
  });

  return (
    <div>Exercise1</div>
  )
}

export default Exercise1