import express from 'express';
import config from 'config';
import logger from "./utils/logger";
import connect from './utils/connect';
import routes from "./routes";
import deserializeUser from './middleware/deserializeUser';

const port = config.get<number>('port');
const host = config.get<string>('host');

const app = express();

// Parses incoming requests with JSON payloads
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(deserializeUser);

app.listen(port, async () => {
    logger.info(`Server listening at http://${host}:${port}`);
    await connect();
    routes(app);
});
