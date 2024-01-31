import {useParams} from "react-router-dom";
import HeaderComponent from "../components/header/HeaderComponent";
import FooterComponent from "../components/footer/FooterComponent";

export default function Post() {

    const { postId } = useParams();

    return (
        <>
            <HeaderComponent/>
            <div className="currentPost">
                <h4>#ID: {postId}</h4>
            </div>
            <FooterComponent/>
        </>
    )
}