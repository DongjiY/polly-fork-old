import { getSession } from "next-auth/react";
import { runner } from "../../../lib/database/dbbulletins"


export default async function handler(req,res){
    const session = await getSession({ req })
    if(!session){
        res.status(401).end();
        console.log("> createpost.js: ERROR: User not logged in!")
    }else{
        const usr = session.user

        const {authID, postID, statement, map, mapLink, body} = await req.body
        console.log('> createPost.js: Recieved Info:',authID, postID, statement, map, mapLink, body, usr)

        try{
            if(statement.trim()===''||body.trim()===''){
                throw "Please fill in all fields!"
            }
            if(authID !== usr.uid){
                throw "You are not authorized to make edits to this post"
            }

            const resdb = await runner('updateBulletin', [ postID, statement, map, mapLink, body ])

            if(!resdb.success){
                throw resdb.msg
            }

            res.status(200).json({ success: true })
        }catch(err){
            console.log('> createpost.js: ERR:',err)
            res.status(400).json({success: false, msg: err})
        }
    }
    
}