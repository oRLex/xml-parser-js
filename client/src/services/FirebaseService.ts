import db from "../config/firebase";
import {RegionType} from "../types/types";

const uaRegion = db.collection("ua_region");
const batch = db.batch()

export type FirebaseResponseType = {
    success: boolean,
    message?: string
}

class FirebaseService {
    getAll() {
        return uaRegion.get();
    }

    async create(region: Array<RegionType>) {
        await region.map(async (item) => {
            const collectionRef = await uaRegion.doc();
            batch.set(collectionRef, item);
        });
        return batch.commit().then((): FirebaseResponseType => {
            return {success: true};
        }).catch((err): FirebaseResponseType => {
            return {
                success: false,
                message: err
            }
        });

    }


}

export default new FirebaseService();