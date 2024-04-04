import { Link } from "react-router-dom";

const NoticeItem = ( {item}) => {
    const {id , title , good ,date,name , content} = item
    return (
        <tr>
            <td> {title}   </td>
            <td> <Link to={`/notice/${id}`}>{content}  </Link> </td>
            <td>{name} </td>
            <td>{date} </td>
            <td>{good} </td>
        </tr>
    );
};

export default NoticeItem;