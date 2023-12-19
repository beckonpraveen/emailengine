const createIfNotExist = async (result, accountKey) => {
    try {
        // if (!result || !result.account) {
            // console.log("CSK account ket is::", accountKey)
            let accountId = accountKey.split(":")[1]
            const dbaccount = await prisma.iad.findFirst({ where: { account: accountId } })
            // if(dbaccount.hasOwnProperty("statecountconnected")){
            //     dbaccount["state:count:connected"] = dbaccount.statecountconnected
            //     delete dbaccount.statecountconnected
            // }
            // if(dbaccount.hasOwnProperty("statecountsyncing")){
            //     dbaccount["state:count:syncing"] = dbaccount.statecountsyncing
            //     delete dbaccount.statecountsyncing
            // }
            // if(dbaccount.hasOwnProperty("stateCountConnectError")){
            //     dbaccount["state:count:connect:error"] = dbaccount.stateCountConnectError
            //     delete dbaccount.stateCountConnectError
            // }
            // if(dbaccount.hasOwnProperty("stateCountAuthenticationError")){
            //     dbaccount["state:count:authentication:error"] = dbaccount.stateCountAuthenticationError
            //     delete dbaccount.stateCountAuthenticationError
            // }
            return   dbaccount          
        // }
        
    } catch (error) {
        
    }
}

const createAccount = async (serializedAccountData) => {
    try {
        if(serializedAccountData.smtp){

            serializedAccountData.smtp = JSON.parse(serializedAccountData.smtp)
        }
        if(serializedAccountData.imap){
            serializedAccountData.imap = JSON.parse(serializedAccountData.imap)
        }
        if(serializedAccountData.oauth2){
            serializedAccountData.oauth2 = JSON.parse(serializedAccountData.oauth2)
        }
        if(serializedAccountData.imapServerInfo){
            serializedAccountData.imapServerInfo = JSON.parse(serializedAccountData.imapServerInfo)
        }


        if(serializedAccountData.copy){
            serializedAccountData.copy = serializedAccountData.copy.toString()
        }
        
        console.log("serializedAccountData" , serializedAccountData);
        const account = await prisma.iad.create({
            data: serializedAccountData
        })
    } catch (error) {
        console.log("CSK error ", error)
    }
}

const updateAccount = async (id,serializedAccountData) => {
    try {
        const dbaccount = await prisma.iad.findFirst({ where: { account: id } })
        if (dbaccount) {
            // let serializedAccountData = this.serializeAccountData(accountData);
            console.log("CSK going to update serializedAccountData ", serializedAccountData)
            
            const account = await prisma.iad.update({
                where: {
                    id: dbaccount.id,
                },
                data: serializedAccountData
            })
        }
    } catch (error) {
        console.log("CSK error ", error)
    }
}

const deleteAccount = async (id) => {
    try {
        const dbaccount = await prisma.iad.findFirst({ where: { account: id } })
        console.log("CSK dbaccount ", dbaccount)
        const deletedbaccount = await prisma.iad.delete({
            where: {
                id: dbaccount?.id,
            }
        })
        return deletedbaccount;
    } catch (error) {
        console.log("CSK error on delete account ");
    }
} 


module.exports = {
    createAccount,
    updateAccount,
    deleteAccount,
    createIfNotExist
}