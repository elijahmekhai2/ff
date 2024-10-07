import Player from "../Player";

const Character: Player = {
  name: "Cold",
  class: "WARLORD",
  stats: {
    hp: 1,
    stamina: 1.8,
    magic: 0.8,
    strength: 1.4,
    stealth: 1,
    tech: 1,
    malice: -500,
    magicDef: 0.8 * 0.7 + 1 * 0.3,
    def: 1 + 1.4,
    evasion: 1 + 1,
    int: 1 + 0.8,
    luck: 4.39,
  },
  level: 1,
  experience: 0,
  inventory: [],
  skills: [],
};

export default Character;
