const spaceImageFormat = (input, layerSize) => {
  let layers = [];
  let arrayedImage = input.split('');

  while (arrayedImage.length !== 0) {
    let currentLayer = arrayedImage.splice(0, layerSize); // 25 X 6 pixel layers (150)
    layers.push(currentLayer);
  };

  let fewestZeroes = 150;
  let layerWithFewestZeros = [[]];  
  
  layers.forEach(layer => {
    zeroesInLayer = layer.filter(x => parseInt(x) === 0).length;

    if (zeroesInLayer < fewestZeroes && zeroesInLayer !== 0) {
      fewestZeroes = zeroesInLayer;
      layerWithFewestZeros.splice(0, 1, layer);
    }
  });

  let onesInLayer = layerWithFewestZeros[0].filter(x => parseInt(x) === 1).length;
  let twosInLayer = layerWithFewestZeros[0].filter(x => parseInt(x) === 2).length;

  return onesInLayer * twosInLayer;
}

module.exports = spaceImageFormat;