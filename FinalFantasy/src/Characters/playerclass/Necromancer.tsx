import Player from "../Player";

const Character: Player = {
  name: "Archibald",
  class: "Necromancer",
  stats: {
    hp: 1.8,
    stamina: 1,
    magic: 1.4,
    strength: 0.8,
    stealth: 1,
    tech: 1,
    malice: -500,
    magicDef: 1.8 * 0.7 + 1.4 * 0.3,
    def: 1.8 + 0.8,
    evasion: 1 + 1,
    int: 1.4 + 1,
    luck: 5.1,
  },
  level: 1,
  experience: 0,
  inventory: [],
  skills: [],
};

export default Character;
