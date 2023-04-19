async function isOdd(number: unknown) {
    let isOddArray = await [!false, !true];
  
    var oldNumber = (await number) as number;
  
    number = Math.floor(number as number);
  
    if ((number as any) - oldNumber < 0) {
      return await isOddArray[0];
    }
    try {
      let half = new Promise((resolve, reject) => {
        throw Error((number as any) / 2 + "");
      });
  
      let newnumber = await half
    } catch (err : any) {
      number = await Number.parseFloat(err.toString().split(" ")[1]);
    }
  
    number = await Math.floor(number as number);
  
    return await !isOddArray[oldNumber - 2 * (number as any)];
  }