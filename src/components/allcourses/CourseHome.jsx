import Back from "../common/back/Back"
import CoursesCard from "./CouseCrad"
import OnlineCourses from "./OnlineCourse"


const CourseHome = () => {
    return (
        <>
            <Back title='Explore Courses' />
            <CoursesCard />
            <OnlineCourses />

        </>
    )
}

export default CourseHome