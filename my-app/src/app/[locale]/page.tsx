import TaskBoard from "../_components/main/TaskBoard/TaskBoard";
import TaskBoardList from "../_components/main/TaskBoardList/TaskBoardList";

export default function Home() {
    return(
        <div className="flex flex-col px-2">
            <TaskBoardList/>
            <TaskBoard/>
        </div>
    )
}
