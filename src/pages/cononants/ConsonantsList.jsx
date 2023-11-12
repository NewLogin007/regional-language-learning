import s from './Consonant.module.scss'
import consonantListData from '../../data/consonants.json'
import { useNavigate } from 'react-router'

export default function ConsonantsList(){
    return(
        <div id={s.container}>
            <div id={s.title}>
                Consonants List
            </div>
            <List />
        </div>
    )
}

function List(){
    return(
        <ul id={s.list}>
            {
                consonantListData.map((item, idx) => {
                    return <ListItem key={idx} data={item.data} text={item.text} side={idx % 2 === 0 ? "left" : "right"} />
                })
            }
        </ul>
    )
}

function ListItem(props){
    const navigate = useNavigate();
    const padding = 40;
    const style = props.side === "left" ? {paddingRight: `${padding}rem`}: {paddingLeft: `${padding }rem`};

    return(
        <li className={s.listItem} style={style}>
            <p
            onClick={() => {
                navigate("/consonant", {
                    state: {
                        title: props.text,
                        data: props.data
                    }
                })
            }}
            style={{fontSize: "1rem"}}
            >
                {props.text}
            </p>
        </li>
    )
}