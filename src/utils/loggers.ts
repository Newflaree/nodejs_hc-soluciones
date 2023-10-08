export const listenServerLogger = ( port: string ) => {
  console.clear();
  console.log( `${ '[SERVER.LISTEN]:'.green } Listening on port: ${ port.green }` );
}

export const consoleErrorsHandler = ( error: unknown, fileName: string ) => {
  const words: any[] = fileName.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');
  const type: string = words.pop().toUpperCase();
  const convention = words.map((word: any) => word.toUpperCase()).join('-');

  console.log( `${ `[${type}.${convention}]`.bgRed }: ${ error }` );
}

