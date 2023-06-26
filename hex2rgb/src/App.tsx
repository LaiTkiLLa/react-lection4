import React, {useState} from 'react';
import './App.css';
import {Converter} from "./components/converter.component";

function App() {

    const [color, setColor] = useState('')
    const [convertColor, setConvertColor] = useState('rbg(255,255,255)')
    const regLength = /^#.{6}/
    const regHex = /#([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?\b/

    const convertToRbg = (hexColor: string) => {
        const value = hexColor.split('#')[1]
        const r16 = `${value[0]}${value[1]}`
        const g16 = `${value[2]}${value[3]}`
        const b16 = `${value[4]}${value[5]}`
        setConvertColor(`rbg (${parseInt(r16,16)},${parseInt(g16,16)},${parseInt(b16,16)})`)
        return `${parseInt(r16,16)},${parseInt(g16,16)},${parseInt(b16,16)}`
    }

    const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        const validateLength = new RegExp(regLength).test(e.target.value)
        if (validateLength) {
            const validateColor = new RegExp(regHex).test(e.target.value)
            if (validateColor) {
                convertToRbg(e.target.value)
                setColor(e.target.value)
            } else {
                setConvertColor('Ошибка!')
                setColor('#FF0000')
            }
        } else {
            setConvertColor('rbg(255,255,255)')
            setColor('#fff')
        }
    }

  return (
      <div className={'App'} style={{background: color}}>
          < Converter color={color} handleChange={handleChange} convertColor={convertColor}/>
      </div>


  );
}

export default App;
