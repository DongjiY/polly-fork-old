import { getSession } from "next-auth/react";
import { runner } from "../../../lib/database/dbbulletins"


export default async function handler(req,res){
    const session = await getSession({ req })
    if(!session){
        res.status(401).end();
        console.log("> createpost.js: ERROR: User not logged in!")
    }else{        
        const { upDelta, downDelta, upvoteSelected, downvoteSelected, postid, uid } = await req.body
        console.log('> editvote.js: Incoming Params:',postid,uid,upDelta,downDelta,upvoteSelected,downvoteSelected)

        var chosenVote = ""
        if(upvoteSelected){
            chosenVote = "upvote"
        }else if(downvoteSelected){
            chosenVote = "downvote"
        }else{
            chosenVote = "neither"
        }

        try{
            const resdb = await runner('setVotes', [ postid,uid,chosenVote,upDelta,downDelta ])
            console.log('> editvote.js',resdb.success)
            if(!resdb.success){
                throw "database error!"
            }
            res.status(200).json({success:true})
        }catch(err){
            console.error(err)
            res.status(500).json({success:false})
        }
    }
    
}