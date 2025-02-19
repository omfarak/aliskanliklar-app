import React, {useState} from "react";
import HabitCard from "../../components/Habits/HabitCard/HabitCard";
import {useSelector} from "react-redux";
import AuthContainer from "../../components/Auth/AuthContainer/AuthContainer";
import HabitContainer from "../../components/Habits/HabitContainer/HabitContainer";

const Dashboard = () => {
    const habits = [
        { name: "Workout", streak: 5 },
        { name: "Read", streak: 3 },
        { name: "Meditate", streak: 7 }
    ];
    const [search, setSearch] = useState("");

    return (
        <HabitContainer>
            <div>
                {habits.map((habit, index) => (
                    <HabitCard key={index} habit={habit} />
                ))}
            </div>
        </HabitContainer>
    );
}

export default Dashboard;