interface Character {
  name: string;
  class: string;
  stats: {
    hp: number;
    stamina: number;
    magic: number;
    strength: number;
    stealth: number;
    tech: number;
    malice: number;
    magicDef: number;
    def: number;
    evasion: number;
    int: number;
    luck: number;
  };
  level: number;
  experience: number;
  inventory: Item[];
  skills: Skill[];
}

interface Item {
  name: string;
  type: string; // e.g., weapon, armor, potion
  stats: {
    // ... item-specific stats
  };
}

interface Skill {
  name: string;
  type: string; // e.g., attack, defense, healing
  damage: number;
  manaCost: number;
  effect: string; // e.g., "Increases target's defense by 20%"
}

export default Character;
