// Palmora knowledge base
//
// The interpretations below are original writing inspired by the broad,
// public-domain tradition of Hasta Samudrika Shastra (classical Indian
// palmistry) and the early-20th-century popular palmistry writings of
// Cheiro (William John Warner). No text is copied from any source — every
// entry here is freshly composed for Palmora, blending that classical
// symbolism with numerology-flavoured, warm, personal language for a gift
// reading aimed at one specific person.

import type { PalmistryKnowledgeBase } from "./schema";

export const knowledgeBase: PalmistryKnowledgeBase = {
  lifeLine: {
    length: {
      short: {
        de: {
          spiritual:
            "Eine kürzere Lebenslinie spricht in der Samudrika-Shastra-Tradition nicht von wenig Zeit, sondern von konzentrierter Kraft – du schöpfst deine Energie aus der Tiefe eines Moments statt aus seiner Länge.",
          playful:
            "Kurze Lebenslinie, große Wirkung – du bist eher Espresso als endloser Tee, und das ist genau dein Stil.",
        },
        en: {
          spiritual:
            "In the old reading of the hand, a shorter life line never measured your years but the intensity with which you inhabit them – your vitality gathers close and burns bright rather than spreading thin.",
          playful:
            "Short life line, big energy – you're the espresso shot of the zodiac of the palm, not the slow-drip decaf, and honestly it suits you.",
        },
      },
      medium: {
        de: {
          spiritual:
            "Eine Lebenslinie mittlerer Länge zeigt ein ausgewogenes Maß an Lebenskraft – du bewegst dich mit stetiger, verlässlicher Energie durch die Jahre, ohne dich zu verausgaben.",
          playful:
            "Deine Lebenslinie ist im goldenen Mittelfeld – nicht der Sprint, nicht der Marathon, sondern der clevere Dauerlauf, bei dem du am Ende noch lächelst.",
        },
        en: {
          spiritual:
            "A life line of middling length reflects a well-tempered vitality – you move through your years with steady, dependable energy rather than dramatic bursts or quiet depletion.",
          playful:
            "Your life line sits right in the sweet spot – not the sprint, not the marathon, just the smart steady jog where you're still smiling at the finish.",
        },
      },
      long: {
        de: {
          spiritual:
            "Eine lange, deutlich gezogene Lebenslinie gilt in der klassischen Handlesekunst als Zeichen tief verwurzelter Vitalität – ein Fluss von Kraft, der dich durch viele Kapitel deines Lebens trägt.",
          playful:
            "Deine Lebenslinie zieht sich großzügig über die Hand – wie ein episches Serien-Finale, das einfach nicht enden will, weil noch so viel Gutes kommt.",
        },
        en: {
          spiritual:
            "A long, well-drawn life line has always been read as a sign of deep-rooted vitality – a river of strength running the full breadth of your palm and carrying you through many chapters yet to come.",
          playful:
            "Your life line stretches out generously – like a favourite show that just refuses to end because there's clearly more story left to tell.",
        },
      },
    },
    depth: {
      shallow: {
        de: {
          spiritual:
            "Eine fein und zart gezeichnete Lebenslinie deutet auf eine sensible Konstitution hin – deine Kraft ist real, zeigt sich aber lieber leise und in kleinen, bewussten Schritten.",
          playful:
            "Deine Lebenslinie ist eher ein zarter Bleistiftstrich als ein fetter Marker – du bist die leise Power im Raum, die trotzdem alles bewegt.",
        },
        en: {
          spiritual:
            "A finely etched life line points to a sensitive constitution – your strength is entirely real, it simply prefers to move quietly, in small and deliberate steps rather than grand gestures.",
          playful:
            "Your life line reads more like a soft pencil sketch than a bold marker line – you're the quiet-power type who still somehow moves mountains.",
        },
      },
      medium: {
        de: {
          spiritual:
            "Eine Lebenslinie mittlerer Tiefe zeigt eine gesunde, gut geerdete Konstitution – Kraft, die weder überschäumt noch versteckt bleibt, sondern verlässlich zur Verfügung steht.",
          playful:
            "Mittlere Tiefe, maximale Zuverlässigkeit – deine Lebenslinie ist wie dein Lieblingspaar Schuhe: nicht spektakulär, aber immer da, wenn du sie brauchst.",
        },
        en: {
          spiritual:
            "A life line of medium depth reveals a well-grounded constitution – vigour that neither overflows nor hides itself, but stands reliably ready whenever it's called upon.",
          playful:
            "Medium depth, maximum reliability – your life line is basically your favourite pair of shoes: nothing flashy, but always there exactly when you need it.",
        },
      },
      deep: {
        de: {
          spiritual:
            "Eine tief und kraftvoll eingeschnittene Lebenslinie ist in der alten Deutung ein Zeichen robuster Lebenskraft – du trägst eine Widerstandsfähigkeit in dir, die Stürme aushält und daran wächst.",
          playful:
            "Deine Lebenslinie ist tief eingegraben wie eine Fahrspur, die schon viele Kilometer gesehen hat – du bist einfach schwer zu erschüttern.",
        },
        en: {
          spiritual:
            "A deeply carved life line has long been taken as a mark of robust vitality – a resilience woven into you that weathers storms and grows sturdier for having faced them.",
          playful:
            "Your life line is carved in deep, like a well-worn trail that's seen a hundred good hikes – you're just built sturdy, plain and simple.",
        },
      },
    },
    curvature: {
      straight: {
        de: {
          spiritual:
            "Eine gerade verlaufende Lebenslinie, die eng an der Daumenwurzel bleibt, spricht von Vorsicht und Beständigkeit – du bewahrst deine Energie lieber, statt sie leichtfertig zu verstreuen.",
          playful:
            "Deine Lebenslinie hält Kurs wie ein Lineal – kein Umweg, kein Drama, einfach zielsicher geradeaus, du Planungsprofi.",
        },
        en: {
          spiritual:
            "A straight life line hugging close to the thumb speaks of caution and steadiness – you tend to conserve your energy rather than scatter it carelessly.",
          playful:
            "Your life line runs ruler-straight – no detours, no drama, just quietly efficient forward motion, you absolute planner.",
        },
      },
      slightly_curved: {
        de: {
          spiritual:
            "Eine sanft geschwungene Lebenslinie zeigt eine Mischung aus Besonnenheit und Offenheit – du wägst ab, bleibst aber neugierig genug, um dich auch mal überraschen zu lassen.",
          playful:
            "Ein bisschen Schwung in deiner Lebenslinie heißt: du planst gern, aber ein spontaner Umweg bringt dich nicht aus der Fassung.",
        },
        en: {
          spiritual:
            "A gently curved life line reflects a blend of prudence and openness – you weigh your steps carefully while staying curious enough to welcome the occasional surprise.",
          playful:
            "A little curve in your life line means you like a plan, but a spontaneous detour never actually rattles you.",
        },
      },
      curved: {
        de: {
          spiritual:
            "Eine weit schwingende Lebenslinie, die sich großzügig zur Handmitte öffnet, deutet auf Warmherzigkeit und Lebenslust hin – du gehst der Welt mit offenen Armen entgegen.",
          playful:
            "Deine Lebenslinie macht einen richtig eleganten Bogen – wie jemand, der lieber die Umgehungsstraße mit Aussicht nimmt als die schnurgerade Autobahn.",
        },
        en: {
          spiritual:
            "A wide, sweeping life line that arcs generously toward the centre of the palm points to warmth and a real appetite for living – you meet the world with open arms.",
          playful:
            "Your life line swings out in a proper elegant arc – like someone who'll always pick the scenic route over the dead-straight motorway.",
        },
      },
    },
    breaks: {
      true: {
        de: {
          spiritual:
            "Ein Unterbruch in der Lebenslinie erzählt klassischerweise von einem markanten Wendepunkt – nicht von einem Ende, sondern von einer bewussten Neuausrichtung, aus der du gestärkt hervorgehst.",
          playful:
            "Ein Bruch in deiner Lebenslinie ist wie ein Kapitelwechsel im Buch deines Lebens – dramatisch klingend, aber am Ende einfach ein neuer, besserer Abschnitt.",
        },
        en: {
          spiritual:
            "A break in the life line has traditionally marked a significant turning point – not an ending, but a deliberate re-routing of the path from which you emerge stronger.",
          playful:
            "A break in your life line is basically a chapter change in the book of you – sounds dramatic, but really it's just the plot getting more interesting.",
        },
      },
      false: {
        de: {
          spiritual:
            "Eine ungebrochene Lebenslinie steht für einen kontinuierlichen Fluss von Kraft – dein Weg verläuft ohne abrupte Risse, getragen von innerer Stabilität.",
          playful:
            "Keine Brüche, keine Umwege – deine Lebenslinie läuft glatt durch wie eine Serie ohne Cliffhanger, einfach solide von Anfang bis Ende.",
        },
        en: {
          spiritual:
            "An unbroken life line signals a continuous flow of vitality – your path runs without abrupt fractures, carried along by a steady inner stability.",
          playful:
            "No breaks, no plot twists – your life line just runs clean and smooth, like a show with zero filler episodes.",
        },
      },
    },
  },

  headLine: {
    length: {
      short: {
        de: {
          spiritual:
            "Eine kurze Kopflinie steht klassisch für einen Geist, der lieber praktisch handelt als lange zu grübeln – du kommst schnell zum Punkt und zur Tat.",
          playful:
            "Kurze Kopflinie, kurzer Prozess – während andere noch die Pro-Contra-Liste schreiben, hast du längst gehandelt.",
        },
        en: {
          spiritual:
            "A short head line has classically marked a mind that favours action over prolonged deliberation – you arrive at the point, and at the doing, quickly.",
          playful:
            "Short head line, short decision-making process – while everyone else is still drafting their pros-and-cons list, you've already done the thing.",
        },
      },
      medium: {
        de: {
          spiritual:
            "Eine mittellange Kopflinie zeigt ein ausgewogenes Denken – du kannst sowohl praktisch zupacken als auch in Ruhe abwägen, je nachdem, was der Moment braucht.",
          playful:
            "Deine Kopflinie ist der Allrounder unter den Denkstilen – mal Bauchgefühl, mal Excel-Tabelle, ganz wie es passt.",
        },
        en: {
          spiritual:
            "A head line of moderate length reveals a well-balanced mind – equally capable of practical action and considered reflection, adapting to whatever the moment calls for.",
          playful:
            "Your head line is the all-rounder of thinking styles – sometimes gut feeling, sometimes spreadsheet, whichever the situation actually needs.",
        },
      },
      long: {
        de: {
          spiritual:
            "Eine lang gezogene Kopflinie, die weit über die Hand reicht, verweist auf einen weitreichenden, analytischen Verstand – du denkst gründlich, vielschichtig und liebst es, Zusammenhänge zu durchdringen.",
          playful:
            "Deine Kopflinie zieht sich quer über die ganze Hand – du bist die Person, die eine simple Frage in eine faszinierende Tiefenanalyse verwandelt.",
        },
        en: {
          spiritual:
            "A long head line stretching well across the palm points to a far-reaching, analytical mind – you think thoroughly, in many layers, and delight in tracing how things connect.",
          playful:
            "Your head line runs clean across the whole palm – you're the friend who turns a simple question into a genuinely fascinating deep dive.",
        },
      },
    },
    depth: {
      shallow: {
        de: {
          spiritual:
            "Eine zart gezeichnete Kopflinie zeigt einen wandelbaren, feinfühligen Geist – deine Gedanken fließen leicht und lassen sich von neuen Eindrücken gern umlenken.",
          playful:
            "Deine Kopflinie ist eher ein zarter Faden als eine Furche – dein Kopf ist flexibel genug, um mitten im Satz die Meinung zu ändern, und das ist völlig in Ordnung.",
        },
        en: {
          spiritual:
            "A lightly etched head line suggests an adaptable, sensitive mind – your thoughts flow easily and readily bend toward new impressions.",
          playful:
            "Your head line is more of a light thread than a deep groove – your brain is flexible enough to change its mind mid-sentence, and honestly, that's a feature.",
        },
      },
      medium: {
        de: {
          spiritual:
            "Eine mittiefe Kopflinie zeigt klares, gut fokussiertes Denken – deine Gedanken sind weder flüchtig noch starr, sondern angenehm greifbar.",
          playful:
            "Deine Kopflinie hält die perfekte Balance – klar genug für gute Entscheidungen, locker genug, um nicht in Grübelschleifen zu hängen.",
        },
        en: {
          spiritual:
            "A head line of medium depth reflects clear, well-focused thinking – your thoughts are neither fleeting nor rigid, but pleasingly graspable.",
          playful:
            "Your head line strikes the perfect balance – sharp enough for good decisions, relaxed enough to never get stuck in an overthinking spiral.",
        },
      },
      deep: {
        de: {
          spiritual:
            "Eine tief eingeprägte Kopflinie steht für konzentrierte, entschlossene Gedankenkraft – wenn du dich einer Sache widmest, tust du es mit ganzer geistiger Hingabe.",
          playful:
            "Deine Kopflinie ist tief eingegraben wie eine feste Meinung, die du gut begründen kannst – wenn du denkst, denkst du richtig.",
        },
        en: {
          spiritual:
            "A deeply carved head line signals concentrated, decisive mental power – when you turn your attention to something, you commit to it with your whole mind.",
          playful:
            "Your head line runs deep, like a well-argued opinion you can defend for hours – when you think, you really think.",
        },
      },
    },
    curvature: {
      straight: {
        de: {
          spiritual:
            "Eine gerade Kopflinie ist das klassische Zeichen eines logischen, bodenständigen Denkers – du schätzt Fakten, Klarheit und einen realistischen Blick auf die Dinge.",
          playful:
            "Deine Kopflinie läuft schnurgerade – du bist die Stimme der Vernunft in jeder Gruppenchat-Diskussion.",
        },
        en: {
          spiritual:
            "A straight head line is the classic mark of a logical, grounded thinker – you value facts, clarity, and a realistic view of things.",
          playful:
            "Your head line runs dead straight – you're the voice of reason in every group chat debate.",
        },
      },
      slightly_curved: {
        de: {
          spiritual:
            "Eine sanft geschwungene Kopflinie verbindet praktischen Verstand mit Vorstellungskraft – du denkst strukturiert, lässt aber Raum für Kreativität.",
          playful:
            "Deine Kopflinie hat eine hübsche kleine Kurve – du bist Team Tabellenkalkulation UND Team Tagtraum, oft gleichzeitig.",
        },
        en: {
          spiritual:
            "A gently curved head line blends practical sense with imagination – you think in structured ways while still leaving room for creativity.",
          playful:
            "Your head line has a pretty little curve to it – you're team spreadsheet AND team daydream, often at the very same time.",
        },
      },
      curved: {
        de: {
          spiritual:
            "Eine stark geschwungene, zum Mondhügel abfallende Kopflinie ist das traditionelle Zeichen eines kreativen, bildhaften Geistes – deine Gedanken malen in Farben statt in Formeln.",
          playful:
            "Deine Kopflinie macht einen richtigen Schwenk Richtung Fantasie – dein Gehirn schreibt lieber Drehbücher als To-do-Listen.",
        },
        en: {
          spiritual:
            "A strongly curved head line dipping toward the mount of the Moon is the traditional mark of a vivid, imaginative mind – your thoughts paint in colour rather than formulas.",
          playful:
            "Your head line takes a proper swerve toward imagination – your brain would rather write screenplays than to-do lists.",
        },
      },
    },
    breaks: {
      true: {
        de: {
          spiritual:
            "Ein Unterbruch in der Kopflinie deutet auf einen bedeutenden Wandel im Denken hin – eine Phase, in der sich deine Sichtweise grundlegend neu ausrichtet und dadurch reift.",
          playful:
            "Ein Bruch in deiner Kopflinie ist wie ein Betriebssystem-Update für den Kopf – kurz irritierend, danach läuft alles runder.",
        },
        en: {
          spiritual:
            "A break in the head line points to a significant shift in thinking – a phase where your outlook fundamentally realigns itself and matures through the change.",
          playful:
            "A break in your head line is basically a mental operating-system update – briefly disorienting, then everything just runs smoother.",
        },
      },
      false: {
        de: {
          spiritual:
            "Eine ungebrochene Kopflinie zeigt geistige Kontinuität – deine Denkweise entwickelt sich stetig weiter, ohne abrupte Brüche in deiner inneren Logik.",
          playful:
            "Keine Brüche in deiner Kopflinie – dein Denken läuft im Dauerbetrieb, zuverlässig wie ein gut gewartetes Uhrwerk.",
        },
        en: {
          spiritual:
            "An unbroken head line reflects mental continuity – your way of thinking develops steadily, without abrupt fractures in your inner logic.",
          playful:
            "No breaks in your head line – your thinking just runs continuously, reliable as a well-maintained clockwork.",
        },
      },
    },
  },

  heartLine: {
    length: {
      short: {
        de: {
          spiritual:
            "Eine kurze Herzlinie deutet auf eine fokussierte, selektive Art zu lieben hin – du gibst dein Herz nicht leichtfertig, aber wenn du es tust, dann ganz.",
          playful:
            "Kurze Herzlinie heißt: dein Herz hat einen strengen Türsteher, aber wer drin ist, bleibt für immer auf der Gästeliste.",
        },
        en: {
          spiritual:
            "A short heart line suggests a focused, selective way of loving – you don't hand your heart out lightly, but when you do, it's completely.",
          playful:
            "A short heart line means your heart has a strict bouncer at the door, but whoever gets past him is on the guest list for life.",
        },
      },
      medium: {
        de: {
          spiritual:
            "Eine mittellange Herzlinie zeigt ein gesundes Gleichgewicht zwischen Hingabe und Selbstschutz – du liebst warm, aber ohne dich dabei zu verlieren.",
          playful:
            "Deine Herzlinie hat das perfekte Maß – genug Wärme für alle, die es verdienen, genug Grenzen, um dich nicht zu verausgaben.",
        },
        en: {
          spiritual:
            "A heart line of moderate length shows a healthy balance between devotion and self-preservation – you love warmly, without losing yourself in the process.",
          playful:
            "Your heart line hits the sweet spot – plenty of warmth for the people who deserve it, plenty of boundary to keep you from burning out.",
        },
      },
      long: {
        de: {
          spiritual:
            "Eine lang gezogene Herzlinie, die sich bis zum Zeigefinger erstreckt, spricht von einer weiten, mitfühlenden Liebesfähigkeit – dein Herz denkt in großen, umfassenden Kreisen.",
          playful:
            "Deine Herzlinie zieht sich quer über die ganze Hand – dein Herz hat einfach mehr Stauraum für Liebe als bei den meisten Menschen.",
        },
        en: {
          spiritual:
            "A long heart line reaching toward the index finger speaks of a broad, compassionate capacity to love – your heart thinks in wide, generous circles.",
          playful:
            "Your heart line runs the full length of your palm – you basically just have more storage capacity for love than most people.",
        },
      },
    },
    depth: {
      shallow: {
        de: {
          spiritual:
            "Eine fein gezeichnete Herzlinie zeigt eine zarte, verletzliche Gefühlswelt – deine Emotionen sind echt, zeigen sich aber lieber leise als laut.",
          playful:
            "Deine Herzlinie ist ein zarter Strich – deine Gefühle sind tief, nur die Lautstärke, mit der du sie zeigst, ist auf Zimmerlautstärke gestellt.",
        },
        en: {
          spiritual:
            "A finely drawn heart line points to a tender, sensitive emotional world – your feelings are entirely real, they simply prefer to show themselves quietly rather than loudly.",
          playful:
            "Your heart line is a soft, light stroke – your feelings run deep, they've just got the volume knob turned down to indoor-voice.",
        },
      },
      medium: {
        de: {
          spiritual:
            "Eine Herzlinie mittlerer Tiefe zeigt eine gesunde emotionale Präsenz – du fühlst klar und lässt andere daran teilhaben, ohne von deinen Gefühlen überwältigt zu werden.",
          playful:
            "Deine Herzlinie ist genau richtig sichtbar – emotional ehrlich, ohne gleich das ganze Drama-Paket auszupacken.",
        },
        en: {
          spiritual:
            "A heart line of medium depth reflects a healthy emotional presence – you feel clearly and let others share in it, without being overwhelmed by your own feelings.",
          playful:
            "Your heart line is visible in just the right amount – emotionally honest, without unpacking the entire drama suitcase every time.",
        },
      },
      deep: {
        de: {
          spiritual:
            "Eine tief eingeprägte Herzlinie steht für intensive, kraftvolle Gefühle – wenn du liebst, dann mit einer Hingabe, die man nicht übersehen kann.",
          playful:
            "Deine Herzlinie ist tief eingraviert – du liebst nicht ein bisschen, du liebst mit Konzertlautstärke und Konfetti.",
        },
        en: {
          spiritual:
            "A deeply carved heart line signals intense, powerful feeling – when you love, you do it with a devotion that simply cannot be overlooked.",
          playful:
            "Your heart line is carved in deep – you don't love a little, you love at full concert volume with confetti cannons.",
        },
      },
    },
    curvature: {
      straight: {
        de: {
          spiritual:
            "Eine gerade verlaufende Herzlinie zeigt eine praktische, verlässliche Art zu lieben – du drückst Zuneigung eher durch Taten als durch große Worte aus.",
          playful:
            "Deine Herzlinie läuft geradeaus – bei dir heißt 'ich liebe dich' oft 'ich hab dir schon dein Lieblingsessen mitgebracht'.",
        },
        en: {
          spiritual:
            "A straight heart line shows a practical, dependable way of loving – you tend to express affection through action rather than grand words.",
          playful:
            "Your heart line runs straight – for you, 'I love you' often sounds like 'I already brought you your favourite snack'.",
        },
      },
      slightly_curved: {
        de: {
          spiritual:
            "Eine sanft geschwungene Herzlinie verbindet Wärme mit Besonnenheit – du liebst offen, aber mit einem klugen Gefühl dafür, wann und wie.",
          playful:
            "Deine Herzlinie schwingt hübsch mit – romantisch, aber nicht kopflos, du hast Gefühl UND Geschmack.",
        },
        en: {
          spiritual:
            "A gently curved heart line blends warmth with good judgement – you love openly, but with a sensible feel for when and how.",
          playful:
            "Your heart line curves nicely – romantic, but never reckless, you've got feeling AND good taste.",
        },
      },
      curved: {
        de: {
          spiritual:
            "Eine ausdrucksstark geschwungene Herzlinie, die sich weit zum Jupiterhügel erhebt, gilt klassisch als Zeichen leidenschaftlicher, mitteilsamer Zuneigung – du lebst deine Gefühle offen und großzügig.",
          playful:
            "Deine Herzlinie macht einen richtig schwungvollen Bogen – du bist die Person, die Liebe laut und mit großen Gesten feiert, und das feiern wir an dir.",
        },
        en: {
          spiritual:
            "A boldly curved heart line rising toward the mount of Jupiter has traditionally marked passionate, expressive affection – you live your feelings openly and generously.",
          playful:
            "Your heart line sweeps up in a bold arc – you're the one who celebrates love loudly and with big gestures, and honestly, we love that about you.",
        },
      },
    },
    breaks: {
      true: {
        de: {
          spiritual:
            "Ein Unterbruch in der Herzlinie erzählt von einem bedeutsamen emotionalen Wendepunkt – ein Herzschmerz oder Abschied, der dich letztlich zu tieferer Liebesfähigkeit geführt hat.",
          playful:
            "Ein Bruch in deiner Herzlinie ist wie ein emotionaler Plottwist – hat wehgetan, aber am Ende bist du die bessere Version deiner Liebesgeschichte geworden.",
        },
        en: {
          spiritual:
            "A break in the heart line tells of a meaningful emotional turning point – a heartache or parting that ultimately led you toward a deeper capacity to love.",
          playful:
            "A break in your heart line is like an emotional plot twist – it hurt going through it, but you came out as the better-written version of your own love story.",
        },
      },
      false: {
        de: {
          spiritual:
            "Eine ungebrochene Herzlinie zeigt emotionale Beständigkeit – deine Zuneigung fließt gleichmäßig, ohne dramatische Risse in deinem Gefühlsleben.",
          playful:
            "Keine Brüche in deiner Herzlinie – deine Liebe läuft einfach im Flow, ganz ohne Werbepause.",
        },
        en: {
          spiritual:
            "An unbroken heart line reflects emotional constancy – your affection flows evenly, without dramatic fractures in your inner emotional life.",
          playful:
            "No breaks in your heart line – your love just runs on and on, no ad breaks required.",
        },
      },
    },
  },

  fateLine: {
    present: {
      true: {
        de: {
          spiritual:
            "Eine sichtbare Schicksalslinie gilt in der klassischen Handlesekunst als Zeichen eines Lebens mit klar erkennbarer Richtung – du spürst früh, wohin dein Weg dich führen will.",
          playful:
            "Du hast eine Schicksalslinie – sprich: das Universum hat dir schon eine kleine Route eingezeichnet, auch wenn du gern selbst am Steuer sitzt.",
        },
        en: {
          spiritual:
            "A clearly present fate line has classically marked a life with a discernible sense of direction – you tend to sense early on where your path is trying to take you.",
          playful:
            "You've got a fate line – basically the universe pre-loaded a little route for you, even though you're still very much the one driving.",
        },
      },
      false: {
        de: {
          spiritual:
            "Fehlt eine ausgeprägte Schicksalslinie, deutet das auf einen selbstbestimmten Lebensweg hin – du erschaffst deine Richtung immer wieder neu, statt einem vorgezeichneten Pfad zu folgen.",
          playful:
            "Keine feste Schicksalslinie? Kein Problem – du schreibst dein Drehbuch lieber selbst, Kapitel für Kapitel, ganz ohne Vorlage.",
        },
        en: {
          spiritual:
            "The absence of a strong fate line points to a self-determined path through life – you keep creating your own direction anew, rather than following one laid out in advance.",
          playful:
            "No fixed fate line? No problem – you'd rather write your own script chapter by chapter, no template required.",
        },
      },
    },
    length: {
      short: {
        de: {
          spiritual:
            "Eine kurze Schicksalslinie zeigt, dass sich dein beruflicher Weg erst in einer bestimmten Lebensphase klar formt – die Richtung kommt, wenn die Zeit reif ist.",
          playful:
            "Deine Schicksalslinie ist kurz und knackig – dein Karriereweg braucht keinen langen Vorspann, er startet einfach, wenn's passt.",
        },
        en: {
          spiritual:
            "A short fate line suggests your career path takes clear shape within a particular chapter of life – the direction arrives when the timing is right, not before.",
          playful:
            "Your fate line is short and to the point – your career doesn't need a long opening credits sequence, it just starts when it's ready.",
        },
      },
      medium: {
        de: {
          spiritual:
            "Eine mittellange Schicksalslinie zeigt einen beruflichen Weg, der sich über einen wesentlichen Teil deines Lebens stetig entfaltet – mit Raum für Entwicklung und Neuausrichtung.",
          playful:
            "Deine Schicksalslinie ist solide mittellang – dein Karriereweg hat genug Spielraum für ein gutes Sequel oder zwei.",
        },
        en: {
          spiritual:
            "A fate line of moderate length shows a career path that unfolds steadily over a significant stretch of your life, with room for growth and course correction along the way.",
          playful:
            "Your fate line is a solid medium length – your career path has plenty of room for a good sequel or two.",
        },
      },
      long: {
        de: {
          spiritual:
            "Eine lange, durchgängige Schicksalslinie steht für einen klar verfolgten Lebensweg – du bleibst deiner Richtung über viele Jahre treu und baust beständig darauf auf.",
          playful:
            "Deine Schicksalslinie zieht sich fast über die ganze Hand – du bist die Person mit dem Zehn-Jahres-Plan, die ihn tatsächlich auch verfolgt.",
        },
        en: {
          spiritual:
            "A long, continuous fate line stands for a life path pursued with clarity – you remain loyal to your direction across many years, building steadily on what came before.",
          playful:
            "Your fate line runs nearly the length of your palm – you're the person with the ten-year plan who actually, genuinely follows it.",
        },
      },
    },
    depth: {
      shallow: {
        de: {
          spiritual:
            "Eine fein gezeichnete Schicksalslinie zeigt einen beruflichen Weg, der sich flexibel und anpassungsfähig entfaltet – deine Richtung ist da, aber nie starr.",
          playful:
            "Deine Schicksalslinie ist ein zarter Strich – dein Karriereplan hat eingebaute Flexibilität, quasi Stretch-Stoff statt Beton.",
        },
        en: {
          spiritual:
            "A lightly etched fate line shows a career path that unfolds flexibly and adaptably – your direction is present, but never rigid.",
          playful:
            "Your fate line is a soft, light stroke – your career plan comes with built-in stretch, more elastic waistband than concrete slab.",
        },
      },
      medium: {
        de: {
          spiritual:
            "Eine Schicksalslinie mittlerer Tiefe zeigt eine gesunde Balance zwischen Zielstrebigkeit und Offenheit – du verfolgst deine Richtung, ohne dich ihr sklavisch zu unterwerfen.",
          playful:
            "Deine Schicksalslinie ist genau richtig ausgeprägt – zielstrebig, aber nicht verkrampft, du hast einen Plan und einen Plan B.",
        },
        en: {
          spiritual:
            "A fate line of medium depth shows a healthy balance between purposefulness and openness – you pursue your direction without becoming enslaved to it.",
          playful:
            "Your fate line is etched just right – purposeful without being uptight about it, you've got a plan and a solid plan B.",
        },
      },
      deep: {
        de: {
          spiritual:
            "Eine tief eingeschnittene Schicksalslinie zeigt entschlossene, zielgerichtete Energie – wenn du dich für einen Weg entscheidest, verfolgst du ihn mit ganzer Überzeugung.",
          playful:
            "Deine Schicksalslinie ist tief eingegraben – wenn du dich für etwas entscheidest, gibt's kein Zurück, nur Vollgas.",
        },
        en: {
          spiritual:
            "A deeply carved fate line shows determined, purposeful energy – once you commit to a path, you pursue it with full conviction.",
          playful:
            "Your fate line is carved in deep – once you commit to something, there's no turning back, only full throttle.",
        },
      },
    },
  },

  mounts: {
    jupiter: {
      prominent: {
        de: {
          spiritual:
            "Ein ausgeprägter Jupiterhügel unter dem Zeigefinger gilt klassisch als Zeichen natürlicher Führungskraft – du trägst den Wunsch in dir, Verantwortung zu übernehmen und andere mitzunehmen.",
          playful:
            "Dein Jupiterhügel ist top ausgebildet – du bist von Natur aus die Person, die im Gruppenprojekt automatisch die Ansage macht, und alle sind heimlich dankbar dafür.",
        },
        en: {
          spiritual:
            "A prominent mount of Jupiter beneath the index finger has classically marked natural leadership – you carry within you a genuine drive to take responsibility and bring others along.",
          playful:
            "Your mount of Jupiter is fully stacked – you're the person who naturally takes charge of the group project, and secretly everyone is relieved about it.",
        },
      },
      average: {
        de: {
          spiritual:
            "Ein ausgewogener Jupiterhügel zeigt gesunden Ehrgeiz und Selbstvertrauen – du strebst nach vorn, ohne dabei andere zu überstrahlen oder zu übergehen.",
          playful:
            "Dein Jupiterhügel ist schön im Gleichgewicht – ambitioniert genug, um Ziele zu erreichen, entspannt genug, um dabei niemandem auf die Füße zu treten.",
        },
        en: {
          spiritual:
            "A well-balanced mount of Jupiter shows healthy ambition and self-confidence – you push forward without needing to outshine or override anyone else.",
          playful:
            "Your mount of Jupiter sits in a nice balance – ambitious enough to hit your goals, relaxed enough not to step on anyone's toes doing it.",
        },
      },
      flat: {
        de: {
          spiritual:
            "Ein flacher Jupiterhügel deutet auf eine bescheidene, zurückhaltende Art hin, mit Anerkennung umzugehen – du führst lieber durch Beispiel als durch große Bühne.",
          playful:
            "Dein Jupiterhügel hält sich dezent im Hintergrund – du bist eher leise Kompetenz als lautes Rampenlicht, und das wirkt.",
        },
        en: {
          spiritual:
            "A flatter mount of Jupiter suggests a modest, understated relationship with recognition – you tend to lead by example rather than by seeking the spotlight.",
          playful:
            "Your mount of Jupiter keeps a low profile – you're quiet competence rather than loud spotlight, and honestly, it works.",
        },
      },
    },
    saturn: {
      prominent: {
        de: {
          spiritual:
            "Ein ausgeprägter Saturnhügel unter dem Mittelfinger zeigt tiefe Disziplin und einen Sinn für Verantwortung – du nimmst das Leben ernst und trägst deine Aufgaben mit Sorgfalt.",
          playful:
            "Dein Saturnhügel ist stark ausgeprägt – du bist die verlässliche Person, die tatsächlich zu jedem Termin pünktlich erscheint, mit Tagesordnung im Kopf.",
        },
        en: {
          spiritual:
            "A prominent mount of Saturn beneath the middle finger shows deep discipline and a strong sense of responsibility – you take life seriously and carry your duties with real care.",
          playful:
            "Your mount of Saturn is well developed – you're the reliable one who actually shows up on time to everything, mental agenda already loaded.",
        },
      },
      average: {
        de: {
          spiritual:
            "Ein ausgewogener Saturnhügel zeigt eine gesunde Mischung aus Ernsthaftigkeit und Leichtigkeit – du nimmst Verantwortung an, ohne dich davon erdrücken zu lassen.",
          playful:
            "Dein Saturnhügel ist schön ausbalanciert – ernst genug, um erwachsen zu sein, locker genug, um trotzdem Spaß zu haben.",
        },
        en: {
          spiritual:
            "A well-balanced mount of Saturn shows a healthy mix of seriousness and lightness – you take on responsibility without letting it weigh you down.",
          playful:
            "Your mount of Saturn is nicely balanced – serious enough to be a proper adult, relaxed enough to still have fun doing it.",
        },
      },
      flat: {
        de: {
          spiritual:
            "Ein flacher Saturnhügel deutet auf eine unbeschwerte, leichte Herangehensweise ans Leben hin – du lässt dich von Ernst und Schwere nicht so leicht einfangen.",
          playful:
            "Dein Saturnhügel ist entspannt flach – Regeln und Grübeln sind einfach nicht so dein Ding, du gehst lieber leichtfüßig durchs Leben.",
        },
        en: {
          spiritual:
            "A flatter mount of Saturn suggests a light, unburdened approach to life – gravity and heaviness don't easily take hold of you.",
          playful:
            "Your mount of Saturn keeps things relaxed and flat – rules and brooding just aren't your thing, you'd rather move through life light on your feet.",
        },
      },
    },
    apollo: {
      prominent: {
        de: {
          spiritual:
            "Ein ausgeprägter Apollo- oder Sonnenhügel unter dem Ringfinger ist klassisch das Zeichen von Kreativität und natürlicher Ausstrahlung – du ziehst Aufmerksamkeit an, ohne sie zu suchen.",
          playful:
            "Dein Apollo-Hügel ist voll ausgestattet – du hast diese Hauptrollen-Energie, die einen Raum füllt, sobald du ihn betrittst.",
        },
        en: {
          spiritual:
            "A prominent mount of Apollo, or the Sun, beneath the ring finger has classically marked creativity and natural charisma – you draw attention without ever having to chase it.",
          playful:
            "Your mount of Apollo is fully loaded – you've got that main-character energy that fills a room the second you walk in.",
        },
      },
      average: {
        de: {
          spiritual:
            "Ein ausgewogener Apollo-Hügel zeigt eine gesunde kreative Ader mit gutem Gespür für die richtige Bühne – deine Ausstrahlung zeigt sich, wenn es zählt.",
          playful:
            "Dein Apollo-Hügel ist schön ausgewogen – kreativ genug, um zu glänzen, bescheiden genug, um es nicht zu übertreiben.",
        },
        en: {
          spiritual:
            "A well-balanced mount of Apollo shows a healthy creative streak with a good sense of when the stage actually matters – your radiance shows itself when it counts.",
          playful:
            "Your mount of Apollo is nicely balanced – creative enough to shine, humble enough not to overdo it.",
        },
      },
      flat: {
        de: {
          spiritual:
            "Ein flacher Apollo-Hügel deutet auf eine ruhige, unaufdringliche Art hin, Talente auszudrücken – dein Glanz zeigt sich lieber im Kleinen als auf großer Bühne.",
          playful:
            "Dein Apollo-Hügel ist dezent flach – du bist kein Rampenlicht-Typ, aber wer genau hinschaut, sieht trotzdem den Funken.",
        },
        en: {
          spiritual:
            "A flatter mount of Apollo suggests a quiet, unassuming way of expressing talent – your spark shows itself in small moments rather than on a grand stage.",
          playful:
            "Your mount of Apollo keeps a low profile – not a spotlight person, but anyone paying attention still catches the spark.",
        },
      },
    },
    mercury: {
      prominent: {
        de: {
          spiritual:
            "Ein ausgeprägter Merkurhügel unter dem kleinen Finger steht für lebhafte Kommunikationsgabe und einen wachen, wortgewandten Geist – Sprache ist dein Werkzeug und dein Vergnügen.",
          playful:
            "Dein Merkurhügel ist bestens ausgestattet – du findest für jede Situation genau den richtigen Spruch, meistens auch noch witzig.",
        },
        en: {
          spiritual:
            "A prominent mount of Mercury beneath the little finger marks a lively gift for communication and a quick, articulate mind – language is both your tool and your pleasure.",
          playful:
            "Your mount of Mercury is fully stocked – you've always got exactly the right line for the moment, and it's usually funny too.",
        },
      },
      average: {
        de: {
          spiritual:
            "Ein ausgewogener Merkurhügel zeigt solide kommunikative Fähigkeiten – du drückst dich klar aus und hörst dabei genauso gut zu, wie du sprichst.",
          playful:
            "Dein Merkurhügel ist schön im Gleichgewicht – du redest, wenn es was zu sagen gibt, und hörst zu, wenn es was zu hören gibt.",
        },
        en: {
          spiritual:
            "A well-balanced mount of Mercury shows solid communicative ability – you express yourself clearly and listen just as well as you speak.",
          playful:
            "Your mount of Mercury sits in a nice balance – you talk when there's something worth saying, and listen when there's something worth hearing.",
        },
      },
      flat: {
        de: {
          spiritual:
            "Ein flacher Merkurhügel deutet auf eine zurückhaltende, bedachte Art der Kommunikation hin – du wählst deine Worte lieber sorgfältig als spontan.",
          playful:
            "Dein Merkurhügel hält sich zurück – du bist kein Vielredner, aber wenn du was sagst, hat es Gewicht.",
        },
        en: {
          spiritual:
            "A flatter mount of Mercury suggests a reserved, considered style of communication – you prefer choosing your words carefully over speaking on the fly.",
          playful:
            "Your mount of Mercury stays understated – you're no chatterbox, but when you do speak, it carries weight.",
        },
      },
    },
    venus: {
      prominent: {
        de: {
          spiritual:
            "Ein ausgeprägter Venushügel an der Daumenwurzel gilt klassisch als Zeichen überströmender Warmherzigkeit, Sinnlichkeit und Lebensfreude – du liebst mit ganzem Herzen und vollem Körper.",
          playful:
            "Dein Venushügel ist großzügig ausgebildet – du bist die Person, die Umarmungen wie Vollkontaktsport betreibt und es lieben herzlich meint.",
        },
        en: {
          spiritual:
            "A prominent mount of Venus at the base of the thumb has classically marked overflowing warmth, sensuality and zest for life – you love with your whole heart and your whole self.",
          playful:
            "Your mount of Venus is generously developed – you're the friend who hugs like it's a full-contact sport, and means every bit of it.",
        },
      },
      average: {
        de: {
          spiritual:
            "Ein ausgewogener Venushügel zeigt eine warme, aber maßvolle Herzlichkeit – du gibst Nähe gern, ohne sie zu verausgaben.",
          playful:
            "Dein Venushügel ist schön im Mittelfeld – herzlich, aber nicht klebrig, du kennst den Unterschied zwischen Nähe und Grenzüberschreitung.",
        },
        en: {
          spiritual:
            "A well-balanced mount of Venus shows warmth held in good measure – you offer closeness freely, without depleting yourself in the process.",
          playful:
            "Your mount of Venus sits right in the middle – warm but never clingy, you know exactly where closeness ends and overstepping begins.",
        },
      },
      flat: {
        de: {
          spiritual:
            "Ein flacher Venushügel deutet auf eine zurückhaltendere, aber keineswegs kühlere Art der Zuneigung hin – deine Wärme zeigt sich in wenigen, aber echten Gesten.",
          playful:
            "Dein Venushügel ist dezent – du bist keine Kuschel-Maschine, aber die Zuneigung, die du zeigst, ist hundert Prozent echt.",
        },
        en: {
          spiritual:
            "A flatter mount of Venus suggests a more reserved, though never cooler, form of affection – your warmth reveals itself in fewer gestures, but ones that are entirely genuine.",
          playful:
            "Your mount of Venus keeps things understated – you're no cuddle machine, but whatever affection you do show is a hundred percent real.",
        },
      },
    },
    moon: {
      prominent: {
        de: {
          spiritual:
            "Ein ausgeprägter Mondhügel steht klassisch für reiche Vorstellungskraft und feine Intuition – du spürst Stimmungen und Zusammenhänge, bevor sie in Worte gefasst sind.",
          playful:
            "Dein Mondhügel ist voll ausgestattet – dein Bauchgefühl liegt öfter richtig als jede Wettervorhersage.",
        },
        en: {
          spiritual:
            "A prominent mount of the Moon has classically marked rich imagination and fine intuition – you sense moods and connections long before they're ever put into words.",
          playful:
            "Your mount of the Moon is fully loaded – your gut feeling is right more often than the weather forecast.",
        },
      },
      average: {
        de: {
          spiritual:
            "Ein ausgewogener Mondhügel zeigt eine gesunde Balance zwischen Intuition und Realitätssinn – du träumst, bleibst aber mit beiden Füßen erreichbar.",
          playful:
            "Dein Mondhügel ist schön ausbalanciert – du hast Fantasie, aber verlierst dich nicht komplett in Tagträumen.",
        },
        en: {
          spiritual:
            "A well-balanced mount of the Moon shows a healthy balance between intuition and a sense of reality – you dream, while keeping both feet reachable on the ground.",
          playful:
            "Your mount of the Moon is nicely balanced – plenty of imagination, but you don't get lost entirely in daydreams.",
        },
      },
      flat: {
        de: {
          spiritual:
            "Ein flacher Mondhügel deutet auf eine bodenständige, realistische Sichtweise hin – du vertraust lieber dem, was greifbar ist, als dem, was nur geahnt wird.",
          playful:
            "Dein Mondhügel bleibt flach am Boden – Tagträumen ist nicht so dein Ding, du magst es lieber handfest und klar.",
        },
        en: {
          spiritual:
            "A flatter mount of the Moon suggests a grounded, realistic outlook – you trust what's tangible more readily than what's merely sensed.",
          playful:
            "Your mount of the Moon stays close to the ground – daydreaming isn't really your scene, you like things clear and concrete.",
        },
      },
    },
    mars: {
      prominent: {
        de: {
          spiritual:
            "Ein ausgeprägter Marshügel steht für Mut, Tatkraft und den Willen, Herausforderungen direkt anzugehen – du weichst Konflikten nicht aus, du gehst durch sie hindurch.",
          playful:
            "Dein Marshügel ist bestens ausgebildet – Herausforderungen sind für dich kein Stoppschild, sondern eher eine Einladung.",
        },
        en: {
          spiritual:
            "A prominent mount of Mars stands for courage, drive and a readiness to meet challenges head-on – you don't sidestep conflict, you move straight through it.",
          playful:
            "Your mount of Mars is fully developed – challenges aren't a stop sign for you, they're basically an invitation.",
        },
      },
      average: {
        de: {
          spiritual:
            "Ein ausgewogener Marshügel zeigt gesunden Mut mit klugem Augenmaß – du kämpfst für das, was zählt, ohne unnötig Kraft zu verschwenden.",
          playful:
            "Dein Marshügel ist schön im Gleichgewicht – mutig genug, um für dich einzustehen, klug genug, um nicht jeden Kampf mitzunehmen.",
        },
        en: {
          spiritual:
            "A well-balanced mount of Mars shows healthy courage tempered with good judgement – you fight for what matters without wasting energy on what doesn't.",
          playful:
            "Your mount of Mars sits in a nice balance – brave enough to stand your ground, smart enough not to pick every fight offered.",
        },
      },
      flat: {
        de: {
          spiritual:
            "Ein flacher Marshügel deutet auf eine friedliche, deeskalierende Natur hin – du suchst lieber den ruhigen Weg als die Konfrontation.",
          playful:
            "Dein Marshügel hält sich zurück – du bist Team Kompromiss statt Team Konfrontation, und das bringt oft die besseren Ergebnisse.",
        },
        en: {
          spiritual:
            "A flatter mount of Mars suggests a peaceful, de-escalating nature – you tend to seek the calm route rather than confrontation.",
          playful:
            "Your mount of Mars stays low-key – you're team compromise rather than team confrontation, and it usually gets the better outcome anyway.",
        },
      },
    },
  },

  handShapes: {
    earth: {
      de: {
        spiritual:
          "Eine Erdhand – fest, quadratisch, mit kräftigen Fingern – steht in der klassischen Lehre für einen bodenständigen, praktischen Menschen, der lieber handelt als theoretisiert und tiefe Verlässlichkeit ausstrahlt.",
        playful:
          "Deine Hand ist Team Erde – handfest, praktisch, keine Zeit für Drama, du willst einfach, dass die Dinge funktionieren und fertig sind.",
      },
      en: {
        spiritual:
          "An earth hand – firm and squarish, with sturdy fingers – has classically marked a grounded, practical person who prefers doing over theorising and radiates deep reliability.",
        playful:
          "Your hand is team earth – solid, practical, zero patience for drama, you just want things to work and get done.",
      },
    },
    air: {
      de: {
        spiritual:
          "Eine Lufthand – mit quadratischer Handfläche und langen, schlanken Fingern – gilt klassisch als Zeichen eines regen, kommunikativen Geistes, der Ideen liebt und den Austausch mit anderen braucht.",
        playful:
          "Deine Hand ist Team Luft – dein Kopf ist ein ständig sprudelnder Ideen-Springbrunnen, und du redest am liebsten mit jemandem darüber.",
      },
      en: {
        spiritual:
          "An air hand – a squarish palm paired with long, slender fingers – has classically marked a quick, communicative mind that loves ideas and thrives on exchange with others.",
        playful:
          "Your hand is team air – your brain is a constantly bubbling fountain of ideas, and you'd really rather talk them through with someone.",
      },
    },
    fire: {
      de: {
        spiritual:
          "Eine Feuerhand – längliche Handfläche mit kürzeren, energischen Fingern – steht klassisch für Spontaneität, Enthusiasmus und eine Energie, die andere mitreißt, sobald du einen Raum betrittst.",
        playful:
          "Deine Hand ist Team Feuer – du bist die Person, die eine ruhige Party in fünf Minuten in ein Fest verwandelt, einfach weil du reinkommst.",
      },
      en: {
        spiritual:
          "A fire hand – an elongated palm with shorter, energetic fingers – has classically marked spontaneity, enthusiasm and an energy that sweeps others along the moment you enter a room.",
        playful:
          "Your hand is team fire – you're the person who turns a quiet party into an actual event within five minutes of walking in.",
      },
    },
    water: {
      de: {
        spiritual:
          "Eine Wasserhand – längliche Handfläche mit langen, feingliedrigen Fingern – gilt klassisch als Zeichen eines tief empfindsamen, intuitiven und künstlerischen Wesens, das die Welt vor allem fühlend erfasst.",
        playful:
          "Deine Hand ist Team Wasser – du fühlst Dinge, bevor du sie überhaupt erklären kannst, und aus genau diesem Gefühl entsteht bei dir oft etwas Schönes.",
      },
      en: {
        spiritual:
          "A water hand – an elongated palm with long, delicate fingers – has classically marked a deeply sensitive, intuitive, and artistic nature that grasps the world through feeling first.",
        playful:
          "Your hand is team water – you feel things before you can even explain them, and that exact feeling is usually where something beautiful starts.",
      },
    },
  },

  notableSigns: {
    star: {
      de: {
        spiritual:
          "Ein Stern-Zeichen auf der Handfläche gilt in der klassischen Deutung als eines der glücksverheißendsten Symbole überhaupt – ein Moment plötzlichen Aufblitzens von Erfolg, Erkenntnis oder Gunst genau dort, wo er auftaucht.",
        playful:
          "Ein Stern auf deiner Hand ist quasi ein kleines Konfetti-Symbol des Universums – irgendwo in deiner Geschichte gibt es einen Moment purer, funkelnder Glückssträhne.",
      },
      en: {
        spiritual:
          "A star marking on the palm has classically been read as one of the most fortunate signs of all – a sudden flash of success, insight, or favour appearing exactly where it is found.",
        playful:
          "A star on your palm is basically the universe's little confetti emoji – somewhere in your story there's a moment of pure, sparkly good luck.",
      },
    },
    island: {
      de: {
        spiritual:
          "Ein Insel-Zeichen – eine kleine, in eine Linie eingebettete Schlaufe – markiert klassisch eine Phase der Unterbrechung oder Prüfung, aus der man geschwächt heraustritt, um sich danach umso klarer neu zu sammeln.",
        playful:
          "Eine Insel auf einer deiner Linien ist wie eine kurze Werbepause mitten in der Sendung – unangenehm im Moment, aber danach geht die eigentlich gute Story weiter.",
      },
      en: {
        spiritual:
          "An island marking – a small loop set within a line – has classically indicated a period of interruption or trial, one that leaves you temporarily depleted before you regroup with newfound clarity.",
        playful:
          "An island on one of your lines is like an ad break in the middle of the show – annoying in the moment, but the actually good story picks right back up after.",
      },
    },
    cross: {
      de: {
        spiritual:
          "Ein Kreuz-Zeichen markiert klassisch einen bedeutsamen Wendepunkt oder eine Prüfung, die – je nach Ort auf der Hand – zu innerem Wachstum oder unerwarteten Ereignissen führt.",
        playful:
          "Ein Kreuz auf deiner Hand ist wie ein kleines Ausrufezeichen des Schicksals – 'Achtung, hier passiert was Wichtiges', und meistens lohnt es sich, hinzuschauen.",
      },
      en: {
        spiritual:
          "A cross marking has classically indicated a significant turning point or trial that, depending on where it falls on the hand, leads to inner growth or an unexpected event.",
        playful:
          "A cross on your palm is like fate's little exclamation mark – 'heads up, something important is happening here', and it's usually worth paying attention to.",
      },
    },
    triangle: {
      de: {
        spiritual:
          "Ein Dreieck-Zeichen gilt klassisch als äußerst günstiges Symbol für Talent und Harmonie – es verweist auf eine natürliche Begabung, die sich mit wenig Widerstand entfalten darf.",
        playful:
          "Ein Dreieck auf deiner Hand ist wie ein kleines Gütesiegel – 'hier steckt echtes Talent drin', ganz ohne Kleingedrucktes.",
      },
      en: {
        spiritual:
          "A triangle marking has classically been read as a highly favourable symbol of talent and harmony – it points to a natural gift that unfolds with remarkably little resistance.",
        playful:
          "A triangle on your palm is basically a little seal of approval – 'genuine talent lives here', no fine print attached.",
      },
    },
    chain: {
      de: {
        spiritual:
          "Ein Ketten-Zeichen – eine Reihe kleiner, miteinander verbundener Schlaufen entlang einer Linie – deutet klassisch auf eine Phase wiederkehrender kleiner Herausforderungen hin, die dich in Etappen, aber beständig stärker machen.",
        playful:
          "Eine Kette auf einer deiner Linien sieht dramatisch aus, heißt aber eigentlich nur: viele kleine Level-ups statt eines großen Bosskampfs.",
      },
      en: {
        spiritual:
          "A chain marking – a series of small, linked loops along a line – has classically indicated a stretch of recurring small challenges that strengthen you gradually, in stages, but steadily.",
        playful:
          "A chain on one of your lines looks dramatic, but really it just means lots of small level-ups instead of one big boss fight.",
      },
    },
  },
};

export default knowledgeBase;
