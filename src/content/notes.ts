import type { LocalizedText } from "@/lib/types";

export function personalNote(name: string): LocalizedText {
  return {
    de: {
      spiritual: `${name}, deine Hände tragen eine Geschichte, die nur dir gehört — möge dieses Lesen dich daran erinnern, wie viel Licht du bereits in dir trägst.`,
      playful: `Also ${name}, ehrlich gesagt: deine Hand ist ziemlich beeindruckend. Trag sie mit Stolz — und vielleicht ein bisschen Chaos, das gehört auch dazu.`,
    },
    en: {
      spiritual: `${name}, your hands carry a story that belongs to you alone — may this reading remind you how much light you already hold.`,
      playful: `So ${name}, real talk: your hand is pretty impressive. Wear it with pride — and maybe a little chaos, that's part of the charm too.`,
    },
  };
}
