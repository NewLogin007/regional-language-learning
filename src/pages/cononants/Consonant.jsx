import { useLocation } from 'react-router'
import s from './Consonant.module.scss'
import { useState, createContext, useContext } from 'react';

const LinkContext = createContext({
    link: {},
    setLink: () => {}
});

const iframeStyle = {
    width: "80%",
    height: "80%",
    border: 0
}

export default function Consonant(){
    const {state} = useLocation();
    const [link, setLink] = useState(undefined);
    console.log(state);

    return(
        <LinkContext.Provider value={{link, setLink}}>
            <div id={s.container}>
                <div id={s.title}>
                    {state.title}
                </div>
                <List state={state} />
                {
                    link !== undefined &&
                    <div id={s.display}>
                        <i
                            className="fa-regular fa-circle-xmark"
                            onClick={() => {
                                setLink(undefined)
                            }}
                        ></i>
                        <iframe title='video' src={link} style={iframeStyle}></iframe>
                    </div>
                }
            </div>
        </LinkContext.Provider>
    )
}


function List(props){
    return(
        <ul id={s.list}>
            {
                props.state.data.map((item, idx) => {
                    return <ListItem key={idx} text={item.display} link={item.link} side={idx % 2 === 0 ? "left" : "right"} />
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