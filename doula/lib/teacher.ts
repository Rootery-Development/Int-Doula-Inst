<<<<<<< HEAD
import { currentProfile } from "./current-profile"
=======
// import { currentProfile } from "./current-profile"
>>>>>>> bed8e42685e04bfc762b90005269364cff930fee

export const isTeacher = (userId?: string | null ) => {
    return userId === process.env.NEXT_PUBLIC_TEACHER_ID;
}