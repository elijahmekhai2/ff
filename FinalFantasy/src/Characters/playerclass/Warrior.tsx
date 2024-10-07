import Player from "../Player";

const Character: Player = {
  name: "Bobby Hill",
  class: "Warrior",
  stats: {
    hp: 1.4,
    stamina: 1,
    magic: 1,
    strength: 1.8,
    stealth: 1,
    tech: 0.8,
    malice: 500,
    magicDef: 1.4 * 0.7 + 1 * 0.3,
    def: 1 + 1.8,
    evasion: 1 + 1,
    int: 1 + 0.8,
    luck: 4.86,
  },
  level: 1,
  experience: 0,
  inventory: [],
  skills: [],
};

export default Character;
