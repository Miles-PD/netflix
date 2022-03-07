import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

//target will be films or series
export default function useConent(target) {
    const [content, setContent] = useState([])
    const {firebase} = useContext(FirebaseContext)

    useEffect(() => {
        firebase
            .firestore()
            .collection(target)
            .get()
            .then((snapshot) => {
                const allContent = snapshot.docs.map((contentObj) => ({
                    ...contentObj.data(),
                    docId: contentObj.id,
                }))

                setContent(allContent)

            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [])

    return {[target]: content}
}