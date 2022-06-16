import { getSession } from "next-auth/react";
import { runner } from "../../../lib/database/dbbulletins"

export default async function handler(req,res){
    const session = await getSession({ req })
    if(!session){
        res.status(401).end()
    }else{
        const {bulletinpostID, comment, author, timestamp} = await req.body
        console.log('> addcomment.js: Recieved Info:',bulletinpostID, comment, author, timestamp)

        try{
            if(comment.trim() === ''){
                throw "Cannot submit an empty comment!"
            }
            
            const resdb = await runner('addComment', [bulletinpostID, comment, author.authorID, author.authorName, timestamp])
            console.log('> addcomment.js', resdb)
            
            if(!resdb.success){
                throw resdb.msg
            }

            res.status(200).json({ success: true, commentID: resdb.commentID, })
        }catch(err){
            console.log('> createpost.js: ERR:',err)
            res.status(400).json({success: false, msg: err})
        }
    }
    
}