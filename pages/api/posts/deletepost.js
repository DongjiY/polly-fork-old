import { getSession } from "next-auth/react";
import { runner } from "../../../lib/database/dbbulletins"

export default async function handler(req,res){
    const session = await getSession({ req })
    if(!session){
        res.status(401).end();
        console.log("> deletepost.js: ERROR: User not logged in!")
    }else{        
        const { postID } = await req.body
        console.log('> deletepost.js:',postID)

        try{
            const resdb = await runner('removeBulletin', [ postID ])
            
            if(!resdb.success){
                throw resdb.msg
            }

            res.status(200).json({ success: true })
        }catch(err){
            res.status(500).json({success: false, msg: err})
        }
    }
}