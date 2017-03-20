
import {dbData} from "./db-data";



export function lessonsRoute(req, res) {

    console.log(req.query);

    const courseId = parseInt(req.query['courseId']) - 1;

    const lessons = dbData[courseId].lessons;

    res.status(200).json({payload: lessons.map(buildLessonSummary)});

}


function buildLessonSummary({url,description,duration},index) {
    return {
        url,
        description,
        seqNo: index,
        duration
    }
}

