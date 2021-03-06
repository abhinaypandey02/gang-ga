import EnrolledSession from "../../interfaces/enrolledSessions";
import GymInterface from "../../interfaces/gym";
import UserInterface from "../../interfaces/user";
import fire from "./main";

export async function getUserByID(uid: string) {
    const doc = await fire.firestore().collection("users").doc(uid).get();
    if (doc) {
        return doc.data();
    }
    return null;
}
export async function updateUserProfilePictureURL(
    user: UserInterface,
    pp: string
) {
    await fire.firestore().collection("users").doc(user.uid).update({ pp });
    return pp;
}
export async function getUserByEmail(
    email: string
): Promise<UserInterface | null> {
    const data: any = await fire
        .firestore()
        .collection("users")
        .where("email", "==", email)
        .limit(1)
        .get();
    if (data && !data.empty && data.docs.length === 1 && data.docs[0].exists) {
        return data.docs[0].data();
    }
    return null;
}
export async function addUser(user: UserInterface) {
    return await fire.firestore().collection("users").doc(user.uid).set(user);
}
export async function getGyms() {
    const doc: any = await fire.firestore().collection("gyms").get();
    if (doc) {
        return doc.docs.map((doc: any) => doc.data());
    }
    return null;
}
export async function getGymByID(uid: string) {
    const data: any = await fire
        .firestore()
        .collection("gyms")
        .where("uid", "==", uid)
        .limit(1)
        .get();
    if (data && !data.empty && data.docs.length === 1 && data.docs[0].exists) {
        return data.docs[0].data();
    }
    return null;
}
export async function addGym(gym: GymInterface) {
    return await fire.firestore().collection("gyms").add(gym);
}
export async function getEnrolledSessionByID(uid: string) {
    const doc = await fire
        .firestore()
        .collection("enrolledSessions")
        .doc(uid)
        .get();
    if (doc) {
        return doc.data();
    }
    return null;
}
export async function getEnrolledSessionByUser(uid: string) {
    const data = await fire
        .firestore()
        .collection("enrolledSessions")
        .where("attendee", "==", uid)
        .get();
    if (data && !data.empty) {
        return data.docs.map((doc: any) => doc.data());
    }
    return [];
}
export async function addEnrolledSession(enrolledSession: EnrolledSession) {
    return await fire
        .firestore()
        .collection("enrolledSessions")
        .add(enrolledSession);
}
