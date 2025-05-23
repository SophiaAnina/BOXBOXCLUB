import React from "react";

const articles = [
  {
    id: 1,
    title: "Regler for Sprint Race i Formel 1",
    sections: [
      {
        id: "intro",
        subtitle: "",
        content: `Sprint-racet er en nyere tilføjelse til Formel 1-kalenderen...`
      },
      // Same as before…
    ]
  },
  {
    id: 2,
    title: "Hvad er DRS i Formel 1?",
    sections: [
      {
        id: "hvad-er-drs",
        subtitle: "Hvad er DRS?",
        content: `DRS (Drag Reduction System) er et system, der tillader biler at reducere luftmodstanden ved at åbne en klap på bagvingen under visse betingelser.`
      },
      {
        id: "hvordan-fungerer-drs",
        subtitle: "Hvordan fungerer det?",
        content: `Når en bil er inden for én sekund af bilen foran på en DRS-zone, kan føreren aktivere systemet og dermed øge topfarten.`
      },
      {
        id: "regler-for-drs",
        subtitle: "Hvornår må DRS bruges?",
        content: `DRS må kun bruges i definerede zoner på banen og først efter to omgange er kørt i løbet.`
      }
    ]
  },
  {
    id: 3,
    title: "Dæktyper i Formel 1",
    sections: [
      {
        id: "oversigt",
        subtitle: "Oversigt over dæktyper",
        content: `Der findes tre tørvejrsdæk: soft, medium og hard. Derudover bruges intermediate og full wet til regnvejr.`
      },
      {
        id: "strategi",
        subtitle: "Dækstrategi",
        content: `Holdene planlægger deres løb omkring dækslid og vejrforhold, hvilket gør dækskift til en afgørende faktor.`
      }
    ]
  },
  {
    id: 4,
    title: "Formel 1 Kvalifikation Forklaret",
    sections: [
      {
        id: "format",
        subtitle: "Format",
        content: `Kvalifikationen består af tre sessioner: Q1, Q2 og Q3. Efter hver session elimineres de langsomste biler.`
      },
      {
        id: "startplacering",
        subtitle: "Startplacering",
        content: `Den hurtigste bil i Q3 starter forrest i Grand Prix'et.`
      }
    ]
  },
  {
    id: 5,
    title: "Hvad er Parc Fermé-reglen?",
    sections: [
      {
        id: "hvad-er-parc-ferme",
        subtitle: "Hvad betyder det?",
        content: `Parc Fermé er en regel, der forhindrer teams i at ændre væsentlige bilindstillinger efter kvalifikationen.`
      },
      {
        id: "regler",
        subtitle: "Hvornår gælder det?",
        content: `Reglen træder i kraft fra kvalifikationens start og gælder frem til løbets start.`
      }
    ]
  },
  {
    id: 6,
    title: "Historien om Formel 1-verdensmesterskabet",
    sections: [
      {
        id: "begyndelsen",
        subtitle: "Begyndelsen",
        content: `Det første officielle Formel 1 verdensmesterskab blev afholdt i 1950 på Silverstone-banen.`
      },
      {
        id: "udviklingen",
        subtitle: "Udvikling gennem tiden",
        content: `Sporten har udviklet sig fra farlige løb til en teknologisk avanceret konkurrence med stor global popularitet.`
      }
    ]
  },
  {
    id: 7,
    title: "Banerekorder i Formel 1",
    sections: [
      {
        id: "hvad-er-banerekord",
        subtitle: "Hvad er en banerekord?",
        content: `Den hurtigste tid sat på en bestemt bane under officielle løbsforhold.`
      },
      {
        id: "eksempler",
        subtitle: "Eksempler",
        content: `Lewis Hamilton har rekord på Silverstone, mens Max Verstappen har sat flere banerekorder i nyere tid.`
      }
    ]
  },
  {
    id: 8,
    title: "Hvad er en Virtual Safety Car?",
    sections: [
      {
        id: "hvad-er-vsc",
        subtitle: "Forklaring",
        content: `En Virtual Safety Car (VSC) bruges til at neutralisere et løb uden at sende en fysisk safety car på banen.`
      },
      {
        id: "formaal",
        subtitle: "Formål",
        content: `Formålet er at beskytte førere og officials ved uheld uden at afbryde løbet fuldstændigt.`
      }
    ]
  },
  {
    id: 9,
    title: "Formel 1-sæsonens opbygning",
    sections: [
      {
        id: "antal-loeb",
        subtitle: "Antal løb",
        content: `En Formel 1-sæson består typisk af 22-24 Grand Prix-løb fordelt over hele verden.`
      },
      {
        id: "point-system",
        subtitle: "Point system",
        content: `De 10 bedste i hvert løb scorer point, med 25 point til vinderen.`
      }
    ]
  },
  {
    id: 10,
    title: "Hvad er en pitstop-strategi?",
    sections: [
      {
        id: "pitstop-taktik",
        subtitle: "Pitstop-taktik",
        content: `Holdene planlægger nøje deres pitstop for at optimere dækskifte og undgå trafik.`
      },
      {
        id: "under-safety-car",
        subtitle: "Under Safety Car",
        content: `Pitstop under Safety Car kan give gratis tid, da feltet kører langsommere.`
      }
    ]
  }
];

