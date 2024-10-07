import Player from "../Player";

const Character: Player = {
  name: "Stephen Jobbe",
  class: "Evil Scientist",
  stats: {
    hp: 1,
    stamina: 1.4,
    magic: 0.8,
    strength: 1,
    stealth: 1,
    tech: 1.8,
    malice: -500,
    magicDef: 1.8 * 0.7 + 1.4 * 0.3,
    def: 1.8 + 0.8,
    evasion: 1 + 1,
    int: 1.4 + 1,
    luck: 5.9,
  },
  level: 1,
  experience: 0,
  inventory: [],
  skills: [],
};

export default Character;
