const decodeImage = (input, layerSize) => {
  let layers = [];
  let arrayedImage = input.split('');

  while (arrayedImage.length !== 0) {
    let currentLayer = arrayedImage.splice(0, layerSize); // 25 X 6 pixel layers (150)
    layers.push(currentLayer);
  };

  let stackedPixels = [];

  layers.forEach(layer => {
    for (let i = 0; i < layer.length; i++) {
      stackedPixels[i] = stackedPixels[i] || [];
      stackedPixels[i].push(layer[i]);
    }
  });

  let decoded = stackedPixels.map(stackedLayer => {
    return parseInt(stackedLayer.find(x => parseInt(x) !== 2));
  });

  return decoded.join('');
}

module.exports = decodeImage;