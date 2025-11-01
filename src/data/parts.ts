export type Part = {
  id: string;
  name: string;
  sku: string;
  modelCode: string;
};

export const parts: Part[] = [
  // TSX 140 Parts
  { id: 'p1', name: 'Front Brake Lever', sku: 'TSX140-FBL-01', modelCode: 'TSX140' },
  { id: 'p2', name: 'Air Filter', sku: 'TSX140-AF-05', modelCode: 'TSX140' },
  { id: 'p3', name: 'Chain 428', sku: 'TSX140-CHN-428', modelCode: 'TSX140' },

  // TFX 250 Parts
  { id: 'p4', name: 'Oil Filter', sku: 'TFX250-OF-01', modelCode: 'TFX250' },
  { id: 'p5', name: 'Headlight Assembly', sku: 'TFX250-HLA-01', modelCode: 'TFX250' },
  { id: 'p6', name: 'Spark Plug', sku: 'TFX250-SP-02', modelCode: 'TFX250' },

  // ATX 125 Parts
  { id: 'p7', name: 'Front Utility Rack', sku: 'ATX125-RACK-F', modelCode: 'ATX125' },
  { id: 'p8', name: 'Battery YTX5L-BS', sku: 'ATX125-BAT-01', modelCode: 'ATX125' },
  { id: 'p9', name: 'CVT Drive Belt', sku: 'ATX125-BELT-01', modelCode: 'ATX125' },
];