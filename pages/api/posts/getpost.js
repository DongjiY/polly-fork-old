import { getSession } from 'next-auth/react';
import { runner } from '../../../lib/database/dbbulletins'


export default async function bulletinRoute(req,res){
    const session = await getSession({ req })
    if(!session){
        res.status(401).end();
        console.log("> createpost.js: ERROR: User not logged in!")
    }else{
        const user = session.user
        
        const {
            query: { per_page, obj_id },
        } = req
        
        // console.log("> getpost.js: QUERY PARAMS:", per_page, obj_id)
        // console.log("> getpost.js: User's City:", user.cityID[3])
        // console.log("> getpost.js: User's ID:", user.uid)

        try{
            const data = await runner('getBulletins',[ user.cityID, user.uid, parseInt(per_page), obj_id ])
            if(data.error){
                throw "An error occurred while retrieving the data"
            }
            res.json(data.resdb)
        }catch(err){
            console.log("> getpost.js: ERROR:",err)
            res.status(500).json({message:err})
        }
    }
}
