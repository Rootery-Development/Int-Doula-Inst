// import { currentProfile } from "./current-profile"

import { currentProfile } from "./current-profile"
 
export const isTeacher = (userId?: string | null ) => {
    return userId === process.env.NEXT_PUBLIC_TEACHER_ID;
}