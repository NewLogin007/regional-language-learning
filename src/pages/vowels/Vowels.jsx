import s from './Vowels.module.scss'
import vowelsData from '../../data/vowels.json'
import { useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';

const LinkContext = createContext({
    link: {},
    setLink: () => {}
});
const iframeStyle = {
    width: "80%",
    height: "80%",
    border: 0
}

export default function Vowels() {
    const [link, setLink] = useState(undefined);

    return (
        <LinkContext.Provider value={{link, setLink}}>
            <div id={s.vowels}>
                <div id={s.title}>
                    Vowels
                </div>
                <List />
                {
                    link !== undefined &&
                    <div id={s.display}>
                        <i
                            className="fa-regular fa-circle-xmark"
                            onClick={() => {
                                setLink(undefined)
                            }}
                        ></i>
                        <iframe src={link} style={iframeStyle}></iframe>
                    </div>
                }
            </div>
        </LinkContext.Provider>
    );
}


function List(){
    return(
        <ul id={s.list}>
            {
                vowelsData.data.map((item, idx) => {
                    return <ListItem key={idx} text={item.text} link={item.link} side={idx % 2 === 0 ? "left" : "right"} />
                })
            }
        </ul>
    )
}

function ListItem(props){
    const {setLink} = useContext(LinkContext);

    function showVideo(){
        setLink(props.link);
    }

    const padding = 40;
    const style = props.side === "left" ? {paddingRight: `${padding}rem`}: {paddingLeft: `${padding }rem`};

    return(
        <li className={s.listItem} style={style}>
            <p onClick={showVideo}>
                {props.text}
            </p>
        </li>
    )
}