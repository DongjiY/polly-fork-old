import { getSession } from 'next-auth/react';
import { runner } from '../../../lib/database/dbbulletins'


export default async function handler(req,res){
    const session = await getSession({ req })
    if(!session){
        res.status(401).end();
        console.log("> createpost.js: ERROR: User not logged in!")
    }else{
        const user = session.user

        const {
            query: { obj_id },
        } = req

        console.log("> getonepost.js: QUERY PARAMS:", obj_id)


        try{
            const resdb = await runner('getOneBulletin',[ obj_id, user.uid ])
            console.log(resdb)
            if(!resdb.success){
                throw "An error occurred while retrieving the data"
            }
            res.json({data: resdb.data, success: true})
        }catch(err){
            console.log("> getonepost.js: ERROR:",err)
            res.status(500).json({success:false, message:err})
        }
    }
}
