export type Part = {
  id: string;
  name: string;
  sku: string;
  price: number;
  modelCode: string;
};

export const parts: Part[] = [
  // TSX 140 Parts
  { id: 'p1', name: 'Front Brake Lever', sku: 'TSX140-FBL-01', price: 24.99, modelCode: 'TSX140' },
  { id: 'p2', name: 'Air Filter', sku: 'TSX140-AF-05', price: 15.50, modelCode: 'TSX140' },
  { id: 'p3', name: 'Chain 428', sku: 'TSX140-CHN-428', price: 35.00, modelCode: 'TSX140' },

  // TFX 250 Parts
  { id: 'p4', name: 'Oil Filter', sku: 'TFX250-OF-01', price: 9.99, modelCode: 'TFX250' },
  { id: 'p5', name: 'Headlight Assembly', sku: 'TFX250-HLA-01', price: 89.99, modelCode: 'TFX250' },
  { id: 'p6', name: 'Spark Plug', sku: 'TFX250-SP-02', price: 7.50, modelCode: 'TFX250' },

  // ATX 125 Parts
  { id: 'p7', name: 'Front Utility Rack', sku: 'ATX125-RACK-F', price: 120.00, modelCode: 'ATX125' },
  { id: 'p8', name: 'Battery YTX5L-BS', sku: 'ATX125-BAT-01', price: 45.99, modelCode: 'ATX125' },
  { id: 'p9', name: 'CVT Drive Belt', sku: 'ATX125-BELT-01', price: 55.00, modelCode: 'ATX125' },
];