import "./App.css";
import ProfileCard from "./components/ProfileCard";
import { userInfoList } from "./utility/userList";

function App() {
    return (
        <>
            <div className="flex flex-wrap justify-center gap-4 my-6">
                {userInfoList.map((user, index) => (
                    <div key={index}>
                        <ProfileCard {...user} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
