const diagnosticCode = (input, systemId) => {
  let converted = input
    .split(',')
    .map(x => parseInt(x.trim()));

  let i = 0;
  let opcode = converted[i];

  let finalCode = 0;

  while (opcode !== 99) {
    opcode = converted[i];

    const parameterMode = opcode.toString().split('').map(Number);
    let parameterizedOpcode, pMode1, pMode2 = 0;
    
    if (parameterMode.length > 1) {
      const size = parameterMode.length - 1;

      parameterizedOpcode = 
        parseInt(`${parameterMode[size - 1].toString()}${parameterMode[size].toString()}`);

      pMode1 = parameterMode[size - 2];
      pMode2 = parameterMode[size - 3];
 
    } else {
      parameterizedOpcode = parameterMode[0];
    }
    
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
        converted[finalPosition] = systemId;

        i += 2;
      }; break;
      case 4: {
        const finalPosition = converted[i + 1];

        if (pMode1) {
          finalCode = finalPosition;
        } else {
          finalCode = converted[finalPosition];
        }

        i += 2;
      }; break;
      case 99: {
        return finalCode;
      };
    };
  };

  return finalCode;
}

module.exports = diagnosticCode;