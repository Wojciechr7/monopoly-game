import {FieldsLoadedModel} from "../../../../../../../libs/api-interfaces/src/lib/models/fields-loaded.model";

export const BOARD_SIZE = 11;

export const TEMP_FIELDS: FieldsLoadedModel = {
  other: [
    {
      index: 1,
      type: 1,
      title: 'Start',
    },
    {
      index: 11,
      type: 2,
      title: 'Więzienie',
    },
    {
      index: 31,
      type: 3,
      title: 'Idź do więzienia',
    },
    {
      index: 21,
      type: 4,
      title: 'Parking',
    },
    {
      index: 8,
      type: 8,
      title: 'Szansa 1',
    },
    {
      index: 23,
      type: 8,
      title: 'Szansa 2',
    },
    {
      index: 37,
      type: 8,
      title: 'Szansa 3',
    },
    {
      index: 3,
      type: 9,
      title: 'Kasa społeczna 1',
    },
    {
      index: 18,
      type: 9,
      title: 'Kasa społeczna 2',
    },
    {
      index: 34,
      type: 9,
      title: 'Kasa społeczna 3',
    },
    {
      index: 0,
      type: 10,
      title: 'Żulopoly',
    },
  ],
  powerPlantAndWaterworks: [
    {
      index: 13,
      type: 6,
      title: 'Elektrownia',
      buyPrice: 150,
      pledgePrice: 75,
      rent: [4, 10],
    },
    {
      index: 29,
      type: 6,
      title: 'Wodociągi',
      buyPrice: 150,
      pledgePrice: 75,
      rent: [4, 10],
    }
  ],
  property: [
    {
      index: 2,
      type: 0,
      title: 'Ulica konopacka',
      tier: 1,
      housePrice: 50,
      hotelPrice: 50,
      buyPrice: 60,
      pledgePrice: 30,
      rent: [2, 4, 10, 30, 90, 160, 250]
    },
    {
      index: 4,
      type: 0,
      title: 'Ulica Stalowa',
      tier: 1,
      housePrice: 50,
      hotelPrice: 50,
      buyPrice: 60,
      pledgePrice: 30,
      rent: [4, 8, 20, 60, 180, 320, 450]
    },
    {
      index: 7,
      type: 0,
      title: 'Ulica Radzymińska',
      tier: 1,
      housePrice: 50,
      hotelPrice: 50,
      buyPrice: 100,
      pledgePrice: 50,
      rent: [6, 12, 30, 90, 270, 400, 550]
    },
    {
      index: 9,
      type: 0,
      title: 'Ulica Jagielońska',
      tier: 1,
      housePrice: 50,
      hotelPrice: 50,
      buyPrice: 100,
      pledgePrice: 50,
      rent: [6, 12, 30, 90, 270, 400, 550]
    },
    {
      index: 10,
      type: 0,
      title: 'Ulica Targowa',
      tier: 1,
      housePrice: 50,
      hotelPrice: 50,
      buyPrice: 120,
      pledgePrice: 60,
      rent: [8, 16, 40, 100, 300, 450, 600]
    },
    {
      index: 12,
      type: 0,
      title: 'Ulica Płowiecka',
      tier: 1,
      housePrice: 100,
      hotelPrice: 100,
      buyPrice: 140,
      pledgePrice: 70,
      rent: [10, 20, 50, 150, 450, 620, 750]
    },
    {
      index: 14,
      type: 0,
      title: 'Ulica Marsa',
      tier: 1,
      housePrice: 100,
      hotelPrice: 100,
      buyPrice: 140,
      pledgePrice: 70,
      rent: [10, 20, 50, 150, 450, 625, 750]
    },
    {
      index: 15,
      type: 0,
      title: 'Ulica Grochowska',
      tier: 1,
      housePrice: 100,
      hotelPrice: 100,
      buyPrice: 160,
      pledgePrice: 80,
      rent: [12, 24, 60, 180, 500, 700, 900]
    },
    {
      index: 17,
      type: 0,
      title: 'Ulica Obozowa',
      tier: 1,
      housePrice: 100,
      hotelPrice: 100,
      buyPrice: 180,
      pledgePrice: 90,
      rent: [14, 28, 70, 200, 550, 750, 950]
    },
    {
      index: 19,
      type: 0,
      title: 'Ulica Górczewska',
      tier: 1,
      housePrice: 100,
      hotelPrice: 100,
      buyPrice: 180,
      pledgePrice: 90,
      rent: [14, 28, 70, 200, 550, 750, 950]
    },
    {
      index: 20,
      type: 0,
      title: 'Ulica Wolska',
      tier: 1,
      housePrice: 100,
      hotelPrice: 100,
      buyPrice: 200,
      pledgePrice: 100,
      rent: [16, 32, 80, 220, 600, 800, 1000]
    },
    {
      index: 22,
      type: 0,
      title: 'Ulica Mickiewicza',
      tier: 1,
      housePrice: 150,
      hotelPrice: 150,
      buyPrice: 220,
      pledgePrice: 110,
      rent: [18, 36, 90, 250, 700, 875, 1050]
    },
    {
      index: 24,
      type: 0,
      title: 'Ulica Słowackiego',
      tier: 1,
      housePrice: 150,
      hotelPrice: 150,
      buyPrice: 220,
      pledgePrice: 110,
      rent: [18, 36, 90, 250, 700, 875, 1050]
    },
    {
      index: 25,
      type: 0,
      title: 'Plac Wilsona',
      tier: 1,
      housePrice: 150,
      hotelPrice: 150,
      buyPrice: 240,
      pledgePrice: 120,
      rent: [20, 40, 100, 300, 750, 920, 1100]
    },
    {
      index: 27,
      type: 0,
      title: 'Ulica Świętokrzyska',
      tier: 1,
      housePrice: 150,
      hotelPrice: 150,
      buyPrice: 260,
      pledgePrice: 130,
      rent: [22, 44, 110, 330, 800, 975, 1150]
    },
    {
      index: 28,
      type: 0,
      title: 'Krakowskie Przedmieście',
      tier: 1,
      housePrice: 150,
      hotelPrice: 150,
      buyPrice: 260,
      pledgePrice: 130,
      rent: [22, 44, 110, 330, 800, 975, 1150]
    },
    {
      index: 30,
      type: 0,
      title: 'Nowy Świat',
      tier: 1,
      housePrice: 150,
      hotelPrice: 150,
      buyPrice: 280,
      pledgePrice: 140,
      rent: [24, 48, 120, 360, 850, 1025, 1200]
    },
    {
      index: 32,
      type: 0,
      title: 'Plac Trzech Krzyży',
      tier: 1,
      housePrice: 200,
      hotelPrice: 200,
      buyPrice: 300,
      pledgePrice: 150,
      rent: [26, 52, 130, 390, 900, 1100, 1275]
    },
    {
      index: 33,
      type: 0,
      title: 'Ulica Marszałowska',
      tier: 1,
      housePrice: 200,
      hotelPrice: 200,
      buyPrice: 300,
      pledgePrice: 150,
      rent: [26, 52, 130, 390, 900, 1100, 1275]
    },
    {
      index: 35,
      type: 0,
      title: 'Aleje Jerozolimskie',
      tier: 1,
      housePrice: 200,
      hotelPrice: 200,
      buyPrice: 320,
      pledgePrice: 160,
      rent: [28, 56, 150, 450, 1000, 1200, 1400]
    },
    {
      index: 38,
      type: 0,
      title: 'Ulica Belwederska',
      tier: 1,
      housePrice: 200,
      hotelPrice: 200,
      buyPrice: 350,
      pledgePrice: 175,
      rent: [35, 70, 175, 500, 1100, 1300, 1500]
    },
    {
      index: 40,
      type: 0,
      title: 'Aleje Ujazdowskie',
      tier: 1,
      housePrice: 200,
      hotelPrice: 200,
      buyPrice: 400,
      pledgePrice: 200,
      rent: [50, 100, 200, 600, 1400, 1700, 2000,]
    }
  ],
  railways: [
    {
      index: 6,
      type: 5,
      title: 'Dworzec zachodni',
      buyPrice: 200,
      pledgePrice: 100,
      rent: [25, 50, 100, 200],
    },
    {
      index: 16,
      type: 5,
      title: 'Dworzec gdański',
      buyPrice: 200,
      pledgePrice: 100,
      rent: [25, 50, 100, 200],
    },
    {
      index: 26,
      type: 5,
      title: 'Dworzec wschodni',
      buyPrice: 200,
      pledgePrice: 100,
      rent: [25, 50, 100, 200],
    },
    {
      index: 36,
      type: 5,
      title: 'Dworzec centralny',
      buyPrice: 200,
      pledgePrice: 100,
      rent: [25, 50, 100, 200],
    }
  ],
  tax: [
    {
      index: 5,
      type: 7,
      title: 'Podatek dochodowy',
      price: 200
    },
    {
      index: 39,
      type: 7,
      title: 'Domiar podatkowy',
      price: 100
    }
  ]
};
