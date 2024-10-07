import Player from "../Player";

const Character: Player = {
  name: "Boblin",
  class: "Blob",
  stats: {
    hp: 1.4,
    stamina: 1.8,
    magic: 1,
    strength: 1,
    stealth: 1,
    tech: 0.8,
    malice: -500,
    magicDef: 1.4 * 0.7 + 1 * 0.3,
    def: 1 + 1.8,
    evasion: 1 + 1,
    int: 1 + 0.8,
    luck: 10,
  },
  level: 1,
  experience: 0,
  inventory: [],
  skills: [],
};

export default Character;
