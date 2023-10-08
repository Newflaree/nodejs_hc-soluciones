import mongoose from 'mongoose';

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */
const mongoConnection = {
  isConnected: 0
}

export const connect = async () => {
  try {
    if ( mongoConnection.isConnected ) {
      console.log( `${ '[CONFIG.DATABASE.CONNECT]'.bgGreen }: Now we are connected` );
      return;
    }

    if ( mongoose.connections.length > 0 ) {
      mongoConnection.isConnected = mongoose.connections[0].readyState;

      if ( mongoConnection.isConnected === 1 ) {
        console.log( `${ '[CONFIG.DATABASE.CONNECT]'.bgGreen }: Using previous connction` );
        return;
      }

      await mongoose.disconnect();
    }

    await mongoose.connect( process.env.MONGO_CNN_LOCAL || '');
    mongoConnection.isConnected = 1;

    console.log( `${ '[CONFIG.DATABASE.CONNECT]'.bgGreen }: Database ${ 'ONLINE'.green }` );

  } catch ( error ) {
    await mongoose.disconnect();
    console.log( `${ '[CONFIG.DATABASE.CONNECT]'.bgRed }: ${ error }` );
  }
}

export const disconnect = async () => {
  try {
    if ( process.env.NODE_ENV === 'development' ) return;

    if ( mongoConnection.isConnected === 0 ) return;

    await mongoose.disconnect();
    mongoConnection.isConnected = 0;

    console.log( `${ '[CONFIG.DATABASE.DISCONNECT]'.bgGreen }: Disconnected from MongoDB` );

  } catch ( error ) {
    await mongoose.disconnect();
    console.log( `${ '[CONFIG.DATABASE.DISCONNECT]'.bgRed }: ${ error }` );
  }
}
