import express from 'express'
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'
import pollRoutes from './routes/poll.routes.js'
import questionRoutes from './routes/question.routes.js'
import itemRoutes from './routes/item.routes.js'
import pollAnswerRoutes from './routes/pollAnswer.routes.js'
import chooseRoutes from './routes/chooses.routes.js'

const app = express();

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use("/api", authRoutes);
app.use("/api", pollRoutes);
app.use("/api", questionRoutes);
app.use("/api", itemRoutes)
app.use("/api", pollAnswerRoutes);
app.use("/api", chooseRoutes);


export default app;