import Player from "../Player";

const Character: Player = {
  name: "Shi Huang",
  class: "Ronin",
  stats: {
    hp: 1,
    stamina: 1,
    magic: 1.4,
    strength: 1,
    stealth: 1.8,
    tech: 0.8,
    malice: -500,
    magicDef: 1.4 * 0.7 + 1 * 0.3,
    def: 1 + 1,
    evasion: 1.8 + 1,
    int: 1 + 0.8,
    luck: 5.08,
  },
  level: 1,
  experience: 0,
  inventory: [],
  skills: [],
};

export default Character;
