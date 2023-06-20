const path = require("path");
const fs = require("fs");
const fsPromises = require("fs/promises");
const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const logEvents = async (message, logFileName) => {
    const dateTime = `${format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')}`;
    const logItem = `${uuid()}\t${dateTime}\t${message}\n`;

    // check if te directory exists
    if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
        fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
    }
    fsPromises.appendFile(path.join(__dirname, '..', 'logs', logFileName), logItem);
}

const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.url}\t${req.header.origin}`, 'reqLog.log');
    console.log(req.method, req.path);
    next();
}

module.exports = { logEvents, logger };