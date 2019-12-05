const diagnosticCode = (input, systemId) => {
  let converted = input
    .split(',')
    .map(x => parseInt(x.trim()));

  let i = 0;
  let opcode = converted[i];

  while (opcode !== 99) {
    opcode = converted[i];

    switch (opcode) {
      case 1: {
        const firstPosition = converted[i + 1];
        const secondPosition = converted[i + 2];
        const finalPosition = converted[i + 3];

        const sum = converted[firstPosition] + converted[secondPosition];
        converted[finalPosition] = sum;

        i += 4;
      }; break;
      case 2: {
        const firstPosition = converted[i + 1];
        const secondPosition = converted[i + 2];
        const finalPosition = converted[i + 3];

        const product = converted[firstPosition] * converted[secondPosition];
        converted[finalPosition] = product;

        i += 4;
      }; break;
      case 3: {
        const finalPosition = converted[i + 1];

        // save to next parameter
        converted[finalPosition] = systemId;

        i += 2;
      }; break;
      case 4: {
        const finalPosition = converted[i + 1];

        // output value at next parameter
        console.log(converted[finalPosition]);

        i += 2;
      }; break;
      default: {
        // parameter mode
        let originalOpcode = opcode;
        const parameterMode = originalOpcode.toString().split('').map(Number);
        const size = parameterMode.length - 1;

        const parameterizedOpcode = 
          parseInt(`${parameterMode[size - 1].toString()}${parameterMode[size].toString()}`);

        const pMode1 = parameterMode[size - 2];
        const pMode2 = parameterMode[size - 3];

        switch (parameterizedOpcode) {
          case 1: {
            let addendOne = 0;
            let addendTwo = 0;
            const parameterOne = converted[i + 1];
            const parameterTwo = converted[i + 2];
            const finalPosition = converted[i + 3];

            addendOne = pMode1 ? parameterOne : converted[parameterOne];
            addendTwo = pMode2 ? parameterTwo : converted[parameterTwo];

            converted[finalPosition] = addendOne + addendTwo;

            i += 4;
          }; break;
          case 2: {
            let productOne = 0;
            let productTwo = 0;
            const parameterOne = converted[i + 1];
            const parameterTwo = converted[i + 2];
            const finalPosition = converted[i + 3];

            productOne = pMode1 ? parameterOne : converted[parameterOne];
            productTwo = pMode2 ? parameterTwo : converted[parameterTwo];
            
            converted[finalPosition] = productOne * productTwo;

            i += 4;
          }; break;
          case 3: {
            const finalPosition = converted[i + 1];
            convertedF[finalPosition] = systemId;

            i += 2;
          }; break;
          case 4: {
            const finalPosition = converted[i + 1];

            if (pMode1) {
              console.log(finalPosition);
            } else {
              console.log(converted[finalPosition]);
            }

            i += 2;
          }; break;
        }
      }
    };
  };

  return converted;
}

module.exports = diagnosticCode;