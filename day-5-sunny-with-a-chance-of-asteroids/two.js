const diagnosticCode2 = (input, systemId) => {
  let converted = input
  .split(',')
  .map(x => parseInt(x.trim()));

  let i = 0;
  let opcode = converted[i];

  let finalCode = 0;

  while (parseInt(opcode) !== 99) {
    opcode = converted[i];

    // console.log("i", i, "opcode", opcode);
    // console.log("finalCode", finalCode);

    switch (opcode) {
      case 99: {
        // console.log("Here!");
        return finalCode;
      }; break;
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
        finalCode = converted[finalPosition];
        // console.log(converted[finalPosition]);

        i += 2;
      }; break;
      case 5: {
        const firstParameter = converted[i + 1];
        const secondParameter = converted[i + 2];

        // console.log("not zero", firstParameter, secondParameter);
        if (firstParameter !== 0) {
          i = secondParameter;
        } else {
          i += 3;
        }
      }; break;
      case 6: {
        // if === 0 pointer to 2nd parameter
        const firstParameter = converted[i + 1];
        const secondParameter = converted[i + 2];
        // console.log("is 0", firstParameter, secondParameter);
        if (firstParameter === 0) {
          i = secondParameter;
        } else {
          i += 3;
        }
      }; break;
      case 7: {
        // if firstParameter < secondParameter ? store 1 converted[thirdParameter] : store 0
        const firstPosition = converted[i + 1];
        const secondPosition = converted[i + 2];
        const firstParameter = converted[firstPosition];
        const secondParameter = converted[secondPosition];
        const thirdParameter = converted[i + 3];

        if (firstParameter < secondParameter) {
          converted[thirdParameter] = 1;
        } else {
          converted[thirdParameter] = 0;
        }

        i += 4;
      }; break;
      case 8: {
        // if firstParameter === secondParamter ? store 1 converted[thirdParamter] : 0
        const firstPosition = converted[i + 1];
        const secondPosition = converted[i + 2];
        const firstParameter = converted[firstPosition];
        const secondParameter = converted[secondPosition];
        const thirdParameter = converted[i + 3];

        

        if (firstParameter === secondParameter) {
          converted[thirdParameter] = 1;
        } else {
          converted[thirdParameter] = 0;
        }

        i += 4;
      }; break;
      default: {
        // parameter mode
        let originalOpcode = opcode;
        const parameterMode = originalOpcode.toString().split('').map(Number);
        const size = parameterMode.length - 1;

        // console.log("originalOpcode, parameterMode, size", originalOpcode, parameterMode, size);
        // console.log("parameterMode", parameterMode);
        // console.log(parameterMode[size], parameterMode[size - 1], parameterMode[size - 2], parameterMode[size - 3]);

        const parameterizedOpcode = 
          parseInt(`${parameterMode[size - 1].toString()}${parameterMode[size].toString()}`);

          // console.log(parameterizedOpcode);
        const pMode1 = parameterMode[size - 2];
        const pMode2 = parameterMode[size - 3];
        const pMode3 = parameterMode[size - 4] === undefined ? 0 : parameterMode[size - 4]; 

        // console.log("pModes", pMode1, pMode2, pMode3);

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
            // console.log("opcode 5", parameterOne, parameterTwo, firstParameter, secondParameter, firstParameter !== 0);
      
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
            // console.log("parameterOne, parameterTwo, pMode1, pMode2", parameterOne, parameterTwo, pMode1, pMode2);
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
            // console.log("parameterOne, parameterTwo, pMode1, pMode2", parameterOne, parameterTwo, pMode1, pMode2);
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
            // console.log("parameterOne, parameterTwo, pMode1, pMode2", parameterOne, parameterTwo, pMode1, pMode2);
            if (firstParameter === secondParameter) {
              converted[parameterThree] = 1;
            } else {
              converted[parameterThree] = 0;
            }
      
            i += 4;
          }; break;
          case 99: {
            // console.log("Here two!");
            return finalCode;
          }; break;
        }
      }
    };

    // console.log(converted.join(","));
  };

  return finalCode;
}

module.exports = diagnosticCode2;