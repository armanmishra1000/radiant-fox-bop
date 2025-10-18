export type VinRecord = {
  vinPrefix: string;
  modelCode: string;
  modelName: string;
  year: number;
};

export const vinRecords: VinRecord[] = [
  {
    vinPrefix: 'ABC123TSX140',
    modelCode: 'TSX140',
    modelName: 'TSX 140 GR',
    year: 2023,
  },
  {
    vinPrefix: 'DEF456TFX250',
    modelCode: 'TFX250',
    modelName: 'TFX 250 EN',
    year: 2024,
  },
  {
    vinPrefix: 'GHI789ATX125',
    modelCode: 'ATX125',
    modelName: 'ATX 125 UT',
    year: 2022,
  },
];