const sqlite3 = require('sqlite3').verbose();

module.exports = () => {
    let db = new sqlite3.Database('../ChaoticDiscordBot/werewolf.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);
    db.serialize(function() {
        db.run("CREATE TABLE IF NOT EXISTS users\
        (userid INT PRIMARY KEY NOT NULL,\
        playingLol BOOLEAN DEFAULT false, \
        startTime INT NOT NULL DEFAULT 0  )");
    }
    );
}
