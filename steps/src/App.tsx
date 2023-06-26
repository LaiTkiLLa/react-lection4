import React, {useState} from 'react';
import './App.css';
import {Commit} from "./components/commit.component";
import {Trainings} from "./components/trainings.component";

export type Workout = {
    date: string;
    distance: string;
}

function App() {

    const items = [
        { date: '', distance: '' },
    ]

    const [commit, setCommit] = useState(items)

    const handleSubmit = (training: Workout) => {
        const indexTraining = commit.findIndex((item) => item.date === training.date)
        if (indexTraining === -1) {
            setCommit((prevCommit) => [...prevCommit, training])
        } else {
            setCommit((prevCommit) => {
                const newCommit = [...prevCommit]
                newCommit[indexTraining].distance = String(Number(training.distance) + Number(newCommit[indexTraining].distance))
                return newCommit
            })
        }
    }

    const handleDelete = (date: string) => {
        setCommit((prevCommit) => prevCommit.filter((item) => item.date !== date))
    }


  return (
    <div className="app">
        < Commit handleSubmit={handleSubmit}/>
        <Trainings training={commit} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
