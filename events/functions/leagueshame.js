
module.exports = client => {
	client.on('presenceUpdate', async (oldPresence, newPresence) => {
        console.log(newPresence)
        // console.log(newPresence)
        const oldAct = oldPresence.activities.find(activity => activity.timestamps != null);
        const newAct = newPresence.activities.find(activity => activity.timestamps != null);
        if (oldAct != undefined){
            // console.log('old', oldAct.timestamps.start);
        }
        if (newAct != undefined){
            // console.log('new', newAct.timestamps.start);
        }
    
        
    });
};