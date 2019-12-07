const intcode = (input, phaseSetting, signal) => {
  let converted = input
  .split(',')
  .map(x => parseInt(x.trim()));

  let i = 0;
  let opcode = converted[i];

  let iteration = 0;
  let systemIds = [phaseSetting, signal];

  let finalCode = 0;

  while (parseInt(opcode) !== 99) {
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
        converted[finalPosition] = systemIds[iteration];

        iteration++;

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
      case 5: {
        const parameterOne = converted[i + 1];
        const parameterTwo = converted[i + 2];
        const firstParameter = pMode1 ? parameterOne : converted[parameterOne];
        const secondParameter = pMode2 ? parameterTwo : converted[parameterTwo];
      
        if (firstParameter !== 0) {
          i = secondParameter;
        } else {
          i += 3;
        }
      }; break;
      case 6: {
        // if === 0 pointer to 2nd parameter
        const parameterOne = converted[i + 1];
        const parameterTwo = converted[i + 2];
        const firstParameter = pMode1 ? parameterOne : converted[parameterOne];
        const secondParameter = pMode2 ? parameterTwo : converted[parameterTwo];

        if (firstParameter === 0) {
          i = secondParameter;
        } else {
          i += 3;
        }
      }; break;
      case 7: {
        // if firstParameter < secondParameter ? store 1 converted[thirdParameter] : store 0
        const parameterOne = converted[i + 1];
        const parameterTwo = converted[i + 2];
        const parameterThree = converted[i + 3];
        const firstParameter = pMode1 ? parameterOne : converted[parameterOne];
        const secondParameter = pMode2 ? parameterTwo : converted[parameterTwo];

        if (firstParameter < secondParameter) {
          converted[parameterThree] = 1;
        } else {
          converted[parameterThree] = 0;
        }
  
        i += 4;
      }; break;
      case 8: {
        // if firstParameter === secondParamter ? store 1 converted[thirdParamter] : 0
        const parameterOne = converted[i + 1];
        const parameterTwo = converted[i + 2];
        const parameterThree = converted[i + 3];
        const firstParameter = pMode1 ? parameterOne : converted[parameterOne];
        const secondParameter = pMode2 ? parameterTwo : converted[parameterTwo];

        if (firstParameter === secondParameter) {
          converted[parameterThree] = 1;
        } else {
          converted[parameterThree] = 0;
        }
  
        i += 4;
      }; break;
      case 99: {
        return finalCode;
      }; 
    }
  };

  return finalCode;
}

module.exports = intcode;