import React, {useState} from 'react';
import './App.css';
import {FileManager} from "./components/file-manager.component";
import {Files} from "./components/files.component";

function App() {

    const [form, setForm] = useState<any>([])

    const fileToDataUrl = (file: any) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.addEventListener('load', (evt: any) => {
                resolve(evt.currentTarget.result);
            });

            fileReader.addEventListener('error', (evt: any) => {
                reject(new Error(evt.currentTarget.error));
            });

            fileReader.readAsDataURL(file);
        });
    }

    const handleSelect = async (e: any) => {
        const files = [...e.target.files];
        const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
        setForm([...form, urls])
    }

    const handleClose = (url: string) => {
        const updateForm = form.filter((urlImage: string) => urlImage !== url);
        setForm(updateForm);
    }

  return (
      <div className="container">
          <FileManager handleSelect={handleSelect} />
          <Files files={form} handleClose={handleClose}/>
      </div>
  );
}

export default App;