const raceDataArticles = [
  {
    id: 1,
    title: "Hurtigste Banerekorder i Formel 1",
    sections: [
      {
        id: "definition",
        subtitle: "Hvad er en banerekord?",
        content: `En banerekord er den hurtigste omgangstid nogensinde sat på en bane under et Formel 1-løb.`
      },
      {
        id: "eksempler",
        subtitle: "Eksempler",
        content: `Lewis Hamilton satte i 2020 banerekorden på Silverstone med 1:24.303, mens Max Verstappen slog banen i Abu Dhabi med 1:26.103 i 2021.`
      }
    ]
  },
  {
    id: 2,
    title: "Flest Grand Prix-sejre i historien",
    sections: [
      {
        id: "rekordholdere",
        subtitle: "Rekordholdere",
        content: `Lewis Hamilton og Michael Schumacher deler rekorden for flest Grand Prix-sejre med hver 91 sejre.`
      },
      {
        id: "aktive-foerere",
        subtitle: "Aktive førere med flest sejre",
        content: `Max Verstappen, Fernando Alonso og Charles Leclerc er blandt de mest vindende aktive førere.`
      }
    ]
  },
  {
    id: 3,
    title: "De Mest Legendariske Formel 1-baner",
    sections: [
      {
        id: "monaco",
        subtitle: "Monaco Grand Prix",
        content: `Det mest ikoniske løb, afholdt siden 1929 gennem Monacos gader med minimal plads og høj risiko.`
      },
      {
        id: "spa",
        subtitle: "Spa-Francorchamps",
        content: `Belgisk bane kendt for Eau Rouge og Raidillon — en af de mest udfordrende sektioner i motorsport.`
      },
      {
        id: "monza",
        subtitle: "Monza",
        content: `Italiens tempel for fart, med banerekorder og topfarter over 360 km/t.`
      }
    ]
  },
  {
    id: 4,
    title: "Tophastigheder i Formel 1",
    sections: [
      {
        id: "hastighedsrekord",
        subtitle: "Højeste målte hastighed",
        content: `Valtteri Bottas nåede 372.5 km/t under kvalifikationen til 2016 Mexican Grand Prix.`
      },
      {
        id: "nutidige-topfarter",
        subtitle: "Topfarter i dag",
        content: `Moderne biler rammer typisk 330-350 km/t på langsider som Monza og Baku.`
      }
    ]
  },
  {

    id: 5,
    title: "Mest Vindende Konstruktorer",
    sections: [
      {
        id: "historisk-top",
        subtitle: "Historisk top 3",
        content: `1. Ferrari (over 240 sejre)\n2. McLaren (180+)\n3. Mercedes (mere end 125 sejre siden 2010).`
      },
      {
        id: "dominante-perioder",
        subtitle: "Dominante perioder",
        content: `Mercedes dominerede mellem 2014-2020, mens Ferrari havde stærke år i 2000'erne.`
      }
    ]
  },
  {
    id: 6,
    title: "Flest Verdensmesterskaber",
    sections: [
      {
        id: "foerere",
        subtitle: "Førere med flest titler",
        content: `Lewis Hamilton og Michael Schumacher har begge vundet verdensmesterskabet 7 gange.`
      },
      {
        id: "aktive",
        subtitle: "Aktuelle mestre",
        content: `Max Verstappen har vundet tre titler i træk fra 2021-2023.`
      }
    ]
  },
  {
    id: 7,
    title: "Længste Formel 1-løb",
    sections: [
      {
        id: "tid",
        subtitle: "Længste løb i tid",
        content: `2021 Belgian Grand Prix blev det længste i historien med over 3 timer grundet regn og forsinkelser.`
      },
      {
        id: "afstand",
        subtitle: "Længste distance",
        content: `Indianapolis 500, da det var en del af F1-kalenderen (1950-1960), havde længste distance på over 804 km.`
      }
    ]
  },
  {
    id: 8,
    title: "Flest Pole Positions",
    sections: [
      {
        id: "rekordholder",
        subtitle: "Rekordholder",
        content: `Lewis Hamilton har rekorden med over 104 pole positions i karrieren.`
      },
      {
        id: "klassiske-navne",
        subtitle: "Legendariske navne",
        content: `Ayrton Senna var kendt for sine kvalifikationer og satte 65 pole positions.`
      }
    ]
  },
  {
    id: 9,
    title: "Største Formel 1-rivaliseringer",
    sections: [
      {
        id: "senna-prost",
        subtitle: "Senna vs Prost",
        content: `En intens rivalisering fra 1988-1993 mellem Ayrton Senna og Alain Prost.`
      },
      {
        id: "hamilton-verstappen",
        subtitle: "Hamilton vs Verstappen",
        content: `Dramatisk VM-duel i 2021-sæsonen kulminerede med et kontroversielt løb i Abu Dhabi.`
      }
    ]
  },
  {
    id: 10,
    title: "Formel 1’s Ældste Aktive Bane",
    sections: [
      {
        id: "monaco",
        subtitle: "Monaco Grand Prix",
        content: `Monaco har været på kalenderen siden 1950 og er den ældste kontinuerligt afholdte bane.`
      },
      {
        id: "spa",
        subtitle: "Spa-Francorchamps",
        content: `Spa er blandt de ældste, oprindeligt åbnet i 1921 og en fast del af Formel 1 siden 1950.`
      }
    ]
  }
];


export default articles;
export { raceDataArticles };