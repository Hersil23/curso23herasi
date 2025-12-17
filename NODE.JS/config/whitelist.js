//import cors
import cors from 'cors';

//definir whitelist
const whitelist = ['http://localhost:3000'];

//configurar cors
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

export default cors(corsOptions);